"use client";

import ChatInput from "@/components/chatbox/chatbox";
import AppSidebar from "@/components/sidebar/sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen min-w-0">
      
    
  <div className="w-max-content">
  <AppSidebar />
  </div>



      {/* Main Wrapper */}
      <div className="flex flex-col flex-1 min-h-screen relative overflow-hidden ">

        {/* Theme Toggle */}
        <div className="flex w-full justify-end px-6 pt-6">
          <ThemeToggle />
        </div>

        {/* Background Glows */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[45rem] h-[45rem] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-blue-500/20 dark:bg-blue-700/20 rounded-full blur-[140px]" />
        </div>

        {/* HERO */}
        <main className="flex flex-col justify-center items-center text-center px-6 py-16 md:py-32">

          <Badge
            variant="outline"
            className="px-4 py-1.5 text-sm rounded-full border-border text-muted-foreground"
          >
            AI-Powered Course Builder
          </Badge>

          <h1 className="mt-6 px-20 text-4xl md:text-8xl font-extrabold tracking-tight text-foreground max-w-full leading-tight">
            Map Your Knowledge.  
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Master Any Skill.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Generate complete learning spaces—chapters, subtopics, explanations,
            challenges, and visual maps—crafted instantly by AI for your goals.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-base px-6">
              Create a Space
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-base px-6 border-foreground/20"
            >
              Explore Features
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
