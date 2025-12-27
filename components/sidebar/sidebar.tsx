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
    <div
      style={{
        "--sidebar-width": collapsed ? "5rem" : "16rem",
      } as React.CSSProperties}
      className={`
        w-(--sidebar-width)
        transition-all duration-300 border-r
        flex flex-col h-screen bg-sidebar text-sidebar-foreground
        overflow-hidden
        sticky top-0 left-0
      `}
    >
      {/* Logo */}
      <div
        className={`
          text-2xl font-bold p-6 transition-opacity duration-200
          ${collapsed ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        LUMEN
      </div>

      {/* All links */}
      <div className={`flex-1 overflow-y-auto transition-all ${collapsed ? "px-4" : "px-6"}`}>
        <div className="space-y-2">
          {mainItems.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className="flex gap-4 items-center p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span className="text-sm">{item.title}</span>}
            </Link>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {userItems.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className="flex gap-4 items-center p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span className="text-sm">{item.title}</span>}
            </Link>
          ))}
        </div>
      </div>

      {/* Collapse Toggle */}
      <div className="p-4 flex justify-end border-t">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg border hover:bg-sidebar-accent transition-all"
        >
          {collapsed ? (
            <ChevronsRight className="h-5 w-5" />
          ) : (
            <ChevronsLeft className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  )
}
