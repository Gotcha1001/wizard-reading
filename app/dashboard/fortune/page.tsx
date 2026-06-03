"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { fortunes, getFortuneByColor } from "@/lib/fortunes";
import { mysticalColors } from "@/lib/colors";
import { Sparkles, RotateCcw, RefreshCw, Star } from "lucide-react";
import { CrystalBall } from "@/app/components/CrystalBall";
import { ColorPicker } from "@/app/components/ColorPicker";
import { RevealText } from "@/app/components/RevealText";

type Phase = "pick-color" | "revealing" | "done";

export default function FortunePage() {
  const [phase, setPhase] = useState<Phase>("pick-color");
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [currentFortune, setCurrentFortune] = useState<ReturnType<
    typeof getFortuneByColor
  > | null>(null);
  const [revealDone, setRevealDone] = useState(false);
  const saveSession = useMutation(api.sessions.saveSession);

  const categoryColors: Record<string, string> = {
    love: "text-pink-300",
    wealth: "text-yellow-300",
    destiny: "text-purple-300",
    warning: "text-orange-300",
    blessing: "text-cyan-300",
  };

  const categoryLabels: Record<string, string> = {
    love: "♡ Love",
    wealth: "✦ Wealth",
    destiny: "☽ Destiny",
    warning: "⚠ Warning",
    blessing: "✨ Blessing",
  };

  const handleColorSelect = useCallback(
    async (colorId: number) => {
      setSelectedColor(colorId);
      const fortune = getFortuneByColor(colorId);
      setCurrentFortune(fortune);

      setTimeout(async () => {
        setPhase("revealing");
        try {
          await saveSession({
            type: "fortune",
            selectedColor: mysticalColors[colorId].hex,
            colorName: mysticalColors[colorId].name,
            resultId: fortune.id,
            resultTitle: fortune.title,
            resultCategory: fortune.category,
            resultText: fortune.fortune,
          });
        } catch {}
      }, 800);
    },
    [saveSession],
  );

  const handleReset = () => {
    setPhase("pick-color");
    setSelectedColor(null);
    setCurrentFortune(null);
    setRevealDone(false);
  };

  return (
    <div className="min-h-screen p-6 md:p-10 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 space-y-2"
      >
        <p className="text-fuchsia-400 font-serif text-xs tracking-[0.5em] uppercase">
          ✦ Oracle of Fate ✦
        </p>
        <h1 className="font-serif text-4xl text-white glow-text">
          Fortune Oracle
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
                <Sparkles className="w-6 h-6 text-fuchsia-400 mx-auto mb-3" />
                <h2 className="font-serif text-xl text-white mb-2">
                  Choose Your Colour
                </h2>
                <p className="text-purple-300/70 font-body text-sm">
                  The oracle awaits your choice. Let your spirit guide your hand
                  — the colour knows what you need.
                </p>
              </div>
              <ColorPicker
                selected={selectedColor}
                onSelect={handleColorSelect}
              />
            </motion.div>
          )}

          {/* Phase 2 & 3: Revealing + Done */}
          {(phase === "revealing" || phase === "done") && currentFortune && (
            <motion.div
              key="fortune"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
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
                  <span
                    className={`text-xs font-serif tracking-widest uppercase ${categoryColors[currentFortune.category]}`}
                  >
                    {categoryLabels[currentFortune.category]}
                  </span>
                  <h2 className="font-serif text-2xl text-white glow-text">
                    {currentFortune.title}
                  </h2>
                  <div
                    className="w-8 h-0.5 mx-auto rounded-full"
                    style={{
                      backgroundColor: mysticalColors[selectedColor!]?.hex,
                    }}
                  />
                </div>

                {/* Fortune text */}
                <div className="bg-fuchsia-950/30 rounded-xl p-6 border border-fuchsia-900/20">
                  <p className="font-body text-purple-100 leading-8 text-base">
                    {phase === "revealing" ? (
                      <RevealText
                        text={currentFortune.fortune}
                        speed={15}
                        onComplete={() => setRevealDone(true)}
                      />
                    ) : (
                      currentFortune.fortune
                    )}
                  </p>
                </div>

                {/* Omen + Lucky elements */}
                <AnimatePresence>
                  {(revealDone || phase === "done") && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Omen */}
                      <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-800/20">
                        <p className="text-xs text-fuchsia-400 font-serif tracking-widest uppercase mb-2">
                          ✦ Omen to Watch
                        </p>
                        <p className="text-purple-200/80 font-body text-sm italic">
                          {currentFortune.omen}
                        </p>
                      </div>

                      {/* Lucky elements */}
                      <div className="flex gap-3">
                        {[
                          {
                            label: "Lucky Number",
                            value:
                              currentFortune.luckyElements.number.toString(),
                          },
                          {
                            label: "Lucky Stone",
                            value: currentFortune.luckyElements.color,
                          },
                          {
                            label: "Symbol",
                            value: currentFortune.luckyElements.symbol,
                          },
                        ].map(({ label, value }) => (
                          <div
                            key={label}
                            className="flex-1 text-center bg-purple-950/50 rounded-xl p-3 border border-purple-800/20"
                          >
                            <p className="text-xs text-purple-400 mb-1 font-serif">
                              {label}
                            </p>
                            <p className="text-lg text-fuchsia-300 font-serif">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3 pt-2"
                        onAnimationComplete={() => setPhase("done")}
                      >
                        <button
                          onClick={handleReset}
                          className="btn-mystical flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-serif text-sm"
                        >
                          <RefreshCw className="w-4 h-4" />
                          Ask Again
                        </button>
                        <button
                          onClick={() => (window.location.href = "/dashboard")}
                          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-serif text-sm text-purple-300 border border-purple-700/50 hover:border-fuchsia-500/50 transition-all"
                        >
                          <RotateCcw className="w-4 h-4" />
                          Return to Sanctuary
                        </button>
                      </motion.div>
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
