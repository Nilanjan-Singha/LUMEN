"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ChatInput({ onSend }: { onSend?: (text: string) => void }) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleSend() {
    if (!value.trim()) return;
    onSend?.(value.trim());
    setValue("");
    resize();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  // Auto resize textarea
  function resize() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 160) + "px";
  }

  useEffect(() => resize(), [value]);

  return (
    <div className="w-full relative top-80  py-4 bg-white dark:bg-black  dark:border-neutral-800">
      <div className="mx-auto max-w-5xl flex items-end gap-3 px-4">
        
        {/* ChatGPT-style input box */}
        <div className="relative flex-1">
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Periplus to start a new space or continue where you left off..."
            className="min-h-30 max-h-40 resize-none pr-12 pt-2"
          />

          {/* Send button inside box */}
          <Button
            size="icon"
            variant="ghost"
            onClick={handleSend}
            className="absolute right-2 bottom-2 h-8 w-8"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

      </div>
    </div>
  );
}
