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
    <div className="rounded-2xl border border-(--foreground)/10 bg-(--foreground)/3 px-6 py-5">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-(--foreground) font-medium">{heading}</h3>
          <p className="mt-1 text-sm text-(--foreground)/50 leading-snug">{meta}</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-(--foreground)/70 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
