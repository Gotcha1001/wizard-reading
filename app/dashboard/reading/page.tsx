"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { readings, getReadingByColor } from "@/lib/readings";
import { mysticalColors } from "@/lib/colors";
import { BookOpen, RotateCcw, RefreshCw } from "lucide-react";
import { CrystalBall } from "@/app/components/CrystalBall";
import { ColorPicker } from "@/app/components/ColorPicker";
import { RevealText } from "@/app/components/RevealText";

type Phase = "pick-color" | "revealing" | "done";

export default function ReadingPage() {
  const [phase, setPhase] = useState<Phase>("pick-color");
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [currentReading, setCurrentReading] = useState<ReturnType<
    typeof getReadingByColor
  > | null>(null);
  const [revealDone, setRevealDone] = useState(false);
  const saveSession = useMutation(api.sessions.saveSession);

  const handleColorSelect = useCallback(
    async (colorId: number) => {
      setSelectedColor(colorId);
      const reading = getReadingByColor(colorId);
      setCurrentReading(reading);

      setTimeout(async () => {
        setPhase("revealing");
        try {
          await saveSession({
            type: "reading",
            selectedColor: mysticalColors[colorId].hex,
            colorName: mysticalColors[colorId].name,
            resultId: reading.id,
            resultTitle: reading.title,
            resultCategory: reading.category,
            resultText: reading.fullReading,
          });
        } catch {}
      }, 800);
    },
    [saveSession],
  );

  const handleReset = () => {
    setPhase("pick-color");
    setSelectedColor(null);
    setCurrentReading(null);
    setRevealDone(false);
  };

  const categoryLabels: Record<string, string> = {
    tarot: "✦ Tarot",
    runes: "ᚱ Runes",
    crystal: "◈ Crystal",
    astral: "☽ Astral",
    spirit: "⚯ Spirit",
  };

  return (
    <div className="min-h-screen p-6 md:p-10 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 space-y-2"
      >
        <p className="text-purple-400 font-serif text-xs tracking-[0.5em] uppercase">
          ✦ Sacred Reading ✦
        </p>
        <h1 className="font-serif text-4xl text-white glow-text">
          Mystic Reading
        </h1>
        <div className="mystical-divider max-w-48 mx-auto" />
      </motion.div>

      <div className="w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {/* Phase 1: Color pick */}
          {phase === "pick-color" && (
            <motion.div
              key="pick"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mystical-card rounded-2xl p-8 space-y-8"
            >
              <div className="flex justify-center">
                <CrystalBall size="md" />
              </div>
              <div className="text-center">
                <BookOpen className="w-6 h-6 text-purple-400 mx-auto mb-3" />
                <h2 className="font-serif text-xl text-white mb-2">
                  Choose Your Colour
                </h2>
                <p className="text-purple-300/70 font-body text-sm">
                  Each colour opens a different channel to the unseen world.
                  Trust your instinct — not your mind.
                </p>
              </div>
              <ColorPicker
                selected={selectedColor}
                onSelect={handleColorSelect}
              />
            </motion.div>
          )}

          {/* Phase 2 & 3: Revealing + Done */}
          {(phase === "revealing" || phase === "done") && currentReading && (
            <motion.div
              key="reading"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6"
            >
              {/* Crystal ball + color */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
                >
                  <CrystalBall size="md" glowing />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mystical-card rounded-2xl p-8 space-y-6"
              >
                {/* Category + title */}
                <div className="text-center space-y-2">
                  <span className="text-fuchsia-400 text-xs font-serif tracking-widest uppercase">
                    {categoryLabels[currentReading.category]}
                  </span>
                  <h2 className="font-serif text-2xl text-white glow-text">
                    {currentReading.title}
                  </h2>
                  <div
                    className="w-8 h-0.5 mx-auto rounded-full"
                    style={{
                      backgroundColor: mysticalColors[selectedColor!]?.hex,
                    }}
                  />
                </div>

                {/* Reading text */}
                <div className="bg-purple-950/40 rounded-xl p-6 border border-purple-800/20">
                  <p className="font-body text-purple-100 leading-8 text-base">
                    {phase === "revealing" ? (
                      <RevealText
                        text={currentReading.fullReading}
                        speed={15}
                        onComplete={() => setPhase("done")}
                      />
                    ) : (
                      currentReading.fullReading
                    )}
                  </p>
                </div>

                {/* Actions - show after reveal */}
                <AnimatePresence>
                  {phase === "done" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col sm:flex-row gap-3 pt-2"
                    >
                      <button
                        onClick={handleReset}
                        className="btn-mystical flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-serif text-sm"
                      >
                        <RefreshCw className="w-4 h-4" />
                        Another Reading
                      </button>
                      <button
                        onClick={() => (window.location.href = "/dashboard")}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-serif text-sm text-purple-300 border border-purple-700/50 hover:border-fuchsia-500/50 transition-all"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Return to Sanctuary
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
