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
    <div className="flex h-full">
      {/* Sidebar */}
        <AppSidebar/> 
      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
