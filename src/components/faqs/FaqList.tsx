import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { CollectionEntry } from "astro:content"

export default function FaqList({
  data,
}: {
  data: CollectionEntry<"faqs">["data"][]
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-background rounded-xl px-8 py-2"
    >
      {data.map((item, idx) => (
        <AccordionItem key={"faq-" + idx} value={"faq-" + idx}>
          <AccordionTrigger className="text-pretty">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-pretty">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
