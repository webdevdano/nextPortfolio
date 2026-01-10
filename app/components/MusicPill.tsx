"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

type Track = {
  src: string;
  artist?: string;
  title?: string;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function titleFromSrc(src: string) {
  const last = src.split("/").pop() ?? src;
  const decoded = (() => {
    try {
      return decodeURIComponent(last);
    } catch {
      return last;
    }
  })();
  return decoded.replace(/\.[a-z0-9]+$/i, "");
}

export default function MusicPill({
  tracks,
}: {
  tracks?: Track[];
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);

  const playlist = useMemo<Track[]>(() => {
    if (tracks?.length) return tracks;
    return [{ src: "/music.mp3" }];
  }, [tracks]);

  const activeTrack = playlist[Math.min(trackIndex, playlist.length - 1)];
  const activeSrc = useMemo(() => {
    const raw = activeTrack?.src ?? "/music.mp3";
    try {
      return encodeURI(decodeURI(raw));
    } catch {
      return encodeURI(raw);
    }
  }, [activeTrack?.src]);
  const activeTitle = activeTrack?.title ?? titleFromSrc(activeTrack?.src ?? "");
  const activeArtist = (activeTrack?.artist ?? "").trim();
  const activeLabel = activeArtist ? `${activeArtist} — ${activeTitle}` : activeTitle;
  const shouldMarquee = activeLabel.length > 22;

  useEffect(() => {
    const audio = new Audio(activeSrc);
    audio.loop = true;
    audio.preload = "metadata";

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onLoaded = () => setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
    const onTime = () => setCurrentTime(audio.currentTime || 0);

    const onEnded = () => {
      // If loop ever gets disabled, continue playlist.
      setDuration(0);
      setCurrentTime(0);
      setTrackIndex((i) => (playlist.length ? (i + 1) % playlist.length : 0));
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
      audioRef.current = null;
    };
  }, [activeSrc, playlist.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  const nextTrack = async () => {
    if (playlist.length <= 1) return;

    const wasPlaying = !audioRef.current?.paused;
    setDuration(0);
    setCurrentTime(0);
    setTrackIndex((i) => (i + 1) % playlist.length);

    if (wasPlaying) {
      // Wait a tick for the new audio instance to mount.
      requestAnimationFrame(async () => {
        try {
          await audioRef.current?.play();
        } catch {
          setIsPlaying(false);
        }
      });
    }
  };

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch {
      // If the file is missing or playback is blocked, keep the UI idle.
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    setIsMuted((m) => !m);
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50">
      <div className="flex items-center gap-2 rounded-full border border-(--foreground)/15 bg-(--background)/80 backdrop-blur-md px-3 py-2 text-sm text-(--foreground)">
        <button
          type="button"
          onClick={toggle}
          className="rounded-full p-2 opacity-90 hover:opacity-100 transition-opacity"
          aria-label={isPlaying ? "Pause" : "Play"}
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <PauseIcon className="h-5 w-5 text-(--foreground)" />
          ) : (
            <PlayIcon className="h-5 w-5 text-(--foreground)" />
          )}
        </button>

        {playlist.length > 1 ? (
          <button
            type="button"
            onClick={nextTrack}
            className="rounded-full p-2 opacity-80 hover:opacity-100 transition-opacity"
            aria-label="Next track"
            title="Next track"
          >
            <ChevronRightIcon className="h-5 w-5 text-(--foreground)" />
          </button>
        ) : null}

        <span className="h-4 w-px bg-(--foreground)/15" aria-hidden="true" />

        <div className="flex items-center gap-2">
          {shouldMarquee ? (
            <div className="max-w-44 overflow-hidden" title={activeLabel}>
              <div className="marquee-track flex w-max gap-8 opacity-70 whitespace-nowrap motion-reduce:animate-none">
                <span>{activeLabel}</span>
                <span aria-hidden="true">{activeLabel}</span>
              </div>
            </div>
          ) : (
            <span className="opacity-70 max-w-44 truncate" title={activeLabel}>
              {activeLabel}
            </span>
          )}
          <span className="opacity-60 tabular-nums">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        <span className="h-4 w-px bg-(--foreground)/15" aria-hidden="true" />

        <button
          type="button"
          onClick={toggleMute}
          className="rounded-full p-2 opacity-80 hover:opacity-100 transition-opacity"
          aria-label={isMuted ? "Unmute" : "Mute"}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted || volume === 0 ? (
            <SpeakerXMarkIcon className="h-5 w-5 text-(--foreground)" />
          ) : (
            <SpeakerWaveIcon className="h-5 w-5 text-(--foreground)" />
          )}
        </button>

        <input
          aria-label="Volume"
          title="Volume"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-20 accent-(--foreground)"
        />
      </div>
    </div>
  );
}
