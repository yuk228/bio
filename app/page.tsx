import Image from "next/image";
import Typing from "@/components/ui/typing";
import Card from "@/components/card";
import { Earth, Github, Send, Twitter } from "lucide-react";
import { Component } from "@/components/etheral-shadow";
import Link from "next/link";

const cards = [
  {
    title: "Github",
    description: "@yuk228",
    icon: <Github />,
    link: "https://github.com/yuk228",
  },
  {
    title: "X",
    description: "@yy28__",
    icon: <Twitter />,
    link: "https://x.com/yy28__",
  },
  {
    title: "Telegram",
    description: "@moyaiscanner",
    icon: <Send />,
    link: "https://t.me/moyaiscanner",
  },
  {
    title: "Blog",
    description: "PrivShare",
    icon: <Earth />,
    link: "https://privshare-beta.vercel.app",
  }
]

export default function Home() {
      
  return (
    <main>
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full">
          <Component
            color="rgba(128, 128, 128, 1)"
            animation={{ scale: 100, speed: 90 }}
            noise={{ opacity: 1, scale: 1.2 }}
            sizing="fill"
          />
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="container m-4 w-[780px] h-[800px] rounded-3xl flex flex-col items-center shadow-2xl shadow-foreground/10 border-2 border-zinc-500/20">
          <div className="w-full h-[125px]">

          </div>
          <div className="flex items-center justify-center ">
            <Image src="/icon.webp" alt="icon" width={150} height={150} className="rounded-full border-2 border-white/30 shadow-lg"/>
          </div>
          <div className="text-center pt-5">
            <h2 className="text-4xl font-bold">Yuki</h2>
          </div>
          <div className="py-8 flex flex-col items-center font-bold">
            <Typing>日本の学生です</Typing>
          </div>
          <div className="flex flex-col items-center w-full gap-4 px-4">
            {cards.map((card, key) => (
              <Card key={key} {...card} />
            ))}
          </div>
          <div className="pt-10 flex flex-col items-center justify-center text-sm text-muted-foreground">
            <p>Made with <span><Link href="https://21st.dev" className="hover:text-foreground transition-colors underline">21st.dev</Link></span></p>
            <p>Source code are available on <span><Link href="https://github.com/yuk228/bio" className="hover:text-foreground transition-colors underline">github</Link></span></p>
          </div>
        </div>
      </div>
    </main>
  );
}
