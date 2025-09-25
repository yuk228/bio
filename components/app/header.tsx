"use client";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("hero")}
            className="rounded-full"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("timeline")}
            className="rounded-full"
          >
            Timeline
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("projects")}
            className="rounded-full"
          >
            Projects
          </Button>
        </div>
      </div>
    </header>
  );
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
