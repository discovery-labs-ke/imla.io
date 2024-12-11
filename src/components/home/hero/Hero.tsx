import { ContainerScroll } from "@/components/home/hero/container-scroll-animation"

import type { ReactNode } from "react"

function HeroTitle() {
  return (
    <h1 className="text-4xl text-foreground text-balance">
      Unleash the power of
      <br />
      <span className="text-5xl md:text-[6rem] font-black mt-1 leading-none font-serif text-balance text-primary">
        Imla Transcripts
      </span>
    </h1>
  )
}
export default function Hero({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="container text-center md:hidden space-y-14 lg:space-y-32 my-32">
        <HeroTitle />
      </div>
      <div className="hidden md:flex flex-col overflow-hidden">
        <ContainerScroll titleComponent={<HeroTitle />}>
          {children}
        </ContainerScroll>
      </div>
    </>
  )
}

// tell user about transcription esp the niche for Kenyan english + swahili
