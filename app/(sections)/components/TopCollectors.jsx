import React from 'react';
import { Image } from '@nextui-org/react';
import TopCollectorsCarousel from './TopCollectorsCarousel.jsx';

const TopCollectors = () => (
  <div className='w-full relative my-28 flex flex-col gap-y-4 px-3 sm:px-0'>
    <div className='absolute bg-[url("/Noise.png")] opacity-10 -top-20 w-full h-96' />
    <div className='hidden sm:flex absolute opacity-60 -top-10 w-full h-72 justify-center'>
      <Image
        src={'/Top-Collector.png'}
        alt='top collector bg'
      />
    </div>
    <div className='flex justify-center text-3xl font-extrabold'>
      Top Collector Buys Today
    </div>
    <TopCollectorsCarousel />
  </div>
);

export default TopCollectors;
