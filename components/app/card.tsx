import Link from "next/link";
import { Button } from "@/components/ui/button";

type CardProps = {
  title: string;
  description: string;
  link: string;
  github: string;
  technologies: string[];
};

export function Card({
  title,
  description,
  link,
  github,
  technologies,
}: CardProps) {
  return (
    <div className="border border-border/50 rounded-lg bg-background p-6 w-full h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-foreground/30">
      <div className="flex-1 mb-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="border border-border/50 rounded-md bg-muted px-2 py-1 text-sm text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <Link href={link}>
          <Button>View</Button>
        </Link>
        <Link href={github}>
          <Button>GitHub</Button>
        </Link>
      </div>
    </div>
  );
}
