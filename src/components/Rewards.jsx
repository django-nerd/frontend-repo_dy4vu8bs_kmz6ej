import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift } from 'lucide-react'

export default function Rewards({ reward }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h2 className="mb-4 bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">Rewards</h2>
      <div className="rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-900/70 to-slate-900/30 p-6 ring-1 ring-slate-700/80">
        <AnimatePresence>
          {reward ? (
            <motion.div
              key={reward}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-center gap-3 text-amber-200"
            >
              <Gift className="h-5 w-5" />
              <span className="text-sm font-medium">{reward}</span>
            </motion.div>
          ) : (
            <p className="text-sm text-slate-400">Complete weekly goals to unlock chests and bonuses.</p>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
