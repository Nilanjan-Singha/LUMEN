"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold">
          DRILLPREP
        </Link>

        {/* DESKTOP NAVIGATION */}
        <NavigationMenu>
          <NavigationMenuList>

            {/* Normal Link */}
            <NavigationMenuItem >
              <Link href="/" passHref>
                <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-xl font-semibold`}
                >
                Features
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* DROPDOWN MENU */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl font-semibold">Exams</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-3">
                  
                  <Link href="/products/laptops" className="block p-3 rounded-md hover:bg-muted">
                    <div className="font-medium">GATE</div>
                  </Link>

                  <Link href="/products/phones" className="block p-3 rounded-md hover:bg-muted">
                    <div className="font-large">SSC</div>
                  </Link>

                   <Link href="/products/phones" className="block p-3 rounded-md hover:bg-muted">
                    <div className="font-large">UPSC</div>
                  </Link>

                   <Link href="/products/phones" className="block p-3 rounded-md hover:bg-muted">
                    <div className="font-large">CAT</div>
                  </Link>

                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* ANOTHER DROPDOWN */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl font-semibold">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4 w-[300px]">
                  <li><Link className="block p-2 hover:bg-muted rounded" href="/blog">Blog</Link></li>
                  <li><Link className="block p-2 hover:bg-muted rounded" href="/docs">Documentation</Link></li>
                  <li><Link className="block p-2 hover:bg-muted rounded" href="/support">Support</Link></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden text-lg sm:inline-flex">
            Sign In
          </Button>
          <Button>Get Started</Button>
      </div>
      </div>
    </nav>
  );
}
