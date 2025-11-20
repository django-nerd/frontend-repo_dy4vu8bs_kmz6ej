import React from 'react'
import { motion } from 'framer-motion'

export default function ProgressXP({ level, xp, next }) {
  const pct = Math.min(100, Math.round((xp / next) * 100))
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-900/70 to-slate-900/30 p-6 ring-1 ring-slate-700/80">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-slate-300">Level <span className="font-semibold text-cyan-300">{level}</span></div>
          <div className="text-slate-400 text-sm">{xp} / {next} XP</div>
        </div>
        <div className="h-3 w-full rounded-full bg-slate-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: pct + '%' }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
            className="h-3 rounded-full"
            style={{ background: 'linear-gradient(90deg, rgba(56,189,248,0.8), rgba(129,140,248,0.9))', boxShadow: '0 0 28px rgba(99,102,241,0.5)' }}
          />
        </div>
      </div>
    </section>
  )
}
