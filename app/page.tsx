"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronUp, Github, Rss, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/components/app/header";
import { TimeLineItem } from "@/components/app/timeline";
import { Card } from "@/components/app/card";

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

const PROJECTS = [
  {
    title: "PrivShare",
    description:
      "PrivShareは、匿名化に特化したプライバシーブログです。あなたの個人情報がビジネスに使用されるのを防ぐため、匿名化について学びましょう。",
    link: "https://blog.snowing.moe",
    github: "https://github.com/yuk228/privshare-blog",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Prisma",
      "Supabase",
      "Authentication",
      "Tailwind CSS",
    ],
  },
  {
    title: "Loggify",
    description:
      "Loggifyは、Discord OAuth2を使用したWeb認証 + ロギングシステムです。認証したユーザーのユーザー名、IPアドレス、ブラウザ情報、GPS情報等を収集しDatabaseに保存します。",
    link: "https://loggify-auth.vercel.app/",
    github: "https://github.com/yuk228/Loggify",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Supabase",
      "Tailwind CSS",
    ],
  },
  {
    title: "VPN Detector",
    description:
      "IPアドレスに基づいてVPN、プロキシ、ホスティングサービスを検出するAPIです。ASNリストを使用しています。",
    link: "https://vpn-detect-api.vercel.app/api",
    github: "https://github.com/yuk228/vpn-detect-api",
    technologies: ["TypeScript", "React", "Next.js"],
  },
  {
    title: "Onion Note",
    description:
      "Onion Noteは、E2EEのテキスト共有アプリです。国際化に対応しています。",
    link: "https://onion-note.vercel.app//",
    github: "https://github.com/yuk228/onion-note",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "i18n",
    ],
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {PROJECTS.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                github={project.github}
                technologies={project.technologies}
              />
            ))}
          </div>
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
