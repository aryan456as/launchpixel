"use client"
import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Antigravity = dynamic(() => import('./Antigravity'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-gray-950 opacity-100 transition-opacity duration-1000" />
})

export default function PersistentBackground() {
    const pathname = usePathname()
    const [mounted, setMounted] = useState(false)
    const isHome = pathname === "/"

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div
            className={`fixed inset-0 z-0 transition-opacity duration-1000 ${isHome ? "opacity-100 pointer-events-none" : "opacity-0 pointer-events-none"
                }`}
        >
            <Antigravity
                count={400}
                magnetRadius={13}
                ringRadius={10}
                waveSpeed={0.6}
                waveAmplitude={1}
                particleSize={1.5}
                lerpSpeed={0.05}
                color="#5227FF"
                autoAnimate
                particleVariance={1}
                rotationSpeed={0}
                depthFactor={1}
                pulseSpeed={3}
                particleShape="sphere"
                fieldStrength={10}
                paused={!isHome}
            />
        </div>
    )
}
