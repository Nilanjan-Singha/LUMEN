export interface ChapterContent {
  chapter: string;       // e.g. "Chapter 1 • React Foundations"
  topic: string;         // e.g. "Core concepts of React"
  subtopics: string[];   // array of strings
}

export interface Space {
  id: number;
  title: string;
  description: string;
  chapters: number;      // because you're storing 6, 5, 6 etc.
  level: string;         // e.g. "Intermediate"
  time: string;          // e.g. "10 hours"
  content: ChapterContent[];
}

export const spaces = [
  // ============================
  // SPACE 1 — Mastering React
  // ============================
  {
    id: 1,
    title: "Mastering React",
    description:
      "Learn modern React from fundamentals to advanced patterns, covering hooks, state management, performance optimization, and real-world architecture.",
    chapters: 6,
    level: "Intermediate",
    time: "10 hours",

    content: [
      {
        chapter: "Chapter 1 • React Foundations",
        topic: "Core concepts of React",
        subtopics: [
          "What is React & the component model",
          "Declarative vs Imperative UI",
          "Understanding Virtual DOM",
          "Rendering & Reconciliation",
        ],
      },
      {
        chapter: "Chapter 2 • JSX & Rendering",
        topic: "How JSX works under the hood",
        subtopics: [
          "JSX transpilation (Babel)",
          "Conditionals in JSX",
          "Rendering lists efficiently",
          "Fragment handling",
        ],
      },
      {
        chapter: "Chapter 3 • Hooks Mastery",
        topic: "Understanding hooks deeply",
        subtopics: [
          "useState vs useReducer",
          "useEffect pitfalls & cleanup",
          "useMemo & useCallback for optimization",
          "Custom hooks with real examples",
        ],
      },
      {
        chapter: "Chapter 4 • Global State & Context",
        topic: "State beyond components",
        subtopics: [
          "Context API patterns",
          "Avoiding unnecessary re-renders",
          "Building scalable state structure",
          "Zustand / Jotai comparison",
        ],
      },
      {
        chapter: "Chapter 5 • Advanced Patterns",
        topic: "High-level reusable solutions",
        subtopics: [
          "Render props vs hooks",
          "Compound component pattern",
          "Controlled vs uncontrolled components",
          "Error boundaries",
        ],
      },
      {
        chapter: "Chapter 6 • Performance Optimization",
        topic: "Making React apps fast",
        subtopics: [
          "Why React re-renders",
          "Avoiding expensive computations",
          "Lazy loading & code splitting",
          "React Profiler usage",
        ],
      },
    ],
  },

  // ============================
  // SPACE 2 — Computer Vision 101
  // ============================
  {
    id: 2,
    title: "Computer Vision 101",
    description:
      "A beginner-friendly path into computer vision, image processing, neural networks, and modern applications using OpenCV and deep learning.",
    chapters: 5,
    level: "Beginner",
    time: "8 hours",

    content: [
      {
        chapter: "Chapter 1 • Introduction to Computer Vision",
        topic: "Understanding the CV landscape",
        subtopics: [
          "What is computer vision?",
          "Image as matrices",
          "How machines interpret images",
          "Traditional vs Deep Learning approaches",
        ],
      },
      {
        chapter: "Chapter 2 • Image Processing Basics",
        topic: "Transforming and filtering images",
        subtopics: [
          "Grayscale conversion",
          "Blur & noise reduction",
          "Thresholding",
          "Edge detection (Canny, Sobel)",
        ],
      },
      {
        chapter: "Chapter 3 • Feature Extraction",
        topic: "How computers detect patterns",
        subtopics: [
          "Contours & shape detection",
          "Corner detection",
          "SIFT / SURF / ORB concepts",
          "Template matching",
        ],
      },
      {
        chapter: "Chapter 4 • Deep Learning in CV",
        topic: "Neural networks for vision",
        subtopics: [
          "CNN basics",
          "Convolution & pooling",
          "Image classification pipeline",
          "Transfer learning basics",
        ],
      },
      {
        chapter: "Chapter 5 • Real-World Applications",
        topic: "Practical problems CV solves",
        subtopics: [
          "Face detection",
          "Object tracking",
          "Hand pose & body pose detection",
          "Optical character recognition",
        ],
      },
    ],
  },

  // ============================
  // SPACE 3 — Next.js Complete Guide
  // ============================
  {
    id: 3,
    title: "Next.js Complete Guide",
    description:
      "Master Next.js with routing, server components, API routes, data fetching, authentication, and performance optimization.",
    chapters: 6,
    level: "Advanced",
    time: "12 hours",

    content: [
      {
        chapter: "Chapter 1 • App Router & Layouts",
        topic: "Foundations of Next.js App Router",
        subtopics: [
          "Layouts & nested layouts",
          "Page vs layout difference",
          "Shared UI patterns",
          "Metadata API usage",
        ],
      },
      {
        chapter: "Chapter 2 • Routing Deep Dive",
        topic: "Everything about file-based routing",
        subtopics: [
          "Dynamic routes",
          "Catch-all & optional catch-all",
          "Route groups",
          "Parallel & intercepting routes",
        ],
      },
      {
        chapter: "Chapter 3 • Server Components",
        topic: "Understanding React Server Components",
        subtopics: [
          "Client vs server components",
          "When to use each",
          "Streaming & Suspense",
          "Server actions",
        ],
      },
      {
        chapter: "Chapter 4 • Data Fetching",
        topic: "Fetching data in modern Next.js",
        subtopics: [
          "fetch() on server components",
          "Revalidation & caching",
          "Loading UI patterns",
          "Edge runtime",
        ],
      },
      {
        chapter: "Chapter 5 • API Routes & Middleware",
        topic: "Server functionality inside Next.js",
        subtopics: [
          "Route handlers",
          "REST APIs",
          "Middleware functions",
          "Using cookies & headers",
        ],
      },
      {
        chapter: "Chapter 6 • Authentication & Deployment",
        topic: "Production-level setup",
        subtopics: [
          "NextAuth basics",
          "OAuth / Credentials login",
          "Vercel deployment",
          "Performance tuning",
        ],
      },
    ],
  },
];
