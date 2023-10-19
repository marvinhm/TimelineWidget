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
  const [timelineData, setTimelineData] = useState<Array<TimelineStep> | null>(steps);

  function handleChange(event: React.SyntheticEvent) {

  }

  return (
    <form className='TimelineContainer'>
      {
        timelineData?.map((item) => (
          <div className='timelineBox' key={item.id}>
            <div className='tl-left'>
              <textarea 
                  defaultValue={item.title} 
                  placeholder="type something descriptive"
                  onChange={handleChange}
                  name={item.title}
              />
            </div>
            <div className='tl-right'>
              <textarea 
                  defaultValue={item.description} 
                  placeholder="type something descriptive"
                  onChange={handleChange}
                  name={item.description}
              />
            </div>
          </div>
        ))
      }
    </form>
  )
}

export default TimelineContainer;