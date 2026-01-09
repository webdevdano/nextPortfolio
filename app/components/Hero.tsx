export default function Hero({
  name,
  title,
  bio,
  links,
  images,
  media,
  carousel = "manual",
}: {
  name?: string;
  title?: string;
  bio?: string;
  links?: React.ReactNode;
  images?: Array<{ src: string; alt?: string }>;
  media?: Array<
    | { kind: "image"; src: string; alt?: string }
    | { kind: "video"; src: string; poster?: string; alt?: string }
  >;
  carousel?: "manual" | "auto";
}) {
  const tiles = (media ?? images?.map((img) => ({ kind: "image" as const, ...img })) ?? []).filter(
    Boolean
  );

  const sizedTiles = tiles.map((tile, index) => {
    const size = index % 6;
    const heightClass =
      size === 0
        ? "h-20"
        : size === 1
          ? "h-28"
          : size === 2
            ? "h-24"
            : size === 3
              ? "h-32"
              : size === 4
                ? "h-22"
                : "h-30";
    const widthClass =
      size === 1 || size === 3 ? "w-44" : size === 0 || size === 4 ? "w-36" : "w-40";

    return { tile, heightClass, widthClass, key: `${tile.kind}:${tile.src}:${index}` };
  });

  return (
    <header className="flex flex-col gap-6">
      {name ? (
        <div>
          <h1 className="text-(--foreground) text-5xl font-semibold tracking-tight">{name}</h1>
          {title ? <p className="mt-3 text-(--foreground)/60 text-lg">{title}</p> : null}
        </div>
      ) : null}

      {links ? <div className="flex flex-wrap items-center gap-4 text-sm">{links}</div> : null}

      {bio ? <p className="max-w-2xl text-(--foreground)/70 leading-relaxed">{bio}</p> : null}

      {sizedTiles.length ? (
        <div className="-mx-6 px-6">
          {carousel === "auto" ? (
            <div className="overflow-hidden">
              <div
                className="flex w-max gap-3 items-end motion-reduce:animate-none"
                style={{ animation: "marquee-x 28s linear infinite" }}
              >
                {[...sizedTiles, ...sizedTiles].map(({ tile, heightClass, widthClass, key }, idx) => (
                  <div
                    key={`${key}:${idx}`}
                    className={`${heightClass} ${widthClass} rounded-2xl ring-1 ring-(--foreground)/10 bg-(--foreground)/3 overflow-hidden shrink-0`}
                  >
                    {tile.kind === "video" ? (
                      <video
                        className="h-full w-full object-cover"
                        src={tile.src}
                        poster={tile.poster}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="metadata"
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        className="h-full w-full object-cover"
                        src={tile.src}
                        alt={tile.alt ?? ""}
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <div className="flex w-max gap-3 items-end py-1">
                {sizedTiles.map(({ tile, heightClass, widthClass, key }) => (
                  <div
                    key={key}
                    className={`${heightClass} ${widthClass} rounded-2xl ring-1 ring-(--foreground)/10 bg-(--foreground)/3 overflow-hidden shrink-0`}
                  >
                    {tile.kind === "video" ? (
                      <video
                        className="h-full w-full object-cover"
                        src={tile.src}
                        poster={tile.poster}
                        muted
                        loop
                        playsInline
                        controls
                        preload="metadata"
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        className="h-full w-full object-cover"
                        src={tile.src}
                        alt={tile.alt ?? ""}
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </header>
  );
}
