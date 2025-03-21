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

  useEffect(() => {
    addAnimation()
  })

  const [start, setStart] = useState(false)

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        )
      }
      else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      }
      else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      }
      else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  function getInitials(fullName: string) {
    // Split the full name into words
    const words = fullName.split(' ')

    // Check if there are any words
    if (words.length === 0) {
      return ''
    }

    // Initialize initials string
    let initials = ''

    // Loop through the first two words (maximum of 2 initials)
    for (let i = 0; i < 2; i++) {
      // Check if the current word exists and has a character
      if (words[i] && words[i][0]) {
        // Get the first character of the current word and uppercase it
        initials += words[i][0].toUpperCase()
      }
    }

    return initials
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4  w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item) => {
          return (
            <li
              key={item.name}
              className="w-[350px] max-w-full max-h-full  md:w-[450px] "
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
                      <span className=" text-background">
                        {getInitials(item.name)}
                      </span>
                    </div>
                    <span className="flex flex-col text-muted-foreground  text-sm">
                      <span className="">{item.name}</span>
                      <span className="text-xs">{item.title}</span>
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
