import { ContainerScroll } from "@/components/home/hero/container-scroll-animation"

import type { ReactNode } from "react"

export default function Hero({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl  text-foreground">
              Unleash the power of
              <br />
              <span className="text-5xl md:text-[6rem] font-black mt-1 leading-none font-serif">
                Imla Transcripts
              </span>
            </h1>
          </>
        }
      >
        {children}
      </ContainerScroll>
    </div>
  )
}
