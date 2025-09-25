"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ChevronUp,
  Earth,
  Github,
  Rss,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/components/app/header";

const CARDS = [
  {
    icon: <Github />,
    link: "https://github.com/yuk228",
  },
  {
    icon: <Twitter />,
    link: "https://x.com/yuki_228__",
  },
  {
    icon: <Rss />,
    link: "https://zenn.dev/64919",
  },
  {
    icon: <Earth />,
    link: "https://blog.snowing.moe",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl mb-12">
            Hello, I&apos;m Yuki 👋
          </h2>

          <div className="flex flex-row gap-8 mx-auto justify-center mb-12">
            {CARDS.map((card, index) => (
              <Link href={card.link} key={index} className="scale-140">
                {card.icon}
              </Link>
            ))}
          </div>
          <ArrowDown className="w-6 h-6 mx-auto animate-bounce cursor-pointer" />
        </motion.div>
      </section>

      <Button
        onClick={() => scrollToSection("hero")}
        size="icon"
        className="fixed bottom-8 right-8 rounded-full shadow-lg"
      >
        <ChevronUp className="w-4 h-4" />
      </Button>
    </main>
  );
}
