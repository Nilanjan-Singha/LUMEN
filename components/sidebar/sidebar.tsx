import { 
  Home, 
  BookOpen, 
  Library, 
  BarChart3, 
  Compass, 
  Moon, 
  Palette, 
  Settings, 
  User 
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Main navigation items.
const mainItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Spaces",
    url: "/spaces",
    icon: BookOpen,
  },
  {
    title: "Library",
    url: "/library",
    icon: Library,
  },
  {
    title: "Stats",
    url: "/stats",
    icon: BarChart3,
  },
  {
    title: "Discover",
    url: "/discover",
    icon: Compass,
  },
]

// User/settings items.
const userItems = [
  {
    title: "Theme",
    url: "/theme",
    icon: Moon,
  },
  {
    title: "Customise",
    url: "/customise",
    icon: Palette,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Account",
    url: "/account",
    icon: User,
  },
]

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="text-2xl font-bold p-8">LearnGraph</SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="px-8">
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="px-8">
          {/* <SidebarGroupLabel>User</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {userItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}