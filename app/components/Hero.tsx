export default function Hero({
  name,
  title,
  bio,
  links,
  images,
}: {
  name: string;
  title?: string;
  bio?: string;
  links?: React.ReactNode;
  images?: Array<{ src: string; alt?: string }>;
}) {
  return (
    <header className="flex flex-col gap-6">
      <div>
        <h1 className="text-(--foreground) text-5xl font-semibold tracking-tight">{name}</h1>
        {title ? <p className="mt-3 text-(--foreground)/60 text-lg">{title}</p> : null}
      </div>

      {links ? <div className="flex flex-wrap items-center gap-4 text-sm">{links}</div> : null}

      {bio ? <p className="max-w-2xl text-(--foreground)/70 leading-relaxed">{bio}</p> : null}

      {images?.length ? (
        <div className="-mx-1 px-1 overflow-x-auto">
          <div className="flex gap-3">
            {images.map((img) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={img.src}
                src={img.src}
                alt={img.alt ?? ""}
                className="h-28 w-auto rounded-xl ring-1 ring-(--foreground)/10 shrink-0 object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
