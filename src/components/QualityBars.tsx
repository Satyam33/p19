import { qualityTests } from "@/lib/site";

export default function QualityBars() {
  return (
    <ul className="space-y-8">
      {qualityTests.map((t) => (
        <li key={t.label}>
          <div className="mb-3 flex items-baseline justify-between font-serif text-lg text-ink">
            <span>{t.label}</span>
            <span>{t.value}%</span>
          </div>
          <div
            className="h-[3px] w-full bg-line"
            role="progressbar"
            aria-label={t.label}
            aria-valuenow={t.value}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="reveal reveal-bar h-full bg-gold" style={{ width: `${t.value}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}
