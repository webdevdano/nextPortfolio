export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="text-(--foreground) text-sm font-medium tracking-wide">
        {title}
      </h2>
      <div className="mt-5 space-y-6">{children}</div>
    </section>
  );
}

export function Item({
  heading,
  meta,
  children,
}: {
  heading: string;
  meta: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
      <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-(--foreground) font-medium">{heading}</h3>
            <p className="mt-1 text-sm text-(--body) leading-snug">{meta}</p>
          </div>

          <span className="mt-1 inline-flex select-none items-center gap-2 rounded-full border border-(--foreground)/15 bg-(--background)/35 px-3 py-1 text-xs text-(--body) backdrop-blur-sm">
            <span className="group-open:hidden">Show</span>
            <span className="hidden group-open:inline">Hide</span>
            <span aria-hidden className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-(--foreground)/15 text-(--body)">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">–</span>
            </span>
          </span>
        </div>
      </summary>

      <div className="mt-4 text-sm text-(--body) leading-relaxed">
        {children}
      </div>
    </details>
  );
}
