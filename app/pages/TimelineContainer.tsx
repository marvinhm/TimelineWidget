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

export interface ThemeDataType {
  themeColour: string
}

function TimelineContainer() {
  const [timelineData, setTimelineData] = useState<Array<TimelineStepType>>(steps);
  const [themeData, setTimelineTheme] = useState<ThemeDataType>({themeColour: "grey"});


  function handleClick(): void {
    let arrayLength = timelineData.length;
    const nextStep: TimelineStepType[] = [
      ...timelineData,
      { id: arrayLength++, title: '', description: '', completed: false }
    ];
    setTimelineData(nextStep);

  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target
    setTimelineTheme(prevTimelineTheme => {
        return {
            ...prevTimelineTheme,
            [name]: value
        }
    })
}



  return (
    <div className="timelineContainer">
      <div className="row row1--timeline_section">
        <div>
          <button className="tl-btn drop-shadow-md" title="Add step button" onClick={handleClick}>
            <span className="plus-icon"></span>
            <p>ADD A STEP</p>
          </button>
          <fieldset className="theme-fieldset">
            <legend>Change theme color:</legend>
            <input 
              type="radio"
              id="tl--color"
              name="themeColour"
              value="red"
              title="red theme"
              checked={themeData.themeColour === "red"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(event)
              }
            />
            <label htmlFor="unemployed">Red</label>
            <br />
            <input 
              type="radio"
              id="tl--color"
              name="themeColour"
              value="blue"
              title="blue theme"
              checked={themeData.themeColour === "blue"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(event)
              }
            />
            <label htmlFor="unemployed">Blue</label>
            <br />
            <input 
              type="radio"
              id="tl--color"
              name="themeColour"
              value="grey"
              title="grey theme"
              checked={themeData.themeColour === "grey"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(event)
              }
            />
            <label htmlFor="unemployed">Grey</label>
            <br />

          </fieldset>
        </div>
        <div className="tl-swiper-content md:container md:mx-auto drop-shadow-md">
          {timelineData.length === 0 ? (
            <div className="tl-empty-message">
              <h1>Timeline Widget.</h1>
              <h1>Add a step to the timeline.</h1>
            </div>
          ) : (
            <TimelineSwiper data={timelineData} dataSetter={setTimelineData} themeData={themeData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default TimelineContainer;