import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Star, Target } from 'lucide-react'

export default function WeeklyGoals({ onReward }) {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Attend all lectures', done: false },
    { id: 2, title: 'Submit 2 assignments', done: false },
    { id: 3, title: 'Workout 4 times', done: false },
  ])

  const toggle = (id) => {
    setGoals((prev) => prev.map((g) => g.id === id ? { ...g, done: !g.done } : g))
  }

  const claim = () => {
    const completed = goals.filter((g) => g.done).length
    if (completed >= 3 && onReward) onReward('Weekly Chest: +100 XP')
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">Weekly Goals</h2>
        <button onClick={claim} className="inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200 ring-1 ring-amber-400/40 transition hover:border-amber-300/60 hover:text-amber-50">
          <Trophy className="h-4 w-4"/> Claim Reward
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {goals.map((g) => (
          <motion.button
            key={g.id}
            onClick={() => toggle(g.id)}
            whileTap={{ scale: 0.98 }}
            className={`rounded-2xl border p-6 text-left ring-1 transition ${g.done ? 'border-emerald-400/40 bg-emerald-500/10 ring-emerald-400/40' : 'border-slate-700/60 bg-slate-900/30 ring-slate-700/80'}`}
          >
            <div className="mb-3 flex items-center gap-3 text-slate-200">
              {g.done ? <Star className="h-5 w-5 text-emerald-300"/> : <Target className="h-5 w-5 text-cyan-300"/>}
              <span className="font-medium">{g.title}</span>
            </div>
            <p className="text-xs text-slate-400">{g.done ? 'Completed' : 'Tap to mark complete'}</p>
          </motion.button>
        ))}
      </div>
    </section>
  )
}
