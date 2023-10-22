"use client";
import { useEffect, useState } from 'react';
import TimelineSwiper from './TimelineSwiper';

const steps: TimelineStepType[] = [
  {
    id: 0,
    title: "Step 1",
    description: "This is step one!",
    completed: false
  },
  {
    id: 1,
    title: "",
    description: "",
    completed: false
  },
  {
    id: 2,
    title: "",
    description: "",
    completed: false
  }
]

export interface TimelineStepType {
  id: number,
  title: string,
  description: string,
  completed: boolean
}

function TimelineContainer() {
  const [timelineData, setTimelineData] = useState<Array<TimelineStepType>>(steps);
  const [stepTitle, setStepTitle] = useState<string>('');
  const [stepDescription, setstepDescription] = useState<string>('');


  function handleClick() {
    let arrayLength = timelineData.length;
    const nextStep: TimelineStepType[] = [
      ...timelineData,
      { id: arrayLength++, title: '', description: '', completed: false }
    ];

    setTimelineData(nextStep);

  }


  return (
    <div className="timelineContainer">
      <div className="row row1--timeline_section">
        <div>
          <button className='tl-btn' onClick={handleClick}>
            <span className='plus-icon'></span>
            <p>ADD A STEP</p>
          </button>
        </div>
        <div className="tl-swiper-content md:container md:mx-auto">
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