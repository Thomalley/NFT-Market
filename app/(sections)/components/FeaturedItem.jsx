'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import {
  DiscoverMoreIcon, PaginationArrowIcon, PaginationPlusIcon, PaginationYellowPlusIcon,
} from '../../utils/svgs.jsx';
import FeaturedItemCard from './FeaturedItemCard.jsx';
import useNft from '../../hooks/useNft';
import SkeletonCard from './SkeletonCard.jsx';

export default function FeaturedItem() {
  const [nfts, setNfts] = useState([]);
  const { getAllNfts } = useNft({ start: 12, end: 18 });
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
    className: 'sm:-mr-7',
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
          display: 'flex',
          marginTop: '10px',
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
      <div className='h-5 mt-8 flex items-center'>
        {i === currentSlide ? <PaginationYellowPlusIcon /> : <PaginationPlusIcon />}
      </div>
    ),
  };

  return (
    <div className='max-w-[1090px] mx-auto px-2 sm:px-0'>
      <header className='flex justify-between'>
        <h1 className="text-[32px] font-extrabold">Featured Item</h1>
        <div className='flex items-center gap-x-2 cursor-pointer hover:gap-x-4 transform duration-500'>
          <h5 className='text-sm'>Discover More</h5>
          {DiscoverMoreIcon}
        </div>
      </header>
      <div className='flex flex-col gap-7 my-7'>
        {nfts.length ? (
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
            slidesToShow={4}
            className=''
          >
            {nfts.map((nft) => (
              <Link key={nft.tokenId} prefetch={true} href={`/productDetail/${nft.tokenId}`}>
                <FeaturedItemCard nft={nft} />
              </Link>
            ))}
          </Slider>
        ) : (
          <>
            <div className='hidden sm:flex gap-x-7'>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
            <div className='flex sm:hidden'>
              <SkeletonCard />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
