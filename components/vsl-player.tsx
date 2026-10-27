"use client";

import { SpeakerHigh } from "@phosphor-icons/react";
import { useRef, useState } from "react";

/** VSL that autoplays muted behind a blue overlay; clicking restarts it with sound. */
export function VslPlayer({ videoId, title }: { videoId: string; title: string }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [started, setStarted] = useState(false);

  const send = (func: string, args: unknown[] = []) =>
    frame.current?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), "*");

  const start = () => {
    send("seekTo", [0, true]);
    send("unMute");
    send("setVolume", [100]);
    send("playVideo");
    setStarted(true);
  };

  return (
    <div className="hp-vsl">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ref={frame}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`}
        title={title}
      />
      {!started && (
        <button aria-label="Play the video with sound" className="hp-vsl__overlay" onClick={start} type="button">
          <span className="hp-vsl__box">
            <SpeakerHigh aria-hidden size={44} weight="fill" />
            <span>Click to learn how</span>
          </span>
        </button>
      )}
    </div>
  );
}
