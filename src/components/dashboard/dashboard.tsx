import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { useDashboard } from './dashboardViewModel'
import { dashboard } from './motionSettings'
import { Games } from '../games'
import { LogoutButton } from './components'
import './styles/_dashboardLayout.scss'

const Dashboard = memo(() => {
  useDashboard()

  return (
    <motion.div key="dashboard" className="dashboard" {...dashboard}>
      <LogoutButton />
      <Games />
    </motion.div>
  )
})

export default Dashboard
