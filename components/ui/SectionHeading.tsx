type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl text-left"} ${className}`}
    >
      <p className={`eyebrow ${align === "center" ? "justify-center" : ""} ${isLight ? "text-gold-light" : ""}`}>
        <span className="inline-block h-px w-7 bg-gold" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-[clamp(2rem,4.2vw,3.15rem)] font-medium leading-[1.08] ${
          isLight ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-[15px] leading-7 sm:text-base ${
            isLight ? "text-cream/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
