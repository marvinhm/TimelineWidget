"use client";
import { useState } from 'react';
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
          <button className="tl-btn drop-shadow-md" title="Add step button" onClick={handleClick}>
            <span className="plus-icon"></span>
            <p>ADD A STEP</p>
          </button>
        </div>
        <div className="tl-swiper-content md:container md:mx-auto drop-shadow-md">
          {timelineData.length === 0 ? (
            <div className="tl-empty-message">
              <h1>Timeline Widget.</h1>
              <h1>Add a step to the timeline.</h1>
            </div>
          ) : (
            <TimelineSwiper data={timelineData} dataSetter={setTimelineData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default TimelineContainer;