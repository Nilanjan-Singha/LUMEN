"use client";

import ChatInput from "@/components/chatbox/chatbox";
import Hero from "@/components/Hero";
import AppSidebar from "@/components/sidebar/sidebar";
import ThemeToggle from "@/components/ThemeToggle";

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
        {/* hero */}
        <Hero />
      </div>
    </div>
  );
}
