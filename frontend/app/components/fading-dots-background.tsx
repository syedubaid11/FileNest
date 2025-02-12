"use client"

import { useEffect, useRef } from "react"

interface Dot {
  x: number
  y: number
  radius: number
  alpha: number
  velocity: number
}

export default function FadingDotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dots: Dot[] = []
    const numDots = 100

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createDots = () => {
      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          alpha: Math.random(),
          velocity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach((dot) => {
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.alpha})`
        ctx.fill()

        dot.y -= dot.velocity
        dot.alpha -= 0.005

        if (dot.y < 0 || dot.alpha < 0) {
          dot.y = canvas.height
          dot.alpha = Math.random()
        }
      })
      requestAnimationFrame(drawDots)
    }

    resizeCanvas()
    createDots()
    drawDots()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full bg-gray-900" />
}

