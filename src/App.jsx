import React, { useState } from 'react'
import Hero from './components/Hero'
import ProgressXP from './components/ProgressXP'
import Stats from './components/Stats'
import DailyTasks from './components/DailyTasks'
import WeeklyGoals from './components/WeeklyGoals'
import Rewards from './components/Rewards'

function App() {
  const [level, setLevel] = useState(1)
  const [xp, setXp] = useState(0)
  const [next, setNext] = useState(100)
  const [stats, setStats] = useState({ focus: 40, attendance: 70, skills: 55 })
  const [reward, setReward] = useState('')

  const gainXp = (amount) => {
    let newXp = xp + amount
    let newLevel = level
    let threshold = next

    while (newXp >= threshold) {
      newXp -= threshold
      newLevel += 1
      threshold = Math.round(threshold * 1.25)
      setStats((s) => ({
        ...s,
        focus: Math.min(100, s.focus + 3),
        attendance: Math.min(100, s.attendance + 2),
        skills: Math.min(100, s.skills + 4),
      }))
    }

    setLevel(newLevel)
    setXp(newXp)
    setNext(threshold)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <div className="relative">
        {/* subtle grid bg */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
        <ProgressXP level={level} xp={xp} next={next} />
        <Stats stats={stats} />
        <DailyTasks onComplete={gainXp} />
        <WeeklyGoals onReward={(r) => { setReward(r); gainXp(100); }} />
        <Rewards reward={reward} />

        <footer className="mx-auto max-w-6xl px-6 pb-12 text-center text-xs text-slate-500">
          Built for students who want to glow up IRL • Neon anime UI vibes
        </footer>
      </div>
    </div>
  )
}

export default App
