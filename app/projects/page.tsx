export const metadata = { title: "Projects | CsPS0" };

type Project = {
  name: string;
  desc: string;
  stack?: string[];
  repo?: string;
  live?: string;
  status?: "Private" | "Archived";
};

const gh = (name: string) => `https://github.com/CsPS0/${name}`;

const projects: Project[] = [
  {
    name: "Hello-World",
    desc: "'Hello, World!' in 140+ programming languages, from Assembly to Zig.",
    stack: ["Multi-language"],
    repo: gh("Hello-World"),
    live: "https://csps0.github.io/Hello-World/",
  },
  {
    name: "Console-UNO",
    desc: "A simple UNO game for the terminal, written in C# on .NET.",
    stack: ["C#", ".NET"],
    repo: gh("Console-UNO"),
    live: "https://csps0.github.io/Console-UNO/",
  },
  {
    name: "MagyarTortenesekMindMap",
    desc: "Interactive mind map visualising Hungarian political and public events from 2006 to 2026.",
    stack: ["TypeScript", "JavaScript"],
    repo: gh("MagyarTortenesekMindMap"),
  },
  {
    name: "PDF-Processor",
    desc: "PDF tool that extracts text with OCR and removes passwords, by manual entry or brute force.",
    stack: ["Python", "HTML"],
    repo: gh("PDF-Processor"),
    live: "https://csps0.github.io/PDF-Processor/",
  },
  {
    name: "pala",
    desc: "Interactive terminal UI (TUI) for the Kréta e-napló school system.",
    stack: ["Dart"],
    repo: gh("pala"),
  },
  {
    name: "Furnovskyland",
    desc: "A website about the Great Furnovskyland.",
    stack: ["JavaScript"],
    repo: gh("WebSite-Furnovskyland"),
    live: "https://furnovskyland.vercel.app/en/",
  },
  {
    name: "SynergAi",
    desc: "A deliberately under-average, vibe-coded AI startup landing page. Maximum synergy, zero functionality.",
    stack: ["HTML"],
    repo: gh("SynergAi"),
    live: "https://csps0.github.io/SynergAi/",
  },
  {
    name: "My-School-Projects",
    desc: "My school projects, homework and tests.",
    stack: ["C#", "PHP", "Python", "TypeScript", "HTML"],
    repo: gh("My-School-Projects"),
    live: "https://csps0.github.io/My-School-Projects/",
  },
  {
    name: "Neumann-Survival-Week",
    desc: "One of our school projects.",
    stack: ["C#"],
    repo: gh("Neumann-Survival-Week"),
    live: "https://csps0.github.io/Neumann-Survival-Week/",
  },
  {
    name: "WebSzerverCombined",
    desc: "An unofficial combined copy of two repos, so you don't have to clone them one by one. Original code by @ignaczdominik.",
    stack: ["HTML", "JavaScript", "CSS"],
    repo: gh("WebSzerverCombined"),
  },
  {
    name: "CSPS0",
    desc: "This site and my GitHub profile README.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    repo: gh("CSPS0"),
  },
  {
    name: "NOKIA-hackathon",
    desc: "My application for the 2026/27 Nokia dual-training programme, submitted a little late.",
    stack: ["Python"],
    repo: gh("NOKIA-hackathon"),
    status: "Archived",
  },
  {
    name: "WorldWideDashBoard",
    desc: "A website that collects data from all sorts of databases, legally.",
    stack: ["C#", "TypeScript", "JavaScript"],
    status: "Private",
  },
  {
    name: "szft-hianyzas-koveto",
    desc: "Class-level absence tracker that also organizes make-up tasks, for teachers and students.",
    status: "Private",
  },
  {
    name: "chronoguide",
    desc: "Interactive timeline that shows events, phases or projects in strict chronological order.",
    status: "Private",
  },
  {
    name: "Bakonyi-Bitfaragok",
    desc: "Repo for the Bakonyi Bitfaragó Bajnokság, a three-round national programming competition for secondary school students run by the Faculty of Information Technology at the University of Pannonia.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Private",
  },
];

const link = "underline underline-offset-4 hover:text-white";

export default function Projects() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
      <p className="mt-4 text-zinc-400">
        Everything I have built on{" "}
        <a href="https://github.com/CsPS0" className={link}>
          GitHub
        </a>
        , apart from forks. Private repos are listed so you can see the work,
        but their code is not public.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <li
            key={p.name}
            className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-zinc-600"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="break-all font-semibold">{p.name}</h2>
              {p.status && (
                <span className="shrink-0 rounded-full border border-zinc-700 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  {p.status}
                </span>
              )}
            </div>
            <p className="mt-2 flex-1 text-sm text-zinc-400">{p.desc}</p>
            {p.stack && (
              <p className="mt-3 font-mono text-xs text-zinc-500">{p.stack.join(" · ")}</p>
            )}
            {(p.repo || p.live) && (
              <div className="mt-3 flex gap-4 text-sm">
                {p.repo && (
                  <a href={p.repo} className={link}>
                    Code
                  </a>
                )}
                {p.live && (
                  <a href={p.live} className={link}>
                    Live
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
