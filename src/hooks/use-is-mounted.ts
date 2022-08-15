import { useEffect, useRef } from 'react'

export const useIsMounted = () => {
  let mounted = useRef(true)

  useEffect(() => {
    return () => {
      mounted.current = false
    }
  }, [])

  return mounted
}
