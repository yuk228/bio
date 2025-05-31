import Image from "next/image";
import Typing from "@/components/ui/typing";
import Card from "@/components/card";
import { Github, Send, Twitter } from "lucide-react";

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
    link: "https://x.com/yy28_",
  },
  {
    title: "Telegram",
    description: "@moyaiscanner",
    icon: <Send />,
    link: "https://t.me/moyaiscanner",
  }
]
export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen">
        <div className="container m-4 w-[780px] h-[800px] rounded-3xl flex flex-col items-center shadow-2xl shadow-foreground/10 border-2 border-zinc-500/20">
          <div className="w-full h-[200px] overflow-hidden">
            <Image src="/banner.gif" alt="banner" width={780} height={200} className="w-full h-full object-cover rounded-t-3xl"/>
          </div>
          <div className="flex items-center justify-center absolute top-[150px] md:top-[180px] left-1/2 transform -translate-x-1/2">
            <Image src="/icon.webp" alt="icon" width={150} height={150} className="rounded-full border-2 border-white/30 shadow-lg"/>
          </div>
          <div className="text-center pt-20">
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
        </div>
      </div>
    </main>
  );
}
