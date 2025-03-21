import type { CollectionEntry } from 'astro:content'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FaqList({
  data,
}: {
  data: CollectionEntry<'faqs'>['data'][]
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-background rounded-xl px-8 py-2"
    >
      {data.map((item) => {
        const slug = item.question.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        return (
          <AccordionItem
            key={slug}
            value={slug}
          >
            <AccordionTrigger className="text-pretty">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-pretty">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
