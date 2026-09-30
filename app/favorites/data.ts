export type Item = { title: string; note?: string; meta?: string };

export const games: Item[] = [
  { title: "DOOM Eternal", meta: "FPS", note: "Top pick. 50/50 achievements." },
  { title: "Battlefield", meta: "FPS · Multiplayer" },
  { title: "Rainbow Six Siege", meta: "Tactical shooter" },
];

export const stats = [
  { label: "Play time", value: "70.4 h" },
  { label: "Achievements", value: "50/50" },
  { label: "Last played", value: "Jun 23" },
];

export type Kind = "ticket" | "book" | "vinyl";

export const sections: { heading: string; kind: Kind; side: "left" | "right"; items: Item[] }[] = [
  {
    heading: "Movies",
    kind: "ticket",
    side: "left",
    items: [{ title: "TENET", meta: "Film · 2020", note: "Christopher Nolan" }],
  },
  {
    heading: "Series",
    kind: "ticket",
    side: "left",
    items: [
      { title: "DARK", meta: "Series · 2017" },
      { title: "LOKI", meta: "Series · 2021" },
    ],
  },
  {
    heading: "Books",
    kind: "book",
    side: "right",
    items: [
      { title: "Sapiens", note: "Yuval Noah Harari" },
      { title: "Osztálytalálkozó", note: "Rényi Ádám" },
    ],
  },
  {
    heading: "Music",
    kind: "vinyl",
    side: "right",
    items: [{ title: "Pesti Bárdok", note: "Carson Coma" }],
  },
];
