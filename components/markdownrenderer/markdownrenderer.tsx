"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    // We keep 'prose' as a fallback, but our custom components below will override it
    <div className={`prose prose-slate max-w-none dark:prose-invert ${className ?? ""}`}>
      <ReactMarkdown
        components={{
          // 1. Override Headers specifically to force styling
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4 border-b pb-2" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4 mb-2" {...props} />
          ),
          
          // 2. Style Paragraphs and Lists
          p: ({ node, ...props }) => (
            <p className="text-gray-700 dark:text-gray-300 leading-7 mb-4" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside my-4 pl-4 text-gray-700 dark:text-gray-300 space-y-2" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="leading-relaxed" {...props} />
          ),
          
          // 3. Your existing Code Block logic
          code({ inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            
            if (!inline && match) {
              return (
                <div className="my-6 rounded-lg overflow-hidden shadow-lg">
                  <SyntaxHighlighter
                    style={dracula}
                    language={match[1]}
                    PreTag="div"
                    // Remove default margin so it fits our container
                    customStyle={{ margin: 0, borderRadius: 0 }} 
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </div>
              );
            }

            // Inline code styling
            return (
              <code className="bg-gray-100 dark:bg-neutral-800 text-red-500 dark:text-red-400 rounded px-1.5 py-0.5 font-mono text-sm border border-gray-200 dark:border-neutral-700" {...props}>
                {children}
              </code>
            );
          },
          
          // 4. Style Blockquotes nicely
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 my-4 bg-gray-50 dark:bg-neutral-900 py-2 pr-2 rounded-r" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
