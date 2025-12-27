import { ReactNode } from "react";
import AppSidebar from "@/components/sidebar/sidebar";

export default function SpaceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex w-full min-h-screen min-w-0">
      <div className="shrink-0">
        <AppSidebar />
      </div>
      <main className="flex-1 p-4 sm:p-10 overflow-y-auto min-w-0">{children}</main>
    </div>
  );
}
