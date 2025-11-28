"use server";

import { GoogleGenAI } from "@google/genai";

export async function generateChapterContent({
  space,
  chapterData,
}: {
  space: any;
  chapterData: any;
}) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
Generate a chapter lesson.

Title: ${chapterData.chapter}
Topic: ${chapterData.topic}
Subtopics: ${chapterData.subtopics.join(", ")}

Learning Specs:
- Level: ${space.level}
- Lens: ${space.lens}
- Tone: ${space.tone}
- Analogies: ${space.analogy}
- Mode: ${space.mode}
- Goal: ${space.goal || "No goal provided"}

Output:
Write a detailed markdown lesson with sections, analogies, examples, code (if needed), and summary.
      `,
      config: {
        systemInstruction: "You are an expert educator producing Feynman-quality lessons.",
      },
    });

    return {
      success: true,
      content: response.text, // modern SDK
    };
  } catch (err) {
    console.error("Gemini Chapter Error:", err);
    return { success: false, content: "Failed to generate chapter." };
  }
}
