import Link from "next/link";

const links = [
  ["GitHub", "https://github.com/CsPS0"],
  ["Email", "mailto:solti.csongor.peter@gmail.com"],
  ["All my links", "https://yoursit.ee/csps"],
  ["My school", "https://neumann.bmszc.hu/"],
];

const about = [
  ["Studying", "Software developer and tester at BMSZC Neumann János Informatikai Technikum."],
  ["Building", "Web and desktop apps with Next.js, TypeScript, .NET and AvaloniaUI."],
  ["Projects so far", "Full-stack web dashboards, interactive maps and desktop software."],
  ["Side project", "Hello-World, the same small program in as many languages as I can, to learn their basic syntax."],
  ["How I work", "I go for 100% in everything, from learning a framework to clearing every achievement in a game."],
];

const pages = [
  ["Projects", "What I've built, with code and live links.", "/projects"],
  ["For hirers", "The short version, plus a way to contact me.", "/hire"],
  ["Favorites", "Games, movies, series, books and music.", "/favorites"],
];

const link = "underline underline-offset-4 hover:text-white";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <header>
        <p className="font-mono text-sm text-zinc-500">CsPS0</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Solti Csongor Péter
        </h1>
        <p className="mt-4 text-lg text-zinc-400">
          Software developer and tester student from Hungary. I build web and
          desktop apps with Next.js, TypeScript and .NET, and I like to finish
          what I start. Outside of code I game and hike.
        </p>
        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {links.map(([label, href]) => (
            <a key={label} href={href} className={link}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">About</h2>
        <dl className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          {about.map(([k, v]) => (
            <div key={k} className="border-b border-zinc-800 py-3 first:pt-0 last:border-0 last:pb-0">
              <dt className="font-mono text-xs uppercase tracking-widest text-zinc-500">{k}</dt>
              <dd className="mt-1 text-sm text-zinc-300">
                {k === "Side project" ? (
                  <>
                    <a href="https://github.com/CsPS0/Hello-World" className={link}>
                      Hello-World
                    </a>
                    , the same small program in as many languages as I can, to
                    learn their basic syntax.
                  </>
                ) : (
                  v
                )}
              </dd>
            </div>
          ))}
        </dl>

        <details className="group mt-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <summary className="cursor-pointer font-semibold marker:text-zinc-500">
            Why I chose programming
          </summary>
          <div className="mt-4 space-y-4 text-sm leading-6 text-zinc-400">
            <p>
              I got into IT because I wanted to know how technical things work
              under the hood, and gaming was only part of that. I used
              open-source tools and kept digging past the surface-level stuff
              you find on YouTube, and I stayed away from piracy. I started
              learning programming in 8th grade, at about 12. There was no AI
              or LLM boom yet, and software development looked like a good
              career with a strong job market.
            </p>
            <p>
              A year later, in 9th grade, ChatGPT 3.5 came out and the
              entry-level market felt like it collapsed. That showed me how
              fast AI can change things, so I widened my skills and started
              learning computer networks too. I wanted a base that would hold
              up whatever happens next.
            </p>
          </div>
        </details>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Explore</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {pages.map(([title, desc, href]) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-zinc-400"
              >
                <span className="font-semibold">{title}</span>
                <span className="mt-2 flex-1 text-sm text-zinc-400">{desc}</span>
                <span className="mt-3 text-zinc-500 transition group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
