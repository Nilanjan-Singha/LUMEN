"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { handleCreateSpace } from "../../action";

const schema = z.object({
  topic: z.string().min(3, "Topic is required"),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  lens: z.enum(["concise", "essential", "detailed", "comprehensive"]),
  analogy: z.enum(["yes", "no"]),
  tone: z.enum(["serious", "feynman", "simple", "fun", "academic"]),
  mode: z.enum(["self-paced", "guided", "mixed"]),
  chapterRange: z.enum(["5-6", "10-12", "15-17", "20-21","30-31"]),
  goal: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function CreateSpaceModal() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      topic: "",
      level: "beginner",
      lens: "essential",
      analogy: "yes",
      tone: "feynman",
      mode: "self-paced",
      chapterRange: "5-6",
      goal: "",
    },
  });

  const close = () => router.back();

 const onSubmit = async (data: FormData) => {
  const fd = new FormData();
  setLoading(true);

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      fd.append(key, value);
    }
  });

  console.log("Real FormData ready", [...fd.entries()]);
  
  
    const result = await handleCreateSpace(fd);
    setLoading(false);

    if (!result || !result.success) {
      alert("Failed to generate space. Try again.");
      return;
    }

    let newSpace = result.data;

    // Guarantee ID is string
    // newSpace.id = String(newSpace.id);

    try {
      const existing = JSON.parse(localStorage.getItem("generatedSpaces") || "[]");

      existing.push(newSpace);

      localStorage.setItem("generatedSpaces", JSON.stringify(existing));
    } catch (err) {
      console.error("Failed saving to localStorage:", err);
    }

    close();
    router.refresh(); // ensures /spaces updates
};


  return (
    <Dialog defaultOpen onOpenChange={close}>
      <DialogContent className="min-w-4xl p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Create Space</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-3xl mx-auto mt-2"
        >
          {/* Topic */}
          <div>
            <label className="text-lg font-medium">Learning Topic *</label>
            <Input
              placeholder="e.g., React, Mediapipe, Python ML"
              {...form.register("topic")}
              className="mt-1"
            />
          </div>

          {/* Small field grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Level */}
            <div>
              <label className="text-lg font-medium">Level *</label>
              <select
                {...form.register("level")}
                className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-background px-3 py-2 text-sm"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* Lens */}
            <div>
              <label className="text-lg font-medium">Lens *</label>
              <select
                {...form.register("lens")}
                className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-background px-3 py-2 text-sm"
              >
                <option value="concise">Concise</option>
                <option value="essential">Essential</option>
                <option value="detailed">Detailed</option>
                <option value="comprehensive">Comprehensive</option>
              </select>
            </div>

            {/* Analogy */}
            <div>
              <label className="text-lg font-medium">Analogies *</label>
              <select
                {...form.register("analogy")}
                className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-background px-3 py-2 text-sm"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Tone */}
            <div>
              <label className="text-lg font-medium">Tone *</label>
              <select
                {...form.register("tone")}
                className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-background px-3 py-2 text-sm"
              >
                <option value="serious">Serious</option>
                <option value="feynman">Feynman</option>
                <option value="simple">Simple</option>
                <option value="fun">Fun</option>
                <option value="academic">Academic</option>
              </select>
            </div>

            {/* Mode */}
            <div>
              <label className="text-lg font-medium">Mode *</label>
              <select
                {...form.register("mode")}
                className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-background px-3 py-2 text-sm"
              >
                <option value="self-paced">Self-paced</option>
                <option value="guided">Guided</option>
                <option value="mixed">Mixed</option>
              </select>
            </div>

            {/* Chapters */}
            <div>
              <label className="text-lg font-medium">Chapters *</label>
              <select
                {...form.register("chapterRange")}
                className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-background px-3 py-2 text-sm"
              >
                <option value="5-6">5–6</option>
                <option value="10-12">10–12</option>
                <option value="15-17">15–17</option>
                <option value="20-21">20-21</option>
                <option value="30-31">30-31</option>
              </select>
            </div>
          </div>

          {/* Goal */}
          <div>
            <label className="text-lg font-medium">Goal (Optional)</label>
            <Textarea
              placeholder="What do you want to achieve?"
              {...form.register("goal")}
              className="mt-1 text-sm"
            />
          </div>

          {/* Footer */}
          <DialogFooter className="mt-4 flex justify-between">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={close}
              disabled={loading}
            >
              Cancel
            </Button>

            <Button type="submit" size="sm" disabled={loading}>
              {loading ? "Creating..." : "Create Space"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
