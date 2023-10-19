"use client";
import { useState } from 'react'

const steps: TimelineStep[] = [
  {
    id: 1,
    title: "Step 1",
    description: "This is step one!"
  },
  {
    id: 2,
    title: "Step 2",
    description: "This is step one!"
  },
  {
    id: 3,
    title: "Step 3",
    description: "This is step one!"
  }
]

interface TimelineStep {
  id: number,
  title: string,
  description: string
}

function TimelineContainer() {
  const [timeline, setTimeline] = useState<Array<TimelineStep> | null>(steps);

  return (
    <div>
      
    </div>
  )
}

export default TimelineContainer;