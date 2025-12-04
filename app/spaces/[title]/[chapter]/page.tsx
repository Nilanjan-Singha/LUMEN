"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Bookmark, Share2 } from "lucide-react";
import { generateChapterContent } from "./action";
import MarkdownRenderer from "@/components/markdownrenderer/markdownrenderer";
import Loading from "./loading";
import ThemeToggle from "@/components/ThemeToggle";

export default function ChapterPage() {
  const params = useParams() as { title: string; chapter: string };

  const [space, setSpace] = React.useState<any>(null);
  const [chapterData, setChapterData] = React.useState<any>(null);
  const [content, setContent] = React.useState<string>("");
  const [spacesArray, setSpacesArray] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [focusmode, setFocusmode] = React.useState(false);

  const chapterIndex =
    Number(params.chapter.replace("chapter", "")) - 1;
  const spaceName = decodeURIComponent(params.title);

  /** Load space + chapter */
  React.useEffect(() => {
    const stored = localStorage.getItem("generatedSpaces");
    if (!stored) return;

    const arr = JSON.parse(stored);
    setSpacesArray(arr);

    const found = arr.find((s: any) => s.title === spaceName);
    if (!found) return;

    setSpace(found);
    setChapterData(found.content?.[chapterIndex] ?? null);
  }, [params.title, params.chapter]);

  /** Generate or load cached chapter content */
  React.useEffect(() => {
    if (!space || !chapterData) return;

    // Cached content?
    if (chapterData.generatedContent) {
      setContent(chapterData.generatedContent);
      setLoading(false);
      return;
    }

    async function run() {
      setLoading(true);
      const res = await generateChapterContent({ space, chapterData });

      const txt = String(res?.content || "Failed to load content.");
      setContent(txt);

      // Save new generated content
      const updated = [...spacesArray];
      const sIndex = updated.findIndex((s: any) => s.title === space.title);

      if (sIndex !== -1) {
        updated[sIndex].content[chapterIndex].generatedContent = txt;
        localStorage.setItem("generatedSpaces", JSON.stringify(updated));
        setSpacesArray(updated);
      }

      setLoading(false);
    }

    run();
  }, [space, chapterData]);

  if (loading) return <Loading />;

  if (!space || !chapterData)
    return <div className="p-10 text-red-500">Chapter not found.</div>;

  /** Navigation */
  const prevChapter =
    chapterIndex > 0
      ? `/spaces/${encodeURIComponent(spaceName)}/chapter${chapterIndex}`
      : null;

  const nextChapter =
    chapterIndex < space.content.length - 1
      ? `/spaces/${encodeURIComponent(spaceName)}/chapter${chapterIndex + 2}`
      : null;

  /** FOCUS MODE UI */
  if (focusmode) {
    return (
      <div className="w-full p-10">
        <div className="flex justify-between items-center mb-4 text-sm text-neutral-500">
          <div>
            <Link href="/spaces" className="hover:underline">
              Spaces
            </Link>{" "}
            /
            <Link
              href={`/spaces/${encodeURIComponent(spaceName)}`}
              className="hover:underline ml-1"
            >
              {space.title}
            </Link>{" "}
            / <span>{chapterData.chapter}</span>
          </div>

          <button
            onClick={() => setFocusmode(false)}
            className="ml-4 p-2 border rounded hover:bg-gray-100 dark:hover:bg-neutral-800"
          >
            Exit Focus
          </button>
        </div>

        <div className="max-w-max mx-auto">
          <h1 className="text-3xl font-bold">{chapterData.chapter}</h1>
          <p className="text-neutral-500 mt-1">{chapterData.topic}</p>

          <div className="mt-6 border rounded-xl p-6 bg-white dark:bg-neutral-900">
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </div>
    );
  }

  /** NORMAL MODE */
  return (
    <div className="flex flex-col w-full gap-10 mt-4 sm:mt-0 px-0 sm:px-10 py-0 sm:py-10">
      {/* Top Metadata */}
      <div className="ch">
        <div className="hidden sm:flex justify-between items-center text-sm text-neutral-500 mb-4 ">
          <div>
            <Link href="/spaces" className="hover:underline">
              Spaces
            </Link>{" "}
            /
            <Link
              href={`/spaces/${encodeURIComponent(spaceName)}`}
              className="hover:underline ml-1"
            >
              {space.title}
            </Link>{" "}
            / <span>{chapterData.chapter}</span>
          </div>

          <div className="items-center gap-4 hidden sm:flex">
            <button
              onClick={() => setFocusmode(true)}
              className="ml-4 p-2 border rounded hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              Focus
            </button>
            <ThemeToggle />
          </div>
        </div>

        <h1 className="text-xl sm:text-3xl text-center font-bold mb-3">{space.title}</h1>
        <p className="text-neutral-500 hidden sm:block">{space.description}</p>

        <div className="flex justify-center gap-2 mt-3 flex-wrap text-sm">
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
      </div>

      {/* Main Layout */}
      <div className="chapter-content flex gap-10 w-full">
        {/* Left Section */}
        <div className="border-r-2 space-y-6 w-2/3 pr-10 hidden sm:block">
          <h2 className="text-2xl font-semibold">{chapterData.chapter}</h2>
          <div className="flex gap-2">
            <button className="p-2 border rounded hover:bg-gray-100 dark:hover:bg-neutral-800">
              <Bookmark className="h-3 w-3" />
            </button>
            <button className="p-2 border rounded hover:bg-gray-100 dark:hover:bg-neutral-800">
              <Share2 className="h-3 w-3" />
            </button>
          </div>

          <p className="text-neutral-500">{chapterData.topic}</p>

          <ul className="list-disc list-inside mt-3 space-y-1">
            {chapterData.subtopics.map((s: string, i: number) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <div className="flex justify-between mt-6">
            {prevChapter ? (
              <Link
                href={prevChapter}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                ← Previous
              </Link>
            ) : (
              <div />
            )}

            {nextChapter && (
              <Link
                href={nextChapter}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Next →
              </Link>
            )}
          </div>
        </div>

        {/* Right Section */}
        <aside className="shrink-0 space-y-8 relative sm:sticky top-0 sm:top-10 h-fit w-full sm:w-2/3">
          <div className="p-3 sm:p-5 border rounded-xl bg-white dark:bg-neutral-900">
            <MarkdownRenderer content={content} className="text-sm sm:text-md" />
          </div>

          <div className="pt-4">
            <button
              onClick={async () => {
                setLoading(true);
                setContent("");

                const res = await generateChapterContent({
                  space,
                  chapterData,
                });

                const txt = String(res?.content || "");
                setContent(txt);

                // Save regenerated version
                try {
                  const stored = localStorage.getItem("generatedSpaces");
if (!stored) return;
const arr = JSON.parse(stored);

const spaceIndex = arr.findIndex((s: any) => s.title === space.title);
arr[spaceIndex].content[chapterIndex].generatedContent = txt;

localStorage.setItem("generatedSpaces", JSON.stringify(arr));
                } catch (e) {
                  console.error("Failed saving regenerated chapter:", e);
                }

                setLoading(false);
              }}
              className="flex items-center gap-2 px-3 py-2 mt-3 border rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              ↻ Regenerate
            </button>
                      <div className="flex justify-between mt-6 sm:hidden">
            {prevChapter ? (
              <Link
                href={prevChapter}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                ← Previous
              </Link>
            ) : (
              <div />
            )}

            {nextChapter && (
              <Link
                href={nextChapter}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Next →
              </Link>
            )}
          </div>
        </div>
        </aside>
      </div>
    </div>
  );
}
