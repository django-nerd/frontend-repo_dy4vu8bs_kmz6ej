import React from 'react'
import { motion } from 'framer-motion'

function Stat({ label, value, color }) {
  return (
    <div className="rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-900/70 to-slate-900/30 p-4 ring-1 ring-slate-700/80">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider text-slate-400">{label}</span>
        <span className="text-xs text-slate-400">{value}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-800">
        <div className="h-2 rounded-full" style={{ width: `${value}%`, background: `linear-gradient(90deg, ${color}aa, ${color})`, boxShadow: `0 0 24px ${color}55` }} />
      </div>
    </div>
  )
}

export default function Stats({ stats }) {
  const items = [
    { label: 'Focus', value: stats.focus, color: '#38bdf8' },
    { label: 'Attendance', value: stats.attendance, color: '#818cf8' },
    { label: 'Skills', value: stats.skills, color: '#22d3ee' },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h2 className="mb-4 bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">Stats</h2>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
      >
        {items.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </motion.div>
    </section>
  )
}
