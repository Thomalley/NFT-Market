'use client';

import { Button, Select, SelectItem } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  PaginationArrowIcon, PaginationPlusIcon, PaginationYellowPlusIcon, SortBySelectIcon,
} from '../../../utils/svgs.jsx';
import TrendingNftsCard from './TrendingNftsCard.jsx';
import SkeletonCard from '../../../(sections)/components/SkeletonCard.jsx';
import useNft from '../../../hooks/useNft';

export default function TrendingNfts() {
  const buttonOptions = ['Category', 'Items', 'Status', 'Price Range'];
  const [isButtonSelected, setIsButtonSelected] = useState(1);
  const [sort, setSort] = useState([]);
  const options = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6'];
  const [nfts, setNfts] = useState([]);
  const { getAllNfts } = useNft({ start: 17, end: 25 });
  const getNfts = async () => {
    const response = await getAllNfts();
    if (response) setNfts(response);
  };
  useEffect(() => {
    getNfts();
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  let sliderRef = useRef(null);
  const handleNextPage = () => {
    sliderRef.slickNext();
  };
  const handlePrevPage = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: '10px',
          padding: '10px',
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'end',
        }}
      >
        <Button
          isIconOnly
          radius='full'
          className='bg-transparent -mb-16'
          onClick={handlePrevPage}
        >
          <PaginationArrowIcon />
        </Button>
        {dots}
        <Button
          isIconOnly
          radius='full'
          className='bg-transparent rotate-180 -mb-16'
          onClick={handleNextPage}
        >
          <PaginationArrowIcon />
        </Button>
      </div>
    ),
    customPaging: (i) => (
      <div className='h-5 flex items-center mt-8'>
        {i === currentSlide ? <PaginationYellowPlusIcon /> : <PaginationPlusIcon />}
      </div>
    ),
  };

  return (
    <div className='max-w-[1100px] -mr-20'>
      <header >
        <h1 className="text-[32px] font-extrabold">Trending NFTs</h1>
      </header>
      <div className="flex justify-between mt-6">
        <div className='space-x-2'>
          {buttonOptions.map((o, index) => (
            <Button
              variant="ghost"
              key={index}
              onClick={() => setIsButtonSelected(index)}
              className={
                `font-extrabold text-sm ${isButtonSelected === index ? 'bg-main-color text-text-in-bg' : ''}`
              }
            >
              {o}
            </Button>
          ))}
        </div>
        <Select
          selectionMode="single"
          placeholder="Sort By: Recently Added"
          startContent={SortBySelectIcon}
          selectedKeys={sort}
          aria-label="sort select"
          className="w-64"
          onSelectionChange={setSort}
          classNames={{
            trigger:
              'bg-black border-1 border-Beige data-[hover=true]:bg-[:#FCFBF9] data-[hover=true]:cursor-pointer',
            selectorIcon: ' h-6 w-6',
            popoverContent: 'bg-black border-1 border-white/10',
            listboxWrapper: 'bg-black',
            listbox: 'text-Charcoal font-SatoshiBold',
          }}
        >
          {options.map((value) => (
            <SelectItem key={value} value={value}>
              {value}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className='flex flex-col gap-x-24 mt-8 w-full'>
        {nfts.length ? (
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
            slidesToShow={4}
          >
            {nfts.map((n, index) => (
              <TrendingNftsCard key={index} nft={n} />
            ))}
          </Slider>
        ) : (
          <div className='flex gap-x-7'>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}
      </div>
    </div>
  );
}
