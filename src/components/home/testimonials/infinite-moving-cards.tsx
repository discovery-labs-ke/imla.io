import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string
    name: string
    title: string
    company: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])

  const [start, setStart] = useState(false)
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

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        )
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s")
      }
    }
  }

  function getInitials(fullName: string) {
    // Split the full name into words
    const words = fullName.split(" ")

    // Check if there are any words
    if (words.length === 0) {
      return ""
    }

    // Initialize initials string
    let initials = ""

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
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4  w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => {
          return (
            <li
              className="w-[350px] max-w-full relative rounded-xl flex-shrink-0 border-2  px-8 py-6 md:w-[450px]"
              key={item.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className=" relative z-20 text-sm leading-[1.6] text-foreground">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-4 flex flex-row items-center gap-4">
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
              </blockquote>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
