"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronUp, Github, Rss, Twitter } from "lucide-react";
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

          <div className="flex flex-row gap-8 mx-auto justify-center mb-24">
            {CARDS.map((card, index) => (
              <Link href={card.link} key={index} className="scale-140">
                {card.icon}
              </Link>
            ))}
          </div>
          <ArrowDown
            className="w-6 h-6 mx-auto animate-bounce cursor-pointer"
            onClick={() => scrollToSection("timeline")}
          />
        </motion.div>
      </section>

      <section id="timeline" className="min-h-screen py-12 px-4">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl mb-8 md:mb-12 text-left">
            # Timeline
          </h2>
          <div className="flex flex-col gap-12 mb-24">
            <TimeLineItem
              date="FEB, 2008"
              title="Borned in Japan"
              description="日本で産まれる"
            />
            <TimeLineItem
              date="APR, 2022"
              title="Entered high school"
              description="高校に入学"
            />
            <TimeLineItem
              date="FEB, 2025"
              title="Started Learning Programming"
              description="プログラミング学習を開始"
            />
            <TimeLineItem
              date="JUN, 2025"
              title="Joined miracleave corporation as an internship student"
              description="miracleave株式会社でインターンシップに参加"
            />
          </div>
          <ArrowDown
            className="w-6 h-6 mx-auto animate-bounce cursor-pointer"
            onClick={() => scrollToSection("projects")}
          />
        </motion.div>
      </section>

      <section id="projects" className="min-h-screen py-12 px-4">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl mb-8 md:mb-12 text-left">
            # Projects
          </h2>
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

type TimeLineProps = {
  date: string;
  title: string;
  description: string;
};

function TimeLineItem({ date, title, description }: TimeLineProps) {
  return (
    <div className="relative flex items-start gap-6">
      <div className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
        {date}
      </div>
      <div className="relative z-10 mt-3">
        <div className="w-3 h-3 bg-foreground rounded-full"></div>
      </div>
      <div className="flex-1 pt-1">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
