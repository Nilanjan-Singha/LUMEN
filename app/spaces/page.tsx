'use client'

import React, { useEffect, useState } from 'react';
import AppSidebar from "@/components/sidebar/sidebar";
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { useRouter } from "next/navigation";

const Spaces = () => {
  const router = useRouter();
  const [generatedSpaces, setGeneratedSpaces] = useState<any[]>([]);
  const [query, setQuery] = useState("");

  // Load dynamic spaces
  useEffect(() => {
    const stored = localStorage.getItem("generatedSpaces");
    if (stored) {
      setGeneratedSpaces(JSON.parse(stored));
    }
  }, []);

  // NEWEST FIRST
  const allSpaces = [...generatedSpaces].reverse();

  // SEARCH FILTER
  const filteredSpaces = allSpaces.filter((space) => {
    const q = query.toLowerCase().trim();
    return (
      space.title.toLowerCase().includes(q) ||
      space.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex w-full min-h-screen bg-zinc-50 dark:bg-black min-w-0">

      {/* Sidebar */}
      <AppSidebar />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col justify-start items-start p-12 bg-white dark:bg-black min-w-0">
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Spaces</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Explore your personalized learning spaces crafted by AI to map out chapters, sub-threads, and challenges in a living graph.
        </p>

        {/* Search */}
        <div className="w-full mt-6 flex items-center relative">
          <Search className="absolute ml-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
          <Input
            placeholder="Search your spaces..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-4 px-12 h-14 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
          />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {/* Add new space */}
          <Card
            className="
              flex items-center justify-center
              border-2 border-dashed
              border-neutral-300 dark:border-neutral-700
              hover:border-neutral-400 dark:hover:border-neutral-600
              transition cursor-pointer rounded-xl
            "
            role="button"
            tabIndex={0}
            onClick={() => router.push("/spaces/new")}
            onKeyDown={(e) => e.key === "Enter" && router.push("/spaces/new")}
          >
            <CardContent className="flex flex-col items-center justify-center gap-2 text-center py-8">
              <div className="h-12 w-12 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                <Plus className="h-6 w-6 text-neutral-600 dark:text-neutral-300" />
              </div>

              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                New Space
              </p>
            </CardContent>
          </Card>

          {/* Existing spaces */}
          {filteredSpaces.map((space) => (
            <Card
              key={space.title}
              className="border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition"
            >
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  {space.title}
                </CardTitle>

                <div className="flex gap-2 mt-2 flex-wrap">
                  <Badge variant="secondary" className="text-xs">
                    {space.chapters} Chapters
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {space.level}
                  </Badge>
                  <Badge variant="default" className="text-xs">
                    ⏱ {space.time}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">
                {space.description.slice(0, 90)}...
              </CardContent>

              <CardFooter className="flex justify-between items-center">
                <Link href={`/spaces/${space.title}`}>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>

                <Link href={`/spaces/${space.title}`}>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    Start <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Spaces;
