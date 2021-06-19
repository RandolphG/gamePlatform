import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getDayOfMonth,
  getNumberOfMonth,
  getTime,
  setCurrentDateTime,
} from './store'
import { getWeekday } from './utils'

/**
 * TimeViewModel
 */
export const useTime = () => {
  const day = useSelector(getDayOfMonth)
  const date = useSelector(getNumberOfMonth)
  const time = useSelector(getTime)

  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date()
      const dayOfMonth = getWeekday(date.getDay())
      const numberOfMonth = date.getDate()
      const time = date.toLocaleString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })

      dispatch(setCurrentDateTime({ dayOfMonth, numberOfMonth, time }))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return {
    day,
    date,
    time,
  }
}
