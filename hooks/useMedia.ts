import { useEffect, useState } from "react"

export const useMedia = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const setSize = () => {
    const result = window.matchMedia("(min-width: 1024px)").matches;
    setIsMobile(!result)
    setIsDesktop(result)
  }

  useEffect(() => {
    window.addEventListener("resize", setSize);
    
    setSize()

    return function() {
      window.removeEventListener('resize', setSize)
    }
  }, [])

  return { isMobile, isDesktop }
}