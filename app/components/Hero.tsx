export default function Hero({
  name,
  title,
  bio,
  links,
  images,
  media,
  carousel = "manual",
  rows = 2,
  loop = "seamless",
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
  rows?: 1 | 2;
  loop?: "seamless" | "restart";
}) {
  const tilesRaw = (
    media ?? images?.map((img) => ({ kind: "image" as const, ...img })) ?? []
  ).filter(Boolean);

  const tiles = Array.from(
    new Map(tilesRaw.map((t) => [t.src, t] as const)).values()
  );

  const sizedTiles = tiles.map((tile, index) => {
    const size = index % 6;
    const heightClass =
      size === 0
        ? "h-44"
        : size === 1
          ? "h-64"
          : size === 2
            ? "h-56"
            : size === 3
              ? "h-72"
              : size === 4
                ? "h-[200px]"
                : "h-60";
    const widthClass =
      size === 1 || size === 3 ? "w-72" : size === 0 || size === 4 ? "w-60" : "w-64";

    return { tile, heightClass, widthClass, key: `${tile.kind}:${tile.src}:${index}` };
  });

  const rowA = rows === 2 ? sizedTiles.filter((_, idx) => idx % 2 === 0) : sizedTiles;
  const rowB = rows === 2 ? sizedTiles.filter((_, idx) => idx % 2 === 1) : [];

  const columns =
    rows === 2
      ? Array.from(
          { length: Math.max(rowA.length, rowB.length) },
          (_, i) => ({ a: rowA[i], b: rowB[i] })
        ).filter((col) => col.a || col.b)
      : [];

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
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          {carousel === "auto" ? (
            <div className="overflow-hidden">
              {rows === 2 && columns.length ? (
                <div
                  className="flex w-max gap-4 items-end motion-reduce:animate-none"
                  style={{
                    animation:
                      loop === "restart"
                        ? "marquee-x-restart 28s linear infinite"
                        : "marquee-x 28s linear infinite",
                  }}
                >
                  {(loop === "restart" ? columns : [...columns, ...columns]).map((col, idx) => (
                    <div key={`col:${idx}`} className="flex flex-col gap-4 h-[calc(theme(spacing.72)_*_2_+_theme(spacing.4))] justify-end">
                      {col.a ? (
                        <div
                          className={`${col.a.heightClass} ${col.a.widthClass} rounded-2xl ring-1 ring-(--foreground)/10 bg-(--foreground)/3 overflow-hidden shrink-0`}
                        >
                          {col.a.tile.kind === "video" ? (
                            <video
                              className="h-full w-full object-cover"
                              src={col.a.tile.src}
                              poster={col.a.tile.poster}
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
                              src={col.a.tile.src}
                              alt={col.a.tile.alt ?? ""}
                              loading="lazy"
                            />
                          )}
                        </div>
                      ) : null}

                      {col.b ? (
                        <div
                          className={`${col.b.heightClass} ${col.b.widthClass} rounded-2xl ring-1 ring-(--foreground)/10 bg-(--foreground)/3 overflow-hidden shrink-0`}
                        >
                          {col.b.tile.kind === "video" ? (
                            <video
                              className="h-full w-full object-cover"
                              src={col.b.tile.src}
                              poster={col.b.tile.poster}
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
                              src={col.b.tile.src}
                              alt={col.b.tile.alt ?? ""}
                              loading="lazy"
                            />
                          )}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="flex w-max h-72 gap-4 items-end motion-reduce:animate-none"
                  style={{
                    animation:
                      loop === "restart"
                        ? "marquee-x-restart 28s linear infinite"
                        : "marquee-x 28s linear infinite",
                  }}
                >
                  {(loop === "restart" ? rowA : [...rowA, ...rowA]).map(
                    ({ tile, heightClass, widthClass, key }, idx) => (
                      <div
                        key={`${key}:a:${idx}`}
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
                    )
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <div className="w-max py-1">
                {rows === 2 && columns.length ? (
                  <div className="flex w-max gap-4 items-end">
                    {columns.map((col, idx) => (
                      <div key={`col:${idx}`} className="flex flex-col gap-4 h-[calc(theme(spacing.72)_*_2_+_theme(spacing.4))] justify-end">
                        {col.a ? (
                          <div
                            className={`${col.a.heightClass} ${col.a.widthClass} rounded-2xl ring-1 ring-(--foreground)/10 bg-(--foreground)/3 overflow-hidden shrink-0`}
                          >
                            {col.a.tile.kind === "video" ? (
                              <video
                                className="h-full w-full object-cover"
                                src={col.a.tile.src}
                                poster={col.a.tile.poster}
                                muted
                                loop
                                playsInline
                                preload="metadata"
                              />
                            ) : (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                className="h-full w-full object-cover"
                                src={col.a.tile.src}
                                alt={col.a.tile.alt ?? ""}
                                loading="lazy"
                              />
                            )}
                          </div>
                        ) : null}

                        {col.b ? (
                          <div
                            className={`${col.b.heightClass} ${col.b.widthClass} rounded-2xl ring-1 ring-(--foreground)/10 bg-(--foreground)/3 overflow-hidden shrink-0`}
                          >
                            {col.b.tile.kind === "video" ? (
                              <video
                                className="h-full w-full object-cover"
                                src={col.b.tile.src}
                                poster={col.b.tile.poster}
                                muted
                                loop
                                playsInline
                                preload="metadata"
                              />
                            ) : (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                className="h-full w-full object-cover"
                                src={col.b.tile.src}
                                alt={col.b.tile.alt ?? ""}
                                loading="lazy"
                              />
                            )}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex w-max h-72 gap-4 items-end">
                    {rowA.map(({ tile, heightClass, widthClass, key }) => (
                      <div
                        key={`${key}:a`}
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
                )}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </header>
  );
}
