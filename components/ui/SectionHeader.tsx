interface SectionHeaderProps {
  id?: string;
  title: string;
  description?: string;
  index?: string;
  light?: boolean;
}

export default function SectionHeader({
  id,
  title,
  description,
  index,
  light = false,
}: SectionHeaderProps) {
  return (
    <header className={index ? "flex gap-4 sm:gap-6" : undefined}>
      {index && (
        <span
          className="shrink-0 font-sans text-sm font-medium tabular-nums text-archivum-red"
          aria-hidden="true"
        >
          {index}
        </span>
      )}
      <div>
        <h2
          id={id}
          className={`font-serif text-3xl font-semibold sm:text-4xl ${
            light ? "text-snow" : "text-deep-space-blue"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-1 max-w-2xl text-base ${
              light ? "text-snow/80" : "text-neutral-600"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
