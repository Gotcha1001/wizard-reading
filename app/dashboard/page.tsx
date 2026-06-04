"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

import { BookOpen, Sparkles } from "lucide-react";
import { CrystalBall } from "../components/CrystalBall";

export default function DashboardPage() {
  const { user } = useUser();

  const choices = [
    {
      href: "/dashboard/reading",
      icon: BookOpen,
      title: "Mystic Reading",
      subtitle: "Tarot · Runes · Crystal · Astral",
      description:
        "Peer into the currents of your life. The cards and runes will illuminate what stirs beneath the surface.",
      gradient: "from-purple-900/80 to-violet-950/80",
      borderColor: "border-purple-500/30 hover:border-purple-400/60",
      glowColor: "rgba(139,63,240,0.5)",
      accent: "text-purple-300",
    },
    {
      href: "/dashboard/fortune",
      icon: Sparkles,
      title: "Fortune Oracle",
      subtitle: "Destiny · Love · Wealth · Blessings",
      description:
        "Ask the cosmos what is written in your stars. The oracle speaks in the language of signs and omens.",
      gradient: "from-fuchsia-900/80 to-pink-950/80",
      borderColor: "border-fuchsia-500/30 hover:border-fuchsia-400/60",
      glowColor: "rgba(232,121,249,0.5)",
      accent: "text-fuchsia-300",
    },
  ];

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 space-y-3"
      >
        <div className="flex justify-center mb-6 animate-float">
          <CrystalBall size="sm" glowing />
        </div>
        <p className="text-fuchsia-400 font-serif text-xs tracking-[0.5em] uppercase">
          ✦ Welcome back ✦
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-white glow-text">
          {user?.firstName ? `${user.firstName}'s Sanctuary` : "Your Sanctuary"}
        </h1>
        <p className="text-purple-300/70 font-body text-base max-w-md mx-auto">
          The veil is thin tonight. What wisdom do you seek?
        </p>
        <div className="mystical-divider max-w-xs mx-auto" />
      </motion.div>

      {/* Choice cards */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
        {choices.map((choice, i) => (
          <motion.div
            key={choice.href}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.2, duration: 0.6 }}
            whileHover={{ y: -6 }}
          >
            <Link href={choice.href}>
              <div
                className={`mystical-card rounded-2xl p-8 cursor-pointer border ${choice.borderColor} transition-all duration-500 h-full`}
                style={{
                  background: `linear-gradient(135deg, ${choice.gradient.replace("from-", "").replace(" to-", ", ")})`,
                }}
              >
                <div className="flex flex-col items-center text-center space-y-5">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: `radial-gradient(circle, ${choice.glowColor} 0%, transparent 70%)`,
                      boxShadow: `0 0 30px ${choice.glowColor}`,
                    }}
                  >
                    <choice.icon className={`w-8 h-8 ${choice.accent}`} />
                  </motion.div>

                  <div>
                    <h2 className="font-serif text-2xl text-white mb-1">
                      {choice.title}
                    </h2>
                    <p
                      className={`text-xs ${choice.accent} font-serif tracking-widest uppercase`}
                    >
                      {choice.subtitle}
                    </p>
                  </div>

                  <p className="text-purple-200/70 font-body text-sm leading-relaxed">
                    {choice.description}
                  </p>

                  <div
                    className={`mt-2 px-6 py-2 rounded-full text-sm font-serif ${choice.accent} border border-current/30`}
                  >
                    Enter the Circle →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Subtle quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-purple-700 text-xs font-body italic text-center"
      >
        To know thyself is to know the universe
      </motion.p>
    </div>
  );
}
