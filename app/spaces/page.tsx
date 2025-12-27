'use client'

import React, { useEffect, useState } from 'react';
import AppSidebar from "@/components/sidebar/sidebar";
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { handleCreateSpace } from './action';

const Spaces = () => {
  const router = useRouter();
  const [generatedSpaces, setGeneratedSpaces] = useState<any[]>([]);
  const [query, setQuery] = useState("");

  // Load dynamic spaces
  useEffect(() => {
    const stored = localStorage.getItem("generatedSpaces");
    if (stored) setGeneratedSpaces(JSON.parse(stored));
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
      <div className="shrink-0">
        <AppSidebar />
      </div>

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col justify-start items-start p-12 bg-white dark:bg-black min-w-0">

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Spaces</h1>
        <p className="mt-2 text-sm sm:text-lg text-gray-600 dark:text-gray-300">
          Explore personalized learning spaces crafted by AI.
        </p>

        {/* Search */}
        <div className="w-full mt-6 flex items-center relative">
          <Search className="absolute ml-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
          <Input
            placeholder="Search your spaces..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-4 px-12 text-sm sm:text-lg h-14 bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-gray-700"
          />
        </div>

{/* When there are NO results (not inside grid) */}
{filteredSpaces.length === 0 ? (
  <div className="w-full flex flex-col items-center justify-center gap-4 py-20">
    <p className="text-md text-gray-500 dark:text-gray-400 text-center">
      No spaces found. Try adjusting your search or create a new space.
    </p>
    <button onClick={() => router.push("/spaces/new")}>
      Create Space
    </button>
  </div>
) : (
  <>
    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12">

      {/* Add New Space Card */}
      <Card
        className="flex items-center justify-center border-2 border-dashed 
                   bg-transparent border-neutral-300 dark:border-neutral-700
                   hover:border-neutral-400 dark:hover:border-neutral-600
                   transition cursor-pointer rounded-xl"
        role="button"
        tabIndex={0}
        onClick={() => router.push("/spaces/new")}
        onKeyDown={(e) => e.key === "Enter" && router.push("/spaces/new")}
      >
        <CardContent className="flex flex-col items-center justify-center gap-2 text-center py-8">
          <div className="h-12 w-12 rounded-full flex items-center justify-center 
                          bg-neutral-100 dark:bg-neutral-800">
            <Plus className="h-6 w-6 text-neutral-600 dark:text-neutral-300" />
          </div>

          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            New Space
          </p>
        </CardContent>
      </Card>

      {/* Existing Spaces */}
      {filteredSpaces.map((space) => (
        <Card
          key={space.title}
          className="border shadow-sm hover:shadow-md rounded-xl cursor-pointer
                     border-neutral-200 dark:border-neutral-800 
                     hover:scale-105 transition-transform duration-200"
        >
          <CardHeader>
            <CardTitle className="text-md sm:text-lg">
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

          <CardContent className="text-sm">
            {space.description.slice(0, 90)}...
          </CardContent>

          <CardFooter className="flex justify-between items-center">
            <Link href={`/spaces/${space.title}`}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  </>
)}
      </main>
    </div>
  );
};

export default Spaces;
