import { Earth, Github, Twitter } from "lucide-react";
import { Squares } from "@/components/ui/squares-background"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image";
import Link from "next/link";
import Typing from "@/components/ui/typing";
import GlowText from "@/components/glow-text";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Squares 
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="#333" 
            hoverFillColor="#222"
          />
      </div>
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="container w-[780px] h-[500px]  rounded-3xl flex flex-col items-center justify-center">
          <Image src="/icon.webp" alt="icon" width={150} height={150} className="mx-auto mt-10 rounded-full"/>
          <div className="text-center">
            <GlowText className="text-4xl pt-3 ">Yuki</GlowText>
            <p className="text-sm">@m9j8</p>
          </div>
          <div className="py-8 flex flex-col items-center">
            <Typing>I&apos;m Japanese Student</Typing>
            <Typing>I&apos;m interested in privacy protection</Typing>
            <div className="flex space-x-4 py-5">
              <Image src="/py.webp" alt="py-logo" width={50} height={50}/>
              <Image src="/ts.webp" alt="ts-logo" width={50} height={50}/>
            </div>
            <div className="flex space-x-2 mt-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger><Link href="https://x.com/yuk228_" className="hover:scale-105"><Twitter size={35}/></Link></TooltipTrigger>
                  <TooltipContent>
                    <p>Twitter</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger><Link href="https://github.com/yuk228" className="hover:scale-105"><Github size={35}/></Link></TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger><Link href="https://privshare-beta.vercel.app" className="hover:scale-105"><Earth size={35}/></Link></TooltipTrigger>
                  <TooltipContent>
                    <p>My Blog</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
