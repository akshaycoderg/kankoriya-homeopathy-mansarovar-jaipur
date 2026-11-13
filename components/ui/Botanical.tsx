type DecoProps = {
  className?: string;
};

/** A slender botanical sprig used as a decorative accent. */
export function Sprig({ className = "" }: DecoProps) {
  return (
    <svg viewBox="0 0 120 220" fill="none" aria-hidden="true" className={className}>
      <path
        d="M60 214C60 152 58 92 64 22"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path d="M60 52c-24-4-33-20-31-42 22-1 33 15 31 42Z" fill="currentColor" opacity="0.5" />
      <path d="M62 84c-25 2-37-11-41-33 22-6 37 6 41 33Z" fill="currentColor" opacity="0.35" />
      <path d="M61 116c24 2 37-11 40-33-22-6-36 6-40 33Z" fill="currentColor" opacity="0.55" />
      <path d="M60 148c-24-2-35-15-37-36 22-4 34 8 37 36Z" fill="currentColor" opacity="0.3" />
      <path d="M60 178c23 1 35-11 37-31-21-5-33 6-37 31Z" fill="currentColor" opacity="0.45" />
      <circle cx="64" cy="22" r="3.2" fill="#c2a265" opacity="0.9" />
    </svg>
  );
}

/** Soft organic leaf silhouette for section backdrops. */
export function LeafSilhouette({ className = "" }: DecoProps) {
  return (
    <svg viewBox="0 0 420 420" fill="none" aria-hidden="true" className={className}>
      <path
        d="M210 404C120 340 62 260 80 160 98 60 190 12 330 22c-4 140-52 256-120 382Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M210 404C206 280 228 164 330 22"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <path
        d="M224 286c-46-34-64-72-58-122M248 210c36-32 56-68 62-118M198 350c-30-22-44-46-44-78"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.28"
      />
    </svg>
  );
}

/** Curved botanical footer transition. */
export function FooterCurve({ className = "" }: DecoProps) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0 78C182 20 340 4 512 22c194 20 316 72 486 66 154-5 290-44 442-62v94H0V78Z"
        fill="currentColor"
      />
      <path
        d="M0 96c196-44 350-58 528-40 190 19 312 58 470 48 148-9 282-38 442-52v68H0V96Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

/** Botanical corner ornament for framed images. */
export function CornerLeaves({ className = "" }: DecoProps) {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6 154C10 100 28 62 66 34"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path d="M20 96C4 92-2 78 2 60c16 1 24 14 18 36Z" fill="currentColor" opacity="0.55" />
      <path d="M34 66c-15-6-20-20-15-37 16 3 22 17 15 37Z" fill="currentColor" opacity="0.4" />
      <path d="M56 42C45 31 45 17 54 3c13 8 15 23 2 39Z" fill="currentColor" opacity="0.55" />
      <path d="M82 26c-8-12-5-26 6-38 11 10 10 25-6 38Z" fill="currentColor" opacity="0.3" />
      <circle cx="6" cy="154" r="3" fill="#c2a265" />
    </svg>
  );
}

/** Fine dotted arc used behind badges and buttons. */
export function DottedArc({ className = "" }: DecoProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" className={className}>
      <circle
        cx="100"
        cy="100"
        r="86"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 10"
        opacity="0.5"
      />
      <circle cx="100" cy="14" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
