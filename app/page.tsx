import { motion } from "motion/react"
import { Earth, Github, Rss, Twitter } from "lucide-react";

import Link from "next/link";

const CARDS = [
  {
    icon: <Github />,
    link: "social/github",
  },
  {
    icon: <Twitter />,
    link: "social/x",
  },
  {
    icon: <Rss />,
    link: "/social/zenn",
  },
  {
    icon: <Earth />,
    link: "https://blog.snowing.moe",
  },
];

export default function Page() {
  return (
    <main>
      <div className="min-h-screen flex flex-col items-center justify-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Hello, I'm Yuki 👋</h2>
        <div className="pt-10">
          <div className="flex flex-row gap-8">
            {CARDS.map((card, index) => (
              <Link href={card.link} key={index} className="scale-123">
                {card.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
