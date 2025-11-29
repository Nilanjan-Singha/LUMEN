import { ReactNode } from "react";
import { spaces } from "@/lib/courses";
import App from "next/app";
import AppSidebar from "@/components/sidebar/sidebar";

export default function SpaceLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
    
  return (
    <div className="flex w-full  min-h-screen min-w-0">
      {/* Sidebar */}
        <AppSidebar/> 
      {/* Main Content */}
      <main className="flex-1 min-h-screen w-full p-10 overflow-y-auto min-w-0">
        {children}
      </main>
    </div>
  );
}
