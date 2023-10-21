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


  return (
    <div className="timelineContainer">
      <div className="row row1--timeline_section">
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
            {timelineData?.map((item) => (
              <SwiperSlide key={item.id} className="swiper-wrapper-container">
                <div className="single--timeline_section tl-top-row">
                  
                  <div className="content--timeline_section flex inline-flex">
                    <div className="step--timeline_section">
                      <div className="step-title--timeline_section m-0 font-bold">
                        <textarea 
                          rows={1} 
                          cols={item.title.length}
                          placeholder="Step Title"
                          name="firstName"
                          value={item.title}
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
                        cols={item.description.length}
                        placeholder="Step Description"
                        name="firstName"
                        value={item.description}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TimelineContainer;