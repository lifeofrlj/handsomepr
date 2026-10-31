"use client";

import { Play, SpeakerHigh } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const ORIGIN = "https://www.youtube-nocookie.com";

type Mode = "intro" | "playing" | "paused";

/**
 * VSL with every YouTube control hidden. Autoplays muted behind a blue overlay;
 * clicking restarts it with sound. While playing, a click pauses; when paused or
 * finished, the blue overlay returns with a single play button.
 */
export function VslPlayer({
  videoId,
  title,
  className = "",
  vertical = false,
}: {
  videoId: string;
  title: string;
  className?: string;
  vertical?: boolean;
}) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [mode, setMode] = useState<Mode>("intro");
  const modeRef = useRef<Mode>("intro");
  modeRef.current = mode;

  const send = (func: string, args: unknown[] = []) =>
    frame.current?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), "*");

  useEffect(() => {
    const listen = () =>
      frame.current?.contentWindow?.postMessage(JSON.stringify({ event: "listening", id: videoId, channel: "widget" }), "*");
    const onMessage = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow) return;
      let data: { event?: string; info?: unknown };
      try {
        data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }
      let state: number | undefined;
      if (data.event === "onStateChange" && typeof data.info === "number") state = data.info;
      if (data.event === "infoDelivery" && data.info && typeof data.info === "object" && "playerState" in data.info)
        state = (data.info as { playerState: number }).playerState;
      if (state === undefined || modeRef.current === "intro") return;
      if (state === 1) setMode("playing");
      if (state === 2 || state === 0) setMode("paused");
    };
    window.addEventListener("message", onMessage);
    const el = frame.current;
    el?.addEventListener("load", listen);
    const t = window.setTimeout(listen, 1500);
    return () => {
      window.removeEventListener("message", onMessage);
      el?.removeEventListener("load", listen);
      window.clearTimeout(t);
    };
  }, [videoId]);

  const startWithSound = () => {
    send("seekTo", [0, true]);
    send("unMute");
    send("setVolume", [100]);
    send("playVideo");
    setMode("playing");
  };

  const pause = () => {
    send("pauseVideo");
    setMode("paused");
  };

  const resume = () => {
    send("unMute");
    send("playVideo");
    setMode("playing");
  };

  return (
    <div className={`hp-vsl hp-vsl--chromeless ${vertical ? "hp-vsl--vertical" : ""} ${className}`.trim()}>
      <iframe
        allow="autoplay; encrypted-media; picture-in-picture"
        ref={frame}
        src={`${ORIGIN}/embed/${videoId}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&rel=0&playsinline=1&modestbranding=1&enablejsapi=1`}
        tabIndex={-1}
        title={title}
      />
      {mode === "intro" && (
        <button aria-label="Play the video with sound" className="hp-vsl__overlay" onClick={startWithSound} type="button">
          <span className="hp-vsl__box">
            <SpeakerHigh aria-hidden size={44} weight="fill" />
            <span>Click to learn how</span>
          </span>
        </button>
      )}
      {mode === "playing" && (
        <button aria-label="Pause the video" className="hp-vsl__catch" onClick={pause} type="button" />
      )}
      {mode === "paused" && (
        <button aria-label="Play the video" className="hp-vsl__overlay hp-vsl__overlay--paused" onClick={resume} type="button">
          <span className="hp-vsl__play">
            <Play aria-hidden size={36} weight="fill" />
          </span>
        </button>
      )}
    </div>
  );
}
