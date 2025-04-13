'use client'
import Input from '@/components/Input'
import { useEffect, useRef } from 'react'
import { createSwapy, Swapy } from 'swapy'

export default function Home() {
  const swapyRef = useRef<Swapy | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      swapyRef.current = createSwapy(containerRef.current, {})

      swapyRef.current.onBeforeSwap((event) => {
        console.log('beforeSwap', event)
        return true
      })

      swapyRef.current.onSwapStart((event) => {
        console.log('start', event);
      })
      swapyRef.current.onSwap((event) => {
        console.log('swap', event);
      })
      swapyRef.current.onSwapEnd((event) => {
        console.log('end', event);
      })
    }
    return () => {
      swapyRef.current?.destroy()
    }
  }, [])
  return (
    <div className="container" ref={containerRef}>
      <div className="slot" data-swapy-slot="a">
        <div className="item item-a" data-swapy-item="a">
          <Input type='text' name='sample' placeholder='Input A'/>
        </div>
      </div>
      <div className="slot" data-swapy-slot="b">
        <div className="item item-b" data-swapy-item="b">
          <Input type='text' name='sample' placeholder='Input B'/>
        </div>
      </div>
      <div className="slot" data-swapy-slot="d">
        <div className="item item-d" data-swapy-item="d">
          <Input type='text' name='sample' placeholder='Input C'/>
        </div>
      </div>
    </div>
  )
}
