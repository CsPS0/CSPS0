import { games, sections, stats, type Item, type Kind } from "./data";

const display = "font-[family-name:var(--font-oswald)] uppercase";
const label = `${display} text-sm tracking-[0.25em] text-zinc-500`;
const lift =
  "transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

function Game({ item, rank }: { item: Item; rank: number }) {
  return (
    <div
      className={`${lift} group relative overflow-hidden rounded-lg border bg-zinc-900/60 p-5 hover:border-zinc-400 ${
        rank === 1 ? "border-zinc-500" : "border-zinc-800"
      }`}
    >
      <span
        aria-hidden
        className={`${display} pointer-events-none absolute -right-2 -top-4 text-8xl leading-none text-zinc-800 transition group-hover:text-zinc-700`}
      >
        {String(rank).padStart(2, "0")}
      </span>
      <p className="relative font-mono text-xs uppercase tracking-widest text-zinc-500">{item.meta}</p>
      <p className={`${display} relative mt-6 text-3xl leading-tight`}>{item.title}</p>
      {item.note && <p className="relative mt-1 text-sm text-zinc-400">{item.note}</p>}
      <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-zinc-300 transition group-hover:scale-x-100 motion-reduce:transition-none" />
    </div>
  );
}

function Ticket({ item }: { item: Item }) {
  return (
    <li className={`${lift} relative flex overflow-hidden rounded-md border border-zinc-800 bg-zinc-900/60 hover:border-zinc-600`}>
      <span aria-hidden className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-zinc-950" />
      <span aria-hidden className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-zinc-950" />
      <div className="flex-1 px-5 py-4">
        <p className={`${display} text-2xl tracking-wide`}>{item.title}</p>
        {item.note && <p className="text-sm text-zinc-400">{item.note}</p>}
      </div>
      <div className="flex w-24 items-center justify-center border-l border-dashed border-zinc-700 px-2 text-center font-mono text-[10px] uppercase leading-4 tracking-widest text-zinc-500">
        {item.meta}
      </div>
    </li>
  );
}

function Book({ item }: { item: Item }) {
  return (
    <li className={`${lift} flex overflow-hidden rounded-r-md border border-zinc-800 bg-zinc-900/60 hover:border-zinc-600`}>
      <div aria-hidden className="w-3 bg-gradient-to-b from-zinc-600 to-zinc-800" />
      <div aria-hidden className="w-px bg-zinc-950" />
      <div className="flex-1 px-4 py-4">
        <p className="font-serif text-xl italic">{item.title}</p>
        {item.note && <p className="mt-1 font-mono text-xs uppercase tracking-widest text-zinc-500">{item.note}</p>}
      </div>
    </li>
  );
}

function Vinyl({ item }: { item: Item }) {
  return (
    <li className={`${lift} group flex items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 hover:border-zinc-600`}>
      <div
        aria-hidden
        className="grid h-20 w-20 shrink-0 place-items-center rounded-full border border-zinc-700 bg-[repeating-radial-gradient(circle,#0b0b0c_0_2px,#18181b_2px_4px)] transition duration-700 group-hover:rotate-180 motion-reduce:transition-none"
      >
        <span className="h-6 w-6 rounded-full border-2 border-zinc-950 bg-zinc-500" />
      </div>
      <div>
        <p className={`${display} text-xl tracking-wide`}>{item.title}</p>
        {item.note && <p className="text-sm text-zinc-400">{item.note}</p>}
      </div>
    </li>
  );
}

const card: Record<Kind, (i: Item) => React.ReactNode> = {
  ticket: (i) => <Ticket key={i.title} item={i} />,
  book: (i) => <Book key={i.title} item={i} />,
  vinyl: (i) => <Vinyl key={i.title} item={i} />,
};

function Group({ heading, kind, items }: { heading: string; kind: Kind; items: Item[] }) {
  return (
    <section>
      <h2 className={label}>{heading}</h2>
      <ul className="mt-3 space-y-3">{items.map(card[kind])}</ul>
    </section>
  );
}

export default function Favorites() {
  const side = (s: "left" | "right") => sections.filter((x) => x.side === s);
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className={`${display} text-center text-5xl tracking-wider sm:text-6xl`}>
        Favorites<span className="text-zinc-500">.</span>
      </h1>

      <div className="mt-10">
        <h2 className={label}>Games</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          {games.map((g, i) => (
            <Game key={g.title} item={g} rank={i + 1} />
          ))}
        </div>
      </div>

      <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_minmax(0,1.2fr)_1fr]">
        <div className="order-2 space-y-8 lg:order-1">
          {side("left").map((s) => (
            <Group key={s.heading} {...s} />
          ))}
        </div>

        <div className="order-1 lg:order-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/slayer.png"
            alt="Doom Slayer line art"
            className="mx-auto w-full max-w-sm [mask-image:radial-gradient(ellipse_at_center,black_72%,transparent_100%)]"
          />
          <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
                <dd className={`${display} text-2xl text-zinc-100`}>{s.value}</dd>
                <dt className="text-xs uppercase tracking-wider text-zinc-400">{s.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-center font-mono text-xs text-zinc-500">DOOM Eternal</p>
        </div>

        <div className="order-3 space-y-8">
          {side("right").map((s) => (
            <Group key={s.heading} {...s} />
          ))}
        </div>
      </div>
    </main>
  );
}
