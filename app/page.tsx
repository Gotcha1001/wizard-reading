"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { StarsBackground } from "./components/StarsBackground";
import { CrystalBall } from "./components/CrystalBall";

export default function LandingPage() {
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      window.location.href = "/dashboard";
    }
  }, [isSignedIn]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <StarsBackground />

      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-purple-900/30 -top-20 -left-20" />
      <div className="orb w-80 h-80 bg-fuchsia-900/20 bottom-0 right-0" />

      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-10">
        {/* Crystal ball */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center animate-float"
        >
          <CrystalBall size="lg" glowing />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="font-serif text-fuchsia-400 text-sm tracking-[0.4em] uppercase mb-3">
            ✦ Welcome, Seeker ✦
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold glow-text text-white leading-tight mb-4">
            Wizardry
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400">
              Insights
            </span>
          </h1>
          <div className="mystical-divider max-w-xs mx-auto my-4" />
          <p className="text-purple-200/80 font-body text-lg leading-relaxed max-w-xl mx-auto">
            Step beyond the veil. Ancient wisdom, celestial readings, and the
            whisper of your destiny await within these sacred walls.
          </p>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: BookOpen, text: "Mystic Readings" },
            { icon: Sparkles, text: "Fortune Tellings" },
            { icon: ArrowRight, text: "Guided by Colour" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-700/50 bg-purple-900/30 text-purple-200 text-sm font-body"
            >
              <Icon className="w-4 h-4 text-fuchsia-400" />
              {text}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <SignUpButton mode="modal">
            <button className="btn-mystical px-8 py-4 rounded-xl font-serif text-base font-semibold tracking-wide">
              ✦ Begin Your Journey
            </button>
          </SignUpButton>
          <SignInButton mode="modal">
            <button className="px-8 py-4 rounded-xl font-serif text-base text-purple-300 border border-purple-700/50 hover:border-fuchsia-500/50 hover:text-fuchsia-300 transition-all duration-300">
              Return, Seeker →
            </button>
          </SignInButton>
        </motion.div>

        {/* Footer tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="text-purple-600 text-xs font-body italic"
        >
          The stars speak to those who dare to listen
        </motion.p>
      </div>
    </main>
  );
}
