"use server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

// ----------------------------------------
// CREATE SPACE ACTION
// ----------------------------------------
export async function GeminiCreateSpaceAction({
  topic,
  level,
  lens,
  chapterTotal,
  tone,
  analogy,
  goal,
  mode,
}: {
  topic: string;
  level: string;
  lens: string;
  chapterTotal: number;
  tone: string;
  analogy: string;
  goal?: string;
  mode: string;
}) {
  try {
    // ⭐ PROMPT
    const prompt = `
Generate ONLY valid JSON. Strict. No markdown.

{
  "id": number,
  "title": string,
  "description": string,
  "chapters": number,
  "level": string,
  "time": string,
  "content": [
    {
      "chapter": "Chapter 1 • ...",
      "topic": "Short topic summary",
      "subtopics": ["...", "...", "..."]
    }
  ]
}

Rules:
- chapters = ${chapterTotal}
- title must reflect "${topic}"
- use lens="${lens}", tone="${tone}", analogy="${analogy}", mode="${mode}", level="${level}", goal="${goal ?? ""}"
`;

    // ⭐ OFFICIAL GEMINI 2.5 FLASH CALL
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    // ⭐ OFFICIAL WAY TO READ TEXT
    // `response.text` is a getter that may be undefined; use a safe fallback.
    const raw = (response.text ?? "").trim();
    // console.log("RAW GEMINI OUTPUT:", raw);

    if (!raw || raw.length < 2) {
      throw new Error("Empty or invalid Gemini output");
    }

    // Strip backticks if present
    let cleaned = raw
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Extract JSON block
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No valid JSON found in output");

    cleaned = jsonMatch[0];

    // Attempt parse
    try {
      return { success: true, data: JSON.parse(cleaned) };
    } catch {
      // Try auto-repair
      const repaired = cleaned
        .replace(/,\s*}/g, "}")
        .replace(/,\s*]/g, "]");

      return { success: true, data: JSON.parse(repaired) };
    }

  } catch (error: any) {
    console.error("Gemini Create Space Error:", error);
    return { success: false, error: error.message };
  }
}

// ----------------------------------------
// HANDLE FORM ACTION
// ----------------------------------------
export async function handleCreateSpace(formData: FormData) {
  const topic = formData.get("topic") as string;
  const level = formData.get("level") as string;
  const lens = formData.get("lens") as string;
  const chapterRange = formData.get("chapterRange") as string;
  const tone = formData.get("tone") as string;
  const analogy = formData.get("analogy") as string;
  const goal = formData.get("goal") as string | undefined;
  const mode = formData.get("mode") as string;

  const chapterTotal = Number(chapterRange.split("-")[0]);

  const result = await GeminiCreateSpaceAction({
    topic,
    level,
    lens,
    chapterTotal,
    tone,
    analogy,
    goal,
    mode,
  });

  return result;
}
