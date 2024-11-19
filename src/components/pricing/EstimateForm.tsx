import { z } from "astro/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { formatToCurrency } from "../../lib/utils"

type Props = {
  onSubmit: (hours: number) => void
}

const formSchema = z.object({
  hours: z.coerce.number().int().min(100).safe().positive().finite(),
})

export default function EstimateForm({ onSubmit }: Props) {
  const [cost, setCost] = useState(formatToCurrency(4800))

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hours: 100,
    },
  })

  function calculateCost(hours: number) {
    const rate = 48 // kes.48 per hour
    const result = hours * rate
    setCost(formatToCurrency(result))
  }

  // 2. Define a submit handler.
  function handleSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    onSubmit(values.hours)
    calculateCost(values.hours)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="hours"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hours</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="minimum: 100" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button aria-label="Estimate cost" type="submit">
            Estimate cost
          </Button>
        </form>
      </Form>

      <div className="lg:border-l-2 lg:pl-6 space-y-2">
        <p className="text-muted-foreground text-lg">Estimated cost</p>
        <p className="text-primary text-xl lg:text-2xl font-bold">{cost}</p>
      </div>
    </>
  )
}
