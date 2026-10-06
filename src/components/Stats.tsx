import Counter from "./Counter";

const stats = [
  { value: 9, suffix: "+", label: "Fabric Varieties" },
  { value: 4, suffix: "", label: "Quality Tests" },
  { value: 6, suffix: "", label: "Days a Week" },
  { value: 100, suffix: "%", label: "Quality Checked" },
];

export default function Stats() {
  return (
    <section aria-label="P19 Versatile Fab in numbers" className="py-16 md:py-24">
      <div className="container-site">
        <ul className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <li
              key={s.label}
              className={`reveal relative flex items-center justify-center text-center ${
                i > 0 ? "lg:border-l lg:border-line" : ""
              } ${i % 2 === 1 ? "border-l border-line lg:border-l" : ""}`}
            >
              <span className="stat-number select-none" aria-hidden="true">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="absolute inset-0 flex items-center justify-center font-serif text-xl text-ink md:text-2xl">
                <span className="sr-only">
                  {s.value}
                  {s.suffix}{" "}
                </span>
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
