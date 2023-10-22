import React, { useEffect, useRef, Ref } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Keyboard, Navigation } from 'swiper/modules';
import { TimelineStepType, ThemeDataType } from './TimelineContainer';

interface TimelineSwiperProps {
  data: TimelineStepType[],
  dataSetter: React.Dispatch<React.SetStateAction<TimelineStepType[]>>
  themeData:ThemeDataType;
}

function TimelineSwiper({ data, dataSetter, themeData }: TimelineSwiperProps) {


  const handleFieldChange = (index: number, ev1: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = ev1.target;
  
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
                      className="text-slate-700 dark:text-slate-800 mt-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
                      cols={7}
                      rows={2}
                      placeholder="Enter a title..."
                      name="title"
                      title="Step title text area"
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
                  className={themeData.themeColour ? `unchecked-step ${themeData.themeColour}-theme` : 'unhecked-step'}title="Unchecked"
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
                    className="text-slate-500 dark:text-slate-600 mt-2 text-sm"
                    rows={5}
                    cols={20}
                    placeholder="Enter description..."
                    name="description"
                    title="Step description text area"
                    defaultValue={step.description}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                      handleFieldChange(index, event)
                    }
                  />
                </div>
              </div>
            </div>
            <div className='tl-delete-section'>
              <button
                className='tl-btn text-slate-700 mt-2 text-sm drop-shadow-md'
                title="Delete step button"
                onClick={() => {
                  dataSetter(data.filter((item) => item.id !== step.id));
                }}
              >
                DELETE
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TimelineSwiper