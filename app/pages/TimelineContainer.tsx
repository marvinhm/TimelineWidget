"use client";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Keyboard, Navigation } from 'swiper/modules';

const steps: TimelineStep[] = [
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

interface TimelineStep {
  id: number,
  title: string,
  description: string
}

function TimelineContainer() {
  const [timelineData, setTimelineData] = useState<Array<TimelineStep>>(steps);
  const [stepTitle, setStepTitle] = useState<string>('');
  const [stepDescription, setstepDescription] = useState<string>('');

  let nextId: number = timelineData.length;

  function handleClick() {
    let insertAt = nextId+1; // Could be any index
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
          <Swiper
            slidesPerView={2}
            spaceBetween={0}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            modules={[Keyboard, Navigation]}
            className="swiper-size"
          >
            {timelineData?.map((step) => (
              <SwiperSlide key={step.id} className="swiper-wrapper-container">
                <div className="single--timeline_section tl-top-row">
                  
                  <div className="content--timeline_section flex inline-flex">
                    <div className="step--timeline_section">
                      <div className="step-title--timeline_section m-0 font-bold">
                        <textarea 
                          rows={1} 
                          cols={step.title.length}
                          placeholder="Step Title"
                          name="firstName"
                          value={step.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='milestone'> 
                  <span className="dot"></span>
                </div>

                <div className="single--timeline_section relative tl-bottom-row">
                  <div className="content--timeline_section flex inline-flex">
                    <div className="step-desc--timeline_section">
                      <textarea
                        rows={1} 
                        cols={step.description.length}
                        placeholder="Step Description"
                        name="firstName"
                        value={step.description}
                      />
                    </div>
                  </div>
                </div>
                <button onClick={() => {
                  setTimelineData(
                    timelineData.filter(item =>
                      item.id !== step.id
                    )
                  );
                }}>
                  Delete
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TimelineContainer;