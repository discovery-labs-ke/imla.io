import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

export default function MobileNav({ children }: { children: ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <HamburgerMenuIcon className="h-4 w-4 shrink-0 text-foreground" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <nav className="grid gap-6 text-lg font-medium">{children}</nav>
      </SheetContent>
    </Sheet>
  )
}
