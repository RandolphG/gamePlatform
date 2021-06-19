import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveRoute } from '../../app/userInfo'

/**
 * dashboard ViewModel
 */
export const useDashboard = () => {
  const activeRoute = 'DASHBOARD'
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveRoute({ activeRoute }))
  })
}
