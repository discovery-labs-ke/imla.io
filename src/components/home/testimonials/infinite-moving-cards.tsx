import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

export function InfiniteMovingCards({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string
    name: string
    title: string
    company: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  const getDirection = React.useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse',
      )
    }
  }, [direction])

  const getSpeed = React.useCallback(() => {
    if (containerRef.current) {
      const speeds = {
        fast: '20s',
        normal: '40s',
        slow: '80s',
      }
      containerRef.current.style.setProperty('--animation-duration', speeds[speed])
    }
  }, [speed])

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current || start)
      return

    const scrollerContent = Array.from(scrollerRef.current.children)

    // Only clone if we haven't already
    if (scrollerContent.length === items.length) {
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        scrollerRef.current?.appendChild(duplicatedItem)
      })
    }

    getDirection()
    getSpeed()
    setStart(true)
  }, [items.length, getDirection, getSpeed, start])

  // Memoize the getInitials function
  const getInitials = React.useCallback((fullName: string) => {
    const words = fullName.split(' ')
    if (words.length === 0)
      return ''

    return words
      .slice(0, 2)
      .map(word => word[0]?.toUpperCase() || '')
      .join('')
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map(item => (
          <li
            key={item.name}
            className="w-[350px] max-w-full max-h-full md:w-[450px]"
          >
            <Card className="size-full border-2">
              <CardHeader className="py-3">
                <CardDescription className="text-pretty leading-relaxed text-normal">
                  {item.quote}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex flex-row items-center gap-4">
                  <div className="rounded-full size-10 bg-foreground/80 grid place-items-center">
                    <span className="text-background">
                      {getInitials(item.name)}
                    </span>
                  </div>
                  <span className="flex flex-col text-muted-foreground text-sm">
                    <span>{item.name}</span>
                    <span className="text-xs">{item.title}</span>
                  </span>
                </div>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
