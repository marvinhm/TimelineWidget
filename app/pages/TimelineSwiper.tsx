import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Keyboard, Navigation } from 'swiper/modules';
import { TimelineStepType } from './TimelineContainer';

interface TimelineSwiperProps {
  data: TimelineStepType[],
  dataSetter: React.Dispatch<React.SetStateAction<TimelineStepType[]>>
}

function TimelineSwiper({ data, dataSetter }: TimelineSwiperProps) {

  const handleComplete = () => {
    
  }

  const handleFieldChange = (index: number, ev1: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = ev1.target;
  
    console.log('index: ' + index);
    console.log('property name: '+ name);
  
    dataSetter(
      data.map(item => 
          item.id === index
          ? {...item, [name] : value}
          : item 
    ))
  }
  const handleCompletedClick = (index: number): void => {
    dataSetter(
      data.map(item => 
          item.id === index
          ? {...item, ["completed"] : true}
          : item 
    ))
  }


  return (
    <div>
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
        {data?.map((step, index) => (
          <SwiperSlide key={step.id} className="swiper-wrapper-container">
            <div className="single--timeline_section tl-top-row">
              <div className="content--timeline_section flex inline-flex">
                <div className="step--timeline_section">
                  <div className="step-title--timeline_section m-0 font-bold">
                    <textarea
                      rows={1}
                      cols={step.title.length}
                      placeholder="Step Title"
                      name="title"
                      defaultValue={step.title}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        handleFieldChange(index, e)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="milestone">
              {step.completed ? (
                <div className="checked-step" title="Checked">
                  <span className='dot'></span>
                </div>
              ) : (
                <div
                  className="unchecked-step" title="Unchecked"
                  onClick={() => handleCompletedClick(index)}
                >
                  <span className='dot'></span>
                </div>
              )}
              
            </div>

            <div className="single--timeline_section relative tl-bottom-row">
              <div className="content--timeline_section flex inline-flex">
                <div className="step-desc--timeline_section">
                  <textarea
                    rows={1}
                    cols={step.description.length}
                    placeholder="Step Description"
                    name="description"
                    defaultValue={step.description}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                      handleFieldChange(index, event)
                    }
                  />
                </div>
              </div>
            </div>
            <button
              className='tl-btn'
              onClick={() => {
                dataSetter(data.filter((item) => item.id !== step.id));
              }}
            >
              Delete
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TimelineSwiper