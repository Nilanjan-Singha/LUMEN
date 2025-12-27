import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

const Hero = () => {
  return (
        <main className="flex flex-col justify-center items-center text-center px-6 py-24 md:py-32">
          <Badge
            variant="outline"
            className="px-4 py-1.5 text-sm rounded-full border-border text-muted-foreground"
          >
            AI-Powered Course Builder
          </Badge>

          <h1 className="mt-6 px-0 sm:px-28 text-4xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-full leading-tight">
             Your <i>AI Powered</i> Learning OS. Learn anything, faster.
            {/* <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            </span> */}
          </h1>

          <p className="mt-2 sm:mt-6 text-sm md:text-xl text-muted-foreground max-w-2xl">
            Build courses, explore concepts instantly, and visualize your learning journey with AI that adapts to how you think.
            From idea to expertise—LUMEN makes learning effortless.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/spaces">
            <Button  size="lg" className="text-base px-6">
              Create a Space
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
          </div>
        </main>
  )
}

export default Hero
