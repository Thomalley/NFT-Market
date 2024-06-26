'use client';

import { Avatar, Badge } from '@nextui-org/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  CircleCarouselArrow, CircleCarouselYellowArrow, EthIcon, YellowDropdownIcon,
} from '../../utils/svgs.jsx';
import { cardInfo } from '../../utils/data';

export default function TopSeller() {
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='w-fit absolute top-16 -right-10 cursor-pointer hidden sm:block'
        onClick={onClick}
      >
        <CircleCarouselYellowArrow />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='w-fit absolute top-16 -left-10 cursor-pointer hidden sm:block'
        onClick={onClick}
      >
        <CircleCarouselArrow />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className='max-w-[1100px] mx-auto my-14 px-2 sm:px-0 mt-20 sm:mt-0'>
      <header className='flex items-center '>
        <h1 className="text-[32px] font-extrabold mr-3">Top Sellers in</h1>
        <h1 className="text-[32px] font-extrabold mr-3 text-main-color">1 day</h1>
        {YellowDropdownIcon}
      </header>
      <div className='flex flex-col'>
        <Slider {...settings}>
          {cardInfo.map((c, index) => (
            <div key={index} className='text-center my-5'>
              <Badge content={index + 1} size="lg" className={`${[0, 1, 2].includes(index) && 'bg-main-color text-text-in-bg'} font-extrabold`}>
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
