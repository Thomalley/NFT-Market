'use client';

import { Button, Divider } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GoToIcon, SimpleArrow } from '../../utils/svgs.jsx';
import useNft from '../../hooks/useNft';
import WorldOfTopCard from './WOTCard.jsx';
import Butterfly from '../../../public/Butterfly.png';
import LittleBall from '../../../public/LittleBall.png';
import LittleSparkle from '../../../public/LittleSparkle.png';
import Sparkle from '../../../public/Sparkle.png';
import SkeletonCard from './SkeletonCard.jsx';

export default function WorldOfTopWorks() {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [nfts, setNfts] = useState([]);
  const { getAllNfts } = useNft({ start: 0, end: 7 });
  const getNfts = async () => {
    const response = await getAllNfts();
    if (response) setNfts(response);
  };
  useEffect(() => {
    getNfts();
  }, []);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 7,
      );
      return updatedIndexes;
    });
  };

  const handlePrevious = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex - 1 + 7) % 7,
      );
      return updatedIndexes;
    });
  };

  const handleSelectPage = (selectedIndex) => {
    setPositionIndexes((prevIndexes) => {
      const offset = (selectedIndex - prevIndexes[0] + 7) % 7;
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + offset) % 7,
      );
      return updatedIndexes;
    });
  };

  return (
    <div className="bg-[url('/Bg.png')] flex flex-col items-center h-fit bg-center -mt-20 shadow-none">
      <header className='relative text-center mt-40'>
        <div className='absolute top-32 left-20 sm:top-44 2xl:-left-40'>
          <Image src={LittleBall} alt='Litle ball image' />
        </div>
        <div className='absolute top-0 sm:top-44 2xl:top-20 2xl:-left-32'>
          <Image src={Butterfly} alt='butterfly image' />
        </div>
        <div className='absolute top-60 2xl:left-0'>
          <Image src={LittleBall} alt='Litle ball image' />
        </div>
        <h1 className="font-extrabold text-[54px] text-white">World Of Top Works</h1>
        <span className='font-AzeretMono mt-5 text-white/55'>
          Welcome to the world of rare digital art. Explore the best art from <br />
          hand-picked digital artist out there and find the hidden gem.
        </span>
        <div className='absolute top-36 sm:top-56 right-20'>
          <Image src={LittleBall} alt='Litle ball image' />
        </div>
        <div className='absolute top-44 right-0 2xl:-right-40'>
          <Image src={Sparkle} alt='Sparkle image' />
        </div>
        <div className='hidden sm:absolute top-0 -right-56'>
          <Image src={LittleSparkle} alt='Little Sparkle image' />
        </div>
      </header>
      <div className='mt-9 space-x-8'>
        <Button isIconOnly radius='md' size="md" className='w-40 bg-main-color'>
          <span className='flex text-text-in-bg font-extrabold gap-1 text-sm'>
            Discover More
            {GoToIcon}
          </span>
        </Button>
        <Button isIconOnly radius='md' size="md" className='bg-[#ffffff] w-40'>
          <span className='flex text-text-in-bg font-extrabold gap-1 text-sm'>
            All Collections
            {GoToIcon}
          </span>
        </Button>
      </div>
      {/* carousel */}
      <div className='relative flex justify-center items-center overflow-y-hidden w-[90%] h-96 2xl:w-4/6 2xl:h-120'>
        {nfts.length ? (nfts.map((nft, index) => (
          <section
            key={nft.tokenId}
          >
            <WorldOfTopCard
              nft={nft}
              positionIndexes={positionIndexes}
              index={index}
              xVariant={['-45%', '-72%', '-95%', '95%', '70%', '40%']}
              containerClassName='hidden lg:block'
              motionDivWidth='30%'
              leftPosition='35%'
              topPosition={0}
            />
            <WorldOfTopCard
              nft={nft}
              positionIndexes={positionIndexes}
              index={index}
              xVariant={['-72%', '-72%', '-95%', '90%', '70%', '70%']}
              containerClassName='hidden sm:block lg:hidden'
              motionDivWidth='30%'
              leftPosition='35%'
              topPosition='2%'
            />
            <WorldOfTopCard
              nft={nft}
              positionIndexes={positionIndexes}
              index={index}
              xVariant={['0%', '0%', '0%', '0%', '0%', '0%']}
              containerClassName='block sm:hidden'
              motionDivWidth='50%'
              leftPosition='25%'
              topPosition='15%'
            />
          </section>
        ))) : (
          <SkeletonCard />
        )}
        <Button
          isIconOnly
          radius='full'
          className='absolute left-0 bottom-40 bg-white bg-opacity-10 rotate-180'
          onClick={handlePrevious}>
          {SimpleArrow}
        </Button>
        <Button
          isIconOnly
          radius='full'
          className='absolute right-0 bottom-40 bg-white bg-opacity-10'
          onClick={handleNext}>
          {SimpleArrow}
        </Button>
      </div>
      {/* carousel pagination */}
      <div className='flex flex-row gap-x-3 items-center'>
        <h5
          id='0'
          onClick={(e) => handleSelectPage(e.target.id)}
          className={`${positionIndexes[0] === 0 && 'text-main-color'} cursor-pointer`}
        >
          1
        </h5>
        {positionIndexes[0] === 0 && <Divider className='w-8 bg-main-color' />}
        <h5
          id='1'
          onClick={(e) => handleSelectPage(e.target.id)}
          className={`${positionIndexes[0] === 1 && 'text-main-color'} cursor-pointer`}
        >
          2
        </h5>
        {positionIndexes[0] === 1 && <Divider className='w-8 bg-main-color' />}
        <h5
          id='2'
          onClick={(e) => handleSelectPage(e.target.id)}
          className={`${positionIndexes[0] === 2 && 'text-main-color'} cursor-pointer`}
        >
          3
        </h5>
        {positionIndexes[0] === 2 && <Divider className='w-8 bg-main-color' />}
        <h5
          id='3'
          onClick={(e) => handleSelectPage(e.target.id)}
          className={`${positionIndexes[0] === 3 && 'text-main-color'} cursor-pointer`}
        >
          4
        </h5>
        {positionIndexes[0] === 3 && <Divider className='w-8 bg-main-color' />}
        <h5
          id='4'
          onClick={(e) => handleSelectPage(e.target.id)}
          className={`${positionIndexes[0] === 4 && 'text-main-color'} cursor-pointer`}
        >
          5
        </h5>
        {positionIndexes[0] === 4 && <Divider className='w-8 bg-main-color' />}
        <h5
          id='5'
          onClick={(e) => handleSelectPage(e.target.id)}
          className={`${positionIndexes[0] === 5 && 'text-main-color'} cursor-pointer`}
        >
          6
        </h5>
        {positionIndexes[0] === 5 && <Divider className='w-8 bg-main-color' />}
        <h5
          id='6'
          onClick={(e) => handleSelectPage(e.target.id)}
          className={`${positionIndexes[0] === 6 && 'text-main-color'} cursor-pointer`}
        >
          7
        </h5>
      </div>
    </div>
  );
}
