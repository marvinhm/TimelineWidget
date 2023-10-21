"use client";
import { useState } from 'react';
import TimelineSwiper from './TimelineSwiper';

const steps: TimelineStepType[] = [
  {
    id: 1,
    title: "Step 1",
    description: "This is step one!"
  },
  {
    id: 2,
    title: "Step 2",
    description: "This is step two!"
  },
  {
    id: 3,
    title: "Step 3",
    description: "This is step three!"
  }
]

export interface TimelineStepType {
  id: number,
  title: string,
  description: string
}

function TimelineContainer() {
  const [timelineData, setTimelineData] = useState<Array<TimelineStepType>>(steps);
  const [stepTitle, setStepTitle] = useState<string>('');
  const [stepDescription, setstepDescription] = useState<string>('');

  let nextId: number = timelineData.length;

  function handleClick() {
    let insertAt = nextId+1;
    const nextStep: any = [
      // Items before the insertion point:
      ...timelineData.slice(0, insertAt-1),
      // New item:
      { id: insertAt++, title: '', description: '' },
      // Items after the insertion point:
      ...timelineData.slice(insertAt-1)
    ];

    setTimelineData(nextStep);

  }


  return (
    <div className="timelineContainer">
      <div className="row row1--timeline_section">
        <div>
          <button onClick={handleClick}>
            + Add
          </button>
        </div>
        <div className="col-md-12">
          <TimelineSwiper 
            data={timelineData}
            dataSetter={setTimelineData}
          />
        </div>
      </div>
    </div>
  );
}

export default TimelineContainer;