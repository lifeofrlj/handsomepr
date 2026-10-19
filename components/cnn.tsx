"use client";

import { useState } from "react";
import { Play } from "@phosphor-icons/react";

import { site } from "@/lib/site";

export function CnnVideo() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="hp-video">
      {playing ? (
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={`https://www.youtube-nocookie.com/embed/${site.cnnVideoId}?autoplay=1&rel=0&modestbranding=1`}
          title="CNN documentary featuring Ryan Johnson"
        />
      ) : (
        <button aria-label="Play the CNN documentary" onClick={() => setPlaying(true)} type="button">
          <img alt="" loading="lazy" src={`https://i.ytimg.com/vi/${site.cnnVideoId}/hqdefault.jpg`} />
          <span className="hp-video__play">
            <Play aria-hidden size={28} weight="fill" />
          </span>
        </button>
      )}
    </div>
  );
}
