import React from 'react';
import { TopCollectorsInfo1, TopCollectorsInfo2 } from '../../utils/data';

const TopCollectorsCarousel = () => {
  const carouselInfo = [...TopCollectorsInfo1, ...TopCollectorsInfo1, ...TopCollectorsInfo1];
  const carouselInfo2 = [...TopCollectorsInfo2, ...TopCollectorsInfo2, ...TopCollectorsInfo2];
  return (
    <div className='w-full'>
      <div className="overflow-hidden w-full flex flex-col justify-between h-40">
        <div className="flex whitespace-nowrap animate-scroll gap-x-4">
          {carouselInfo.map((e, i) => (
            <div key={i} className='bg-[#FFFFFF1A] w-fit h-16 rounded-full pl-2 pr-4 flex justify-center items-center gap-x-4'>
              <div className='h-12 w-12 rounded-full bg-[#636363]'></div>
              <h3>{e}</h3>
            </div>
          ))}
        </div>
        <div className="flex whitespace-nowrap animate-scroll-reverse gap-x-4">
          {carouselInfo2.map((e, i) => (
            <div key={i} className='bg-[#FFFFFF1A] w-fit h-16 rounded-full pl-2 pr-4 flex justify-center items-center gap-x-4'>
              <div className='h-12 w-12 rounded-full bg-[#636363]'></div>
              <h3>{e}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCollectorsCarousel;
