import Link from "next/link";

type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ tone = "dark", className = "", showWordmark = true }: LogoProps) {
  const isLight = tone === "light";

  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`}>
      <span className="relative inline-flex size-11 shrink-0 items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="size-full drop-shadow-[0_6px_14px_rgba(23,56,42,0.18)]"
        >
          <defs>
            <linearGradient id="kh-mark-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={isLight ? "#f7f2e6" : "#1e4735"} />
              <stop offset="100%" stopColor={isLight ? "#e9dfc9" : "#17382a"} />
            </linearGradient>
            <linearGradient id="kh-leaf" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor={isLight ? "#3d6c55" : "#bfd0be"} />
              <stop offset="100%" stopColor={isLight ? "#1e4735" : "#7e9a82"} />
            </linearGradient>
          </defs>
          <path
            d="M24 2.5c11.4 0 20.5 8 20.5 19.2 0 11.4-8.2 23.8-20.5 23.8S3.5 33.1 3.5 21.7C3.5 10.5 12.6 2.5 24 2.5Z"
            fill="url(#kh-mark-bg)"
          />
          <path
            d="M24 37V18"
            stroke={isLight ? "#17382a" : "#c2a265"}
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M24 28c-6.4 0-9.6-3.3-9.9-9.4 6.4-.2 9.7 3.2 9.9 9.4Z"
            fill="url(#kh-leaf)"
          />
          <path
            d="M24 22.5c.2-6.1 3.6-9.5 10-9.3-.3 6.2-3.6 9.4-10 9.3Z"
            fill="url(#kh-leaf)"
          />
          <path
            d="M24 34.2c-4.7 0-7.6-2.6-7.9-7.3 5.1-.2 7.7 2.5 7.9 7.3Z"
            fill="url(#kh-leaf)"
            opacity="0.7"
          />
          <circle cx="24" cy="11.4" r="1.6" fill={isLight ? "#17382a" : "#e3d2ae"} />
        </svg>
      </span>

      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[22px] font-medium tracking-[0.01em] ${
              isLight ? "text-cream" : "text-forest"
            }`}
          >
            Kankoriya
          </span>
          <span
            className={`mt-1 text-[8.5px] font-semibold uppercase tracking-[0.34em] ${
              isLight ? "text-cream/70" : "text-forest-600"
            }`}
          >
            Homeopathy
          </span>
        </span>
      ) : null}
    </Link>
  );
}
