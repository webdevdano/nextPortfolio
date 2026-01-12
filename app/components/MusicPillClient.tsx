"use client";

import dynamic from "next/dynamic";

type Track = {
  src: string;
  artist?: string;
  title?: string;
};

const MusicPill = dynamic(() => import("./MusicPill"), {
  ssr: false,
});

export default function MusicPillClient({
  tracks,
}: {
  tracks?: Track[];
}) {
  return <MusicPill tracks={tracks} />;
}
