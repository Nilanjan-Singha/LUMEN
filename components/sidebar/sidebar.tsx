"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Home,
  BookOpen,
  Library,
  BarChart3,
  Compass,
  Moon,
  Palette,
  Settings,
  User,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const mainItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Spaces", url: "/spaces", icon: BookOpen },
  { title: "Library", url: "/library", icon: Library },
  { title: "Stats", url: "/stats", icon: BarChart3 },
  { title: "Discover", url: "/discover", icon: Compass },
]

const userItems = [
  { title: "Theme", url: "/theme", icon: Moon },
  { title: "Customise", url: "/customise", icon: Palette },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Account", url: "/account", icon: User },
]

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sidebar
      style={{
        // These ONLY control width.
        "--sidebar-width": collapsed ? "5rem" : "16rem",
        "--sidebar-width-icon": "5rem",
      } as React.CSSProperties}
      className={`
        transition-all duration-300 border-r
      `}
      data-state={collapsed ? "collapsed" : "expanded"}
    >
      {/* Logo */}
      <SidebarHeader
        className={`
          text-2xl font-bold p-6 transition-opacity duration-200
          ${collapsed ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        LUMEN
      </SidebarHeader>

      {/* All links */}
      <SidebarContent className={`transition-all ${collapsed ? "px-2" : "px-6"}`}>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex gap-4 items-center">
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupContent>
            <SidebarMenu>
              {userItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex gap-4 items-center">
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Collapse Toggle */}
      <div className="mt-auto p-4 flex justify-center">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg border hover:bg-accent transition-all"
        >
          {collapsed ? (
            <ChevronsRight className="h-5 w-5" />
          ) : (
            <ChevronsLeft className="h-5 w-5" />
          )}
        </button>
      </div>
    </Sidebar>
  )
}
