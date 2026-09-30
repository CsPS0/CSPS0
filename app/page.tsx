import Link from "next/link";

const projects = [
  {
    name: "Hello-World",
    desc: "'Hello, World!' in 140+ programming languages, from Assembly to Zig.",
    stack: ["Multi-language"],
    repo: "https://github.com/CsPS0/Hello-World",
    live: "https://csps0.github.io/Hello-World/",
  },
  {
    name: "Console-UNO",
    desc: "A simple UNO game for the terminal, written in C# on .NET.",
    stack: ["C#", ".NET"],
    repo: "https://github.com/CsPS0/Console-UNO",
    live: "https://csps0.github.io/Console-UNO/",
  },
  {
    name: "MagyarTortenesekMindMap",
    desc: "Interactive mind map visualising Hungarian political and public events from 2006 to 2026.",
    stack: ["TypeScript"],
    repo: "https://github.com/CsPS0/MagyarTortenesekMindMap",
  },
  {
    name: "PDF-Processor",
    desc: "OCR text extraction and password removal for PDFs.",
    stack: ["HTML", "JavaScript"],
    repo: "https://github.com/CsPS0/PDF-Processor",
    live: "https://csps0.github.io/PDF-Processor/",
  },
  {
    name: "pala",
    desc: "Interactive terminal UI (TUI) for the Kréta e-napló system.",
    stack: ["Dart"],
    repo: "https://github.com/CsPS0/pala",
  },
  {
    name: "Furnovskyland",
    desc: "A website about the Great Furnovskyland.",
    stack: ["JavaScript"],
    repo: "https://github.com/CsPS0/WebSite-Furnovskyland",
    live: "https://furnovskyland.vercel.app/en/",
  },
];

const links = [
  ["GitHub", "https://github.com/CsPS0"],
  ["Email", "mailto:solti.csongor.peter@gmail.com"],
];

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
          what I start.
        </p>
        <nav className="mt-6 flex gap-4">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="underline underline-offset-4 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <li
              key={p.name}
              className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-zinc-600"
            >
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm text-zinc-400">
                {p.desc}
              </p>
              <p className="mt-3 font-mono text-xs text-zinc-500">
                {p.stack.join(" · ")}
              </p>
              <div className="mt-3 flex gap-4 text-sm">
                <a href={p.repo} className="underline underline-offset-4">
                  Code
                </a>
                {p.live && (
                  <a href={p.live} className="underline underline-offset-4">
                    Live
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Link
        href="/favorites"
        className="group mt-16 flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-400"
      >
        <span>
          <span className="block font-mono text-xs uppercase tracking-widest text-zinc-500">
            Off the clock
          </span>
          <span className="mt-1 block text-xl font-semibold">My favorites</span>
          <span className="mt-1 block text-sm text-zinc-400">
            Games, movies, series, books and music.
          </span>
        </span>
        <span className="text-2xl text-zinc-500 transition group-hover:translate-x-1 group-hover:text-white">
          →
        </span>
      </Link>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-4 text-zinc-400">
          I study at BMSZC Neumann János Informatikai Technikum. I started
          programming at 12. When AI began changing the entry-level job market,
          I added computer networking so my skills cover more than code.
        </p>
      </section>
    </main>
  );
}
