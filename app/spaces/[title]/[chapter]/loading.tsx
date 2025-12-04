"use client";

import React from "react";

export default function Loading() {
  return (
    // let the loader fill the parent `main` area by allowing this flex child
    // to grow and occupy the available height
    <div className="flex flex-col w-full flex-1 h-full min-h-0 gap-10 p-10 animate-pulse">
      {/* Breadcrumb + Meta */}
      <div className="space-y-3">
        <div className="h-4 w-40 bg-neutral-300 dark:bg-neutral-800 rounded"></div>
        <div className="h-6 w-60 bg-neutral-300 dark:bg-neutral-800 rounded"></div>
        <div className="h-4 w-80 bg-neutral-300 dark:bg-neutral-800 rounded"></div>

        <div className="flex gap-2 mt-3">
          <div className="h-6 w-20 bg-neutral-300 dark:bg-neutral-800 rounded-full"></div>
          <div className="h-6 w-20 bg-neutral-300 dark:bg-neutral-800 rounded-full"></div>
          <div className="h-6 w-28 bg-neutral-300 dark:bg-neutral-800 rounded-full"></div>
        </div>
      </div>

      <div className="chapter-content flex flex-1 gap-10 w-full">
        {/* LEFT SECTION */}
        <div className="space-y-6 w-full sm:w-1/3 pr-10  border-r-0 sm:border-r-2">
          <div className="h-6  bg-neutral-300 dark:bg-neutral-800 rounded"></div>

          <div className="flex gap-2">
            <div className="h-8 w-8 bg-neutral-300 dark:bg-neutral-800 rounded"></div>
            <div className="h-8 w-8 bg-neutral-300 dark:bg-neutral-800 rounded"></div>
          </div>

          <div className="h-4 w-72 bg-neutral-300 dark:bg-neutral-800 rounded "></div>

          {/* Subtopics list */}
          <div className="space-y-2 mt-3 ">
            <div className="h-3 w-56 bg-neutral-300 dark:bg-neutral-800 rounded"></div>
            <div className="h-3 w-64 bg-neutral-300 dark:bg-neutral-800 rounded"></div>
            <div className="h-3 w-48 bg-neutral-300 dark:bg-neutral-800 rounded"></div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <div className="h-8 w-24 bg-neutral-300 dark:bg-neutral-800 rounded"></div>
            <div className="h-8 w-24 bg-neutral-300 dark:bg-neutral-800 rounded"></div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="shrink-0 w-2/3 space-y-8 hidden sm:block">
          <div className="p-5 border rounded-xl bg-white dark:bg-neutral-900 space-y-4">
            {/* Markdown Skeleton (multiple lines) */}
            <div className="space-y-3">
              <div className="h-4 w-3/4 bg-neutral-300 dark:bg-neutral-800 rounded"></div>
              <div className="h-4 w-full bg-neutral-300 dark:bg-neutral-800 rounded"></div>
              <div className="h-4 w-5/6 bg-neutral-300 dark:bg-neutral-800 rounded"></div>
              <div className="h-4 w-2/3 bg-neutral-300 dark:bg-neutral-800 rounded"></div>
              <div className="h-4 w-4/6 bg-neutral-300 dark:bg-neutral-800 rounded"></div>
            </div>
          </div>

          {/* Regenerate Button skeleton */}
          <div className="h-10 w-28 bg-neutral-300 dark:bg-neutral-800 rounded-lg"></div>
        </aside>
      </div>
    </div>
  );
}
