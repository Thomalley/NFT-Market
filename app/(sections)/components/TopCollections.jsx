'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  Button,
  Divider,
  Tooltip,
} from '@nextui-org/react';
import Image from 'next/image';
import { CollectionIcon, DiscoverMoreIcon, HeartFavouriteIcon } from '../../utils/svgs.jsx';
import useNft from '../../hooks/useNft';
import SkeletonCard from './SkeletonCard.jsx';

export default function TopCollections() {
  const [nfts, setNfts] = useState([]);
  const { getAllNfts } = useNft({ start: 8, end: 11 });
  const getNfts = async () => {
    const response = await getAllNfts();
    if (response) setNfts(response);
  };
  useEffect(() => {
    getNfts();
  }, []);
  return (
    <div className='max-w-[1100px] mx-auto mt-4'>
      <header className='flex flex-col sm:flex-row justify-between'>
        <h1 className="text-[32px] font-extrabold">Top Collections In Week</h1>
        <div className='flex items-center gap-x-2 hover:cursor-pointer hover:gap-x-4 transform duration-500'>
          <h5 className='text-sm mt-2 sm:mt-0'>Discover More</h5>
          {DiscoverMoreIcon}
        </div>
      </header>
      <div className="hidden sm:flex gap-6 mt-8">
        {nfts.length ? nfts.map((n, index) => (
          <Tooltip key={index} content="See more">
            <Card className="w-[350px] h-[422px] shadow-none rounded-[20px] mb-10 bg-[#232323] hover:scale-[1.01] cursor-pointer transform duration-300">
              <CardBody className="flex justify-start">
                <Image src={n.image.cachedUrl} alt="nft image" className='rounded-xl' width={800} height={800} />
                <div className='flex items-center justify-between h-full mt-2'>
                  <div className=''>
                    <h4 className="font-extrabold text-lg">{n.name}</h4>
                    <h3 className='font-AzeretMono opacity-30 text-xs'>@{n.contract.openSeaMetadata.twitterUsername}</h3>
                  </div>
                  <div className='flex gap-5 items-center'>
                    <div className=''>
                      <Button isIconOnly className='bg-transparent'>{CollectionIcon}</Button>
                      <h4 className='font-extrabold text-sm -mt-1'>12 item</h4>
                    </div>
                    <Divider orientation='vertical' className='h-12 mt-2' />
                    <div>
                      <Button isIconOnly className='bg-transparent'>{HeartFavouriteIcon}</Button>
                      <h4 className='font-extrabold text-sm -mt-1'>97 Like</h4>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Tooltip>

        )) : (
          <div className='grid grid-cols-3 w-full gap-10 justify-center items-center text-center'>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}
      </div>
      <div className="flex sm:hidden mt-8">
        {nfts.length ? (
          <Card className="w-[300px] h-[422px] rounded-[20px] mb-10 bg-[#232323] mx-auto">
            <CardBody className="flex justify-start">
              <Image src={nfts[0].image.cachedUrl} alt="nft image" className='rounded-xl' width={800} height={800} />
              <div className='flex items-center justify-between h-full mt-2'>
                <div className=''>
                  <h4 className="font-extrabold text-lg">{nfts[0].name}</h4>
                  <h3 className='font-AzeretMono opacity-30 text-xs'>@{nfts[0].contract.openSeaMetadata.twitterUsername}</h3>
                </div>
                <div className='flex gap-5 items-center'>
                  <div className=''>
                    <Button isIconOnly className='bg-transparent'>{CollectionIcon}</Button>
                    <h4 className='font-extrabold text-sm -mt-1'>12 item</h4>
                  </div>
                  <Divider orientation='vertical' className='h-12 mt-2' />
                  <div>
                    <Button isIconOnly className='bg-transparent'>{HeartFavouriteIcon}</Button>
                    <h4 className='font-extrabold text-sm -mt-1'>97 Like</h4>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ) : (
          <SkeletonCard />
        )}
      </div>
    </div>
  );
}
