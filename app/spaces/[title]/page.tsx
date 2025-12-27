'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SpacePage() {
  const params = useParams();
  // console.log("Params:", params);
  const rawSlug = params.title; // encoded value (string | string[] | undefined)
  // only decode when rawSlug is a string; otherwise keep undefined
  const decodedSlug = typeof rawSlug === "string" ? decodeURIComponent(rawSlug) : undefined;


  const [space, setSpace] = useState<any>(null);
  useEffect(() => {
    if (!decodedSlug) return;

    const stored = localStorage.getItem("generatedSpaces");
    if (!stored) return;

    const arr = JSON.parse(stored);
    const found = arr.find((s: any) => s.title === decodedSlug);
    console.log("Found space:", found);
    setSpace(found ?? null);
  }, [decodedSlug]);

  if (!space) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-semibold">Space not found</h1>
      </div>
    );
  }

  return (
    <div className="flex w-full gap-0 sm:gap-10 p-2 sm:p-10">
      {/* HEADER */}
      <div className="flex-1 space-y-10">
        <h1 className="p-2 sm:p-0 text-2xl sm:text-4xl font-bold">{space.title}</h1>
        <p className="text-sm sm:text-md text-neutral-500 -mt-5 sm:mt-2">{space.description}</p>

        <div className="flex gap-1 sm:gap-4 mt-4 text-sm">
          <span className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full">
            {space.level}
          </span>
          <span className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full">
            {space.time}
          </span>
          <span className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full">
            {space.chapters} chapters
          </span>
        </div>

        <div className="space-y-8">
          {space.content.map((c: any, i: number) => (
            <Link key={i} href={`/spaces/${space.title}/chapter${i + 1}`}>
              <div className="p-6 rounded-2xl border bg-card shadow-sm space-y-2 mb-4">
                <h2 className="text-lg sm:text-xl font-semibold">{c.chapter}</h2>
                <p className="text-md sm:text-lg text-neutral-500 hidden sm:block">{c.topic}</p>

                <ul className="list-disc list-inside mt-3 space-y-1">
                  {c.subtopics.map((s: string, idx: number) => (
                    <li key={idx} className="text-sm">{s}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>

{/* SIDEBAR */}
        <aside className="w-full sm:w-72 shrink-0 space-y-8 sm:sticky sm:top-10 sm:h-fit hidden sm:block">
          
          {/* TABLE OF CONTENTS */}
          <div className="p-5 border rounded-xl bg-white dark:bg-neutral-900">
            <h3 className="text-lg font-semibold mb-3">Table of Contents</h3>

            <div className="space-y-1">
              {space.content.map((c: any, i: number) => (
                <a
                  key={i}
                  href={`#chapter-${i + 1}`}
                  className="block text-sm text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white"
                >
                  {c.chapter}
                </a>
              ))}
            </div>
          </div>

          {/* MAP VIEW */}
          <div className="p-5 border rounded-xl bg-white dark:bg-neutral-900 hidden sm:block">
            <h3 className="text-lg font-semibold mb-3">🗺 Map View</h3>

            <div className="h-40 bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
              <span className="text-neutral-500">Map view coming soon…</span>
            </div>
          </div>
        </aside>
            </div>
  );
}
