import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Plus, Dumbbell, BookOpenCheck, ClipboardList } from 'lucide-react'

const defaultTasks = [
  { id: 1, title: 'Study 2 hours', type: 'study', xp: 20 },
  { id: 2, title: 'Finish assignment', type: 'assignments', xp: 30 },
  { id: 3, title: 'Workout 30 min', type: 'fitness', xp: 15 },
]

export default function DailyTasks({ onComplete }) {
  const [tasks, setTasks] = useState(defaultTasks)
  const [input, setInput] = useState('')

  const addTask = () => {
    const t = input.trim()
    if (!t) return
    const newTask = { id: Date.now(), title: t, type: 'custom', xp: 10 }
    setTasks((prev) => [newTask, ...prev])
    setInput('')
  }

  const completeTask = (id) => {
    const task = tasks.find((t) => t.id === id)
    setTasks((prev) => prev.filter((t) => t.id !== id))
    if (task && onComplete) onComplete(task.xp)
  }

  return (
    <section id="start" className="relative mx-auto max-w-6xl px-6 py-10 sm:py-14">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
          Daily Quests
        </h2>
      </div>

      <div className="mb-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a quest…"
          className="w-full rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3 text-slate-200 outline-none ring-1 ring-slate-700/80 placeholder:text-slate-400 focus:border-cyan-400/50 focus:ring-cyan-500/40"
        />
        <button
          onClick={addTask}
          className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-slate-900/60 px-4 py-3 text-sm font-semibold text-cyan-100 ring-1 ring-cyan-400/40 transition hover:border-cyan-300/60 hover:text-cyan-50"
        >
          <Plus className="h-4 w-4" /> Add
        </button>
      </div>

      <ul className="space-y-3">
        <AnimatePresence initial={false}>
          {tasks.map((task) => (
            <motion.li
              key={task.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="group flex items-center justify-between rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/70 to-slate-900/30 px-4 py-3 ring-1 ring-slate-700/80"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800/70 text-cyan-300 ring-1 ring-slate-700/80">
                  {task.type === 'fitness' ? <Dumbbell className="h-5 w-5" /> : task.type === 'study' ? <BookOpenCheck className="h-5 w-5" /> : <ClipboardList className="h-5 w-5" />}
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-200">{task.title}</p>
                  <p className="text-xs text-slate-400">+{task.xp} XP</p>
                </div>
              </div>

              <button
                onClick={() => completeTask(task.id)}
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-400/40 transition hover:border-emerald-300/60 hover:text-emerald-50"
              >
                <Check className="h-4 w-4" /> Claim
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  )
}
