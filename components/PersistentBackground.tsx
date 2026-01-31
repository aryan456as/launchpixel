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
            className="fixed inset-0 z-0 opacity-100 pointer-events-none transition-opacity duration-1000"
        >
            <Antigravity
                count={300}
                magnetRadius={15}
                ringRadius={12}
                waveSpeed={0.5}
                waveAmplitude={1.2}
                particleSize={1.2}
                lerpSpeed={0.05}
                color="#5227FF"
                autoAnimate
                particleVariance={1}
                rotationSpeed={0}
                depthFactor={1}
                pulseSpeed={3}
                particleShape="box"
                fieldStrength={10}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/30 via-gray-950/50 to-gray-950 pointer-events-none" />
        </div>
    )
}
