import { buttonVariants } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useState } from 'react'
import EstimateForm from './EstimateForm'

export default function EstimateCard() {
  const [hours, setHours] = useState(100)

  function saveHours(hours: number) {
    setHours(hours)
  }

  return (
    <Card className="lg:text-lg">
      <CardHeader>
        <div className="md:flex justify-between space-y-2">
          <div className="">
            <CardTitle className="tracking-wide">Bulk transcription</CardTitle>
            <CardDescription>Starting from 100 hours</CardDescription>
          </div>

          <a
            href={`/pricing/estimate/${hours}`}
            className={buttonVariants({ variant: 'outline' })}
          >
            Print quote
          </a>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EstimateForm onSubmit={saveHours} />
      </CardContent>
    </Card>
  )
}
