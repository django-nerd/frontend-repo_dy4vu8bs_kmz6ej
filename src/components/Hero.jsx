import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays for mood */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div className="absolute -inset-32 opacity-60 blur-3xl bg-[radial-gradient(40%_40%_at_50%_20%,rgba(99,102,241,0.35),transparent_60%),radial-gradient(35%_35%_at_80%_70%,rgba(59,130,246,0.35),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 bg-gradient-to-r from-blue-300 via-sky-300 to-violet-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Level Up IRL — Student Progress System
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto max-w-2xl text-base text-blue-100/90 sm:text-lg"
        >
          Grind daily quests, stack XP, and evolve your stats like an RPG. Neon vibes, anime UI, real-life results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-8"
        >
          <a
            href="#start"
            className="group inline-flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-gradient-to-b from-slate-900/60 to-slate-900/20 px-6 py-3 text-cyan-100 shadow-[0_0_25px_rgba(59,130,246,0.25)] ring-1 ring-cyan-400/40 transition hover:border-cyan-300/60 hover:text-cyan-50 hover:shadow-[0_0_35px_rgba(99,102,241,0.45)] hover:ring-cyan-300/60"
          >
            <span className="text-sm font-semibold tracking-wide">Start Leveling Up</span>
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
