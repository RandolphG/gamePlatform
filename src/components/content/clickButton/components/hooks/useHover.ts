import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeInnerHovered, setInnerHovered } from '../../store'

/**
 * useHover
 * Hover state - https://dev.to/spaciecat/hover-states-with-react-hooks-4023
 */
export const useHover = () => {
  const dispatch = useDispatch()
  const ref = useRef<HTMLDivElement | null>(null)
  const [hovered, setHovered] = useState(false)

  const enter = () => {
    dispatch(setInnerHovered())
    setHovered(true)
  }

  const leave = () => {
    dispatch(removeInnerHovered())
    setHovered(false)
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mouseenter', enter)
      ref.current.addEventListener('mouseleave', leave)

      return () => {
        if (ref.current) {
          ref.current.removeEventListener('mouseenter', enter)
          ref.current.removeEventListener('mouseleave', leave)
        }
      }
    }
  }, [ref])

  return [ref, hovered]
}
