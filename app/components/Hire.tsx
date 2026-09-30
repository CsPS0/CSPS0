import { existsSync } from "node:fs";
import { join } from "node:path";

const facts = [
  ["Studying", "Software developer and tester, BMSZC Neumann János Informatikai Technikum"],
  ["Location", "Pest County, Hungary"],
  ["Builds with", "Next.js, TypeScript, .NET, AvaloniaUI"],
  ["Most used languages", "HTML, C#, TypeScript, Dart, JavaScript"],
  ["Also learning", "Computer networking"],
];

const link = "underline underline-offset-4 hover:text-white";

export default function Hire() {
  // The download button only shows once public/cv.pdf exists, so there is never a dead link.
  const hasCv = existsSync(join(process.cwd(), "public", "cv.pdf"));
  return (
    <section>
      <h1 className="text-4xl font-bold tracking-tight">For hirers</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-[1.4fr_1fr]">
        <dl className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          {facts.map(([k, v]) => (
            <div key={k} className="border-b border-zinc-800 py-3 first:pt-0 last:border-0 last:pb-0">
              <dt className="font-mono text-xs uppercase tracking-widest text-zinc-500">{k}</dt>
              <dd className="mt-1 text-sm text-zinc-300">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          {hasCv && (
            <a
              href="/cv.pdf"
              download
              className="rounded-lg bg-zinc-100 px-4 py-2.5 text-center text-sm font-semibold text-zinc-950 transition hover:bg-white"
            >
              Download CV (PDF)
            </a>
          )}
          <a
            href="mailto:solti.csongor.peter@gmail.com"
            className="rounded-lg border border-zinc-700 px-4 py-2.5 text-center text-sm transition hover:border-zinc-400"
          >
            Email me
          </a>
          <p className="mt-1 text-sm text-zinc-400">
            More: <a href="https://github.com/CsPS0" className={link}>GitHub</a>,{" "}
            <a href="https://yoursit.ee/csps" className={link}>all my links</a>,{" "}
            <a href="/favorites" className={link}>what I do off the clock</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
