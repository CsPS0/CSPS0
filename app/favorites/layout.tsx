import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata = { title: "Favorites | CsPS0" };

export default function FavoritesLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${oswald.variable} flex-1`}>{children}</div>;
}
