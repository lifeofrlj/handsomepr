"use client";

import { Play } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const ORIGIN = "https://player.vimeo.com";

/** Vimeo video with every player control hidden and a single play button on top. */
export function VimeoShort({ video, title }: { video: string; title: string }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [playing, setPlaying] = useState(false);

  const post = (method: string, value?: string) =>
    frame.current?.contentWindow?.postMessage(JSON.stringify(value ? { method, value } : { method }), ORIGIN);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== ORIGIN || e.source !== frame.current?.contentWindow) return;
      let data: { event?: string };
      try {
        data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }
      if (data.event === "ready") ["play", "pause", "ended"].forEach((ev) => post("addEventListener", ev));
      if (data.event === "play") {
        setPlaying(true);
        window.dispatchEvent(new CustomEvent("hp-vimeo-play", { detail: video }));
      }
      if (data.event === "pause" || data.event === "ended") setPlaying(false);
    };
    const onOtherPlay = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== video) post("pause");
    };
    window.addEventListener("message", onMessage);
    window.addEventListener("hp-vimeo-play", onOtherPlay);
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("hp-vimeo-play", onOtherPlay);
    };
  }, [video]);

  const toggle = () => {
    if (playing) {
      post("pause");
      setPlaying(false);
    } else {
      post("play");
      setPlaying(true);
    }
  };

  return (
    <div className="hp-video hp-video--short hp-vshort">
      <iframe
        allow="autoplay; fullscreen; picture-in-picture"
        loading="lazy"
        ref={frame}
        src={`${ORIGIN}/video/${video}&controls=0&title=0&byline=0&portrait=0&badge=0&vimeo_logo=0&like=0&watchlater=0&share=0&playsinline=1&dnt=1`}
        title={title}
      />
      <button
        aria-label={playing ? `Pause ${title}` : `Play ${title}`}
        className="hp-vshort__btn"
        data-playing={playing ? "true" : "false"}
        onClick={toggle}
        type="button"
      >
        <span className="hp-vshort__icon">
          <Play aria-hidden size={30} weight="fill" />
        </span>
      </button>
    </div>
  );
}
