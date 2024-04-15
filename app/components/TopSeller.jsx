'use client';

import { Avatar, Badge } from '@nextui-org/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { EthIcon, YellowDropdownIcon } from '../utils/svgs.jsx';
import cardInfo from '../utils/data';

export default function TopSeller() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className='max-w-[1100px] mx-auto mt-14 mb-14'>
      <header className='flex items-center '>
        <h1 className="text-[32px] font-extrabold mr-3">Top Sellers in</h1>
        <h1 className="text-[32px] font-extrabold mr-3 text-main-color">1 day</h1>
        {YellowDropdownIcon}
      </header>
      <div className='flex flex-col'>
        <Slider {...settings}>
          {cardInfo.map((c, index) => (
            <div key={index} className='text-center my-5'>
              <Badge content={index + 1} size="lg">
                <Avatar size="lg" src={c.img} className="rounded-full h-20 w-20" />
              </Badge>
              <h2 className='font-extrabold text-lg'>{c.name}</h2>
              <div className='flex flex-row items-center justify-center mt-1 opacity-30 gap-2'>
                {EthIcon}
                <h4 className='tracking-widest'>7,080.95</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div >
    </div >
  );
}
