import { useLayoutEffect, useRef, useCallback, useEffect } from "react"
import "./ScrollStack.css"

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
)

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 20,
  blurAmount = 0,
  onStackComplete,
}) => {
  const containerRef = useRef(null)
  const stackCompletedRef = useRef(false)
  const animationFrameRef = useRef(null)
  const cardsRef = useRef([])
  const lastTransformsRef = useRef(new Map())
  const isUpdatingRef = useRef(false)

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0
    if (scrollTop > end) return 1
    return (scrollTop - start) / (end - start)
  }, [])

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight
    }
    return parseFloat(value)
  }, [])

  const updateCardTransforms = useCallback(() => {
    const container = containerRef.current
    if (!container || !cardsRef.current.length || isUpdatingRef.current) return

    isUpdatingRef.current = true

    const scrollTop = window.scrollY
    const containerRect = container.getBoundingClientRect()
    const containerTop = containerRect.top + scrollTop
    const containerHeight = containerRect.height
    const viewportHeight = window.innerHeight

    const stackPositionPx = parsePercentage(stackPosition, viewportHeight)
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, viewportHeight)

    // Debug log (only log occasionally to avoid spam)
    if (Math.random() < 0.01) {
      console.log("ScrollStack: Updating transforms", {
        scrollTop,
        containerTop,
        containerHeight,
        viewportHeight,
      })
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return

      const cardRect = card.getBoundingClientRect()
      const cardTop = cardRect.top + scrollTop
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i
      const triggerEnd = cardTop - scaleEndPositionPx
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i
      const pinEnd = containerTop + containerHeight - viewportHeight / 2

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd
      )
      const targetScale = baseScale + i * itemScale
      const scale = 1 - scaleProgress * (1 - targetScale)
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0

      let blur = 0
      if (blurAmount) {
        let topCardIndex = 0
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardRect = cardsRef.current[j].getBoundingClientRect()
          const jCardTop = jCardRect.top + scrollTop
          const jTriggerStart =
            jCardTop - stackPositionPx - itemStackDistance * j
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i
          blur = Math.max(0, depthInStack * blurAmount)
        }
      }

      let translateY = 0
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd

      if (isPinned) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      }

      const lastTransform = lastTransformsRef.current.get(i)
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`
        const filter =
          newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : ""

        card.style.transform = transform
        card.style.filter = filter

        lastTransformsRef.current.set(i, newTransform)
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true
          onStackComplete?.()
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false
        }
      }
    })

    isUpdatingRef.current = false
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
  ])

  const handleScroll = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    animationFrameRef.current = requestAnimationFrame(updateCardTransforms)
  }, [updateCardTransforms])

  const handleResize = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    animationFrameRef.current = requestAnimationFrame(updateCardTransforms)
  }, [updateCardTransforms])

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    console.log("ScrollStack: Setting up component")

    const cards = Array.from(container.querySelectorAll(".scroll-stack-card"))
    cardsRef.current = cards
    const transformsCache = lastTransformsRef.current

    console.log("ScrollStack: Found cards:", cards.length)

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`
      }
      card.style.willChange = "transform, filter"
      card.style.transformOrigin = "top center"
      card.style.backfaceVisibility = "hidden"
      card.style.transform = "translateZ(0)"
      card.style.webkitTransform = "translateZ(0)"
      card.style.perspective = "1000px"
      card.style.webkitPerspective = "1000px"
    })

    // Add scroll and resize listeners to window
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })

    console.log("ScrollStack: Event listeners added")

    // Initial update
    updateCardTransforms()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      stackCompletedRef.current = false
      cardsRef.current = []
      transformsCache.clear()
      isUpdatingRef.current = false
      console.log("ScrollStack: Cleanup completed")
    }
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    onStackComplete,
    handleScroll,
    handleResize,
    updateCardTransforms,
  ])

  return (
    <div
      className={`scroll-stack-container ${className}`.trim()}
      ref={containerRef}
    >
      {children}
    </div>
  )
}

export default ScrollStack
