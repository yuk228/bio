import Image from "next/image";
import Typing from "@/components/ui/typing";
import Card from "@/components/card";
import { Earth, Github, Rss, Twitter } from "lucide-react";

import Link from "next/link";

const cards = [
  {
    title: "Github",
    description: "@yuk228",
    icon: <Github />,
    link: "https://snowing.moe/social/github",
  },
  {
    title: "X",
    description: "@yy28__",
    icon: <Twitter />,
    link: "https://snowing.moe/social/x",
  },
  {
    title: "Zenn.dev",
    description: "@64919",
    icon: <Rss />,
    link: "https://snowing.moe/social/zenn",
  },
  {
    title: "My Blog",
    description: "PrivShare",
    icon: <Earth />,
    link: "https://blog.snowing.moe",
  },
];

export default function Page() {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen">
        <div className="container m-4 w-[780px] h-[800px] rounded-3xl flex flex-col items-center shadow-2xl shadow-foreground/10 border-2 border-zinc-500/20">
          <div className="w-full h-[125px]"></div>
          <div className="flex items-center justify-center ">
            <Image
              src="/icon.webp"
              alt="icon"
              width={150}
              height={150}
              className="rounded-full border-2 border-white/30 shadow-lg"
            />
          </div>
          <div className="text-center pt-5">
            <h2 className="text-4xl font-bold">Yuki</h2>
          </div>
          <div className="py-8 flex flex-col items-center font-bold">
            <Typing>日本の学生です</Typing>
            <Typing>Web系を勉強しています</Typing>
          </div>
          <div className="flex flex-col items-center w-full gap-4 px-4">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
          <div className="pt-10 pb-2 flex flex-col items-center justify-center text-sm text-muted-foreground">
            <p>
              Made with{" "}
              <span>
                <Link
                  href="https://21st.dev"
                  className="hover:text-foreground transition-colors underline"
                >
                  21st.dev
                </Link>
              </span>
            </p>
            <p>
              Source code are available on{" "}
              <span>
                <Link
                  href="https://github.com/yuk228/bio"
                  className="hover:text-foreground transition-colors underline"
                >
                  github
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
