'use client';

import {
  Card,
  CardBody,
  Button,
  Divider,
} from '@nextui-org/react';
// eslint-disable-next-line camelcase
import { Azeret_Mono } from 'next/font/google';
import Image from 'next/image';
import { CollectionIcon, DiscoverMoreIcon, HeartFavouriteIcon } from '../utils/svgs.jsx';
import useAlchemy from '../../hooks/useAlchemy.jsx';

const azeretMono = Azeret_Mono({
  subsets: ['latin'],
});
export default function TopCollections() {
  const { nfts } = useAlchemy(5, 8);
  return (
    <div className='max-w-[1100px] mx-auto mt-4'>
      <header className='flex justify-between'>
        <h1 className="text-[32px] font-extrabold">Top Collections In Week</h1>
        <h5 className='flex items-center gap-2 text-sm'>Discover More {DiscoverMoreIcon}</h5>
      </header>
      <div className="flex gap-6 mt-8">
        {nfts.map((n, index) => (
          <Card key={index} className="w-[350px] h-[422px] rounded-[20px] mb-10 bg-[#232323]">
            <CardBody className="flex justify-start">
              <Image src={n.image.cachedUrl} alt="nft image" className='rounded-xl' width={800} height={800}/>
              <div className='flex items-center justify-between h-full mt-2'>
                <div className=''>
                  <h4 className="font-extrabold text-lg">{n.name}</h4>
                  <h3 className={`${azeretMono.className} opacity-30 text-xs`}>@{n.contract.openSeaMetadata.twitterUsername}</h3>
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
        ))}
      </div>
    </div>
  );
}
