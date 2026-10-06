export default function RotatingBadge({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`flex h-36 w-36 items-center justify-center rounded-full md:h-44 md:w-44 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text fill="currentColor" fontSize="15" letterSpacing="5.2" fontFamily="var(--font-serif)">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="h-16 w-16 rounded-full border border-current md:h-20 md:w-20" />
    </div>
  );
}
