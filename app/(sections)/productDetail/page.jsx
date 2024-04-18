'use client';

import Image from 'next/image';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from '@nextui-org/react';
import useAlchemy from '../../hooks/useAlchemy.jsx';
import {
  DescriptionIcon,
  EthIcon,
  GoToIcon,
  GreyDropdownIcon,
  HeartWhiteIcon,
  ShareIcon,
  ThreeDotsIcon,
  TimerIcon,
  TopTrendingIcon,
  ViewsIcon,
  YellowVerifiedIcon,
} from '../../utils/svgs.jsx';
import { nftEthereumPriceFormatter, nftUsdPriceFormatter } from '../../utils/functions';
import priceHistory from '../../../public/priceHistory.png';
import Details from './components/Details.jsx';
import Traits from './components/Traits.jsx';
import Offers from './components/Offers.jsx';
import ItemActivity from './components/ItemActivity.jsx';

export default function ProductDetail() {
  const { nfts } = useAlchemy(27, 28);
  return (
    <div className="max-w-[1090px] mx-auto grid grid-cols-4 justify-center mt-10 gap-3">
      <div className='relative col-span-2'>
        <Image src={nfts[0]?.image.cachedUrl} width={540} height={903} className='h-[903px] w-[540px] object-cover rounded-[20px]' />
        <div className='absolute flex justify-center items-center w-[158px] h-[52px] rounded-full bg-[#585858] font-extrabold text-xl bottom-3 right-48'>2h 4m 32s</div>
        <div className='absolute flex justify-center items-center w-[52px] h-[26px] rounded-full bg-[#585858] font-extrabold text-xs top-4 right-5 gap-1'>10 {HeartWhiteIcon}</div>
        <div className='absolute flex justify-center items-center size-[26px] rounded-full bg-[#585858] top-4 right-20'>{EthIcon}</div>
      </div>
      <div className='w-full col-span-2 '>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <h4 className='text-main-color font-extrabold text-sm'>8SIAN Main Collection</h4>
            {YellowVerifiedIcon}
          </div>
          <div className='flex gap-3'>
            {ShareIcon}
            {ThreeDotsIcon}
          </div>
        </div>
        <h2 className='font-extrabold text-[32px]'>{nfts[0]?.raw.metadata.name}</h2>
        <div className='flex items-center gap-3'>
          <Avatar
            src='https://i.pravatar.cc/140'
            className="w-fit mt-2"
          />
          <div className='space-y-1 mt-2'>
            <h3 className='font-AzeretMono opacity-30 text-xs'>Owned by:</h3>
            <h3 className='font-AzeretMono font-normal text-xs'>Marvin McKinney</h3>
          </div>
        </div>
        <div className='flex mt-8 gap-3'>
          <div className='flex justify-center items-center gap-2 border-1 border-white/10 w-[111px] h-[39px] rounded-xl font-extrabold text-sm'>
            {ViewsIcon}208 View
          </div>
          <div className='flex justify-center items-center gap-2 border-1 border-white/10 w-[162px] h-[39px] rounded-xl font-extrabold text-sm'>
            {TopTrendingIcon}Top #2 Trending
          </div>
          <div className='flex justify-center items-center gap-2 border-1 border-white/10 w-[130px] h-[39px] rounded-xl font-extrabold text-sm'>
            {HeartWhiteIcon}Favourites
          </div>
        </div>
        <Card className='shadow-none w-[537px] h-[155px] rounded-[20px] mt-6 bg-[#232323]'>
          <CardHeader className='flex flex-col items-start p-4'>
            <div className='flex justify-center items-center gap-2 font-extrabold text-sm mb-4'>
              {TimerIcon}Sale ends May 22 at 9:39
            </div>
            <Divider />
          </CardHeader>
          <CardBody className='-mt-1'>
            <h4 className='font-AzeretMono opacity-30 text-xs font-normal tracking-wider'>current price</h4>
            <div className='flex justify-between'>
              <div className='flex items-baseline gap-2'>
                <h1 className='font-extrabold text-[32px]'>
                  {nftEthereumPriceFormatter(nfts[0]?.contract.openSeaMetadata.floorPrice)} ETH
                </h1>
                <h4 className='font-AzeretMono opacity-30 text-xs font-normal tracking-wider'>${nftUsdPriceFormatter(nfts[0]?.contract.openSeaMetadata.floorPrice)}</h4>
              </div>
              <Button className='bg-main-color font-extrabold text-sm text-text-in-bg h-[50px] w-[216px]'>Place A Bid {GoToIcon}</Button>
            </div>
          </CardBody>
        </Card>
        <Card className='shadow-none w-[537px] h-[180px] rounded-[20px] mt-6 bg-[#232323] px-2'>
          <CardHeader className='flex flex-col items-start p-4'>
            <div className='flex justify-between items-center gap-2 font-extrabold text-sm mb-3 w-full'>
              <h3 className='flex gap-2'>{DescriptionIcon}Description</h3>
              <div>
                {GreyDropdownIcon}
              </div>
            </div>
            <Divider />
          </CardHeader>
          <CardBody className='-mt-3'>
            <div className='font-AzeretMono font-normal text-sm'>
              <p className='text-white/50 truncate'>
                {nfts[0]?.contract.openSeaMetadata.description}
              </p>
              <span className='ml-2 text-main-color cursor-pointer'>
                see more
              </span>
            </div>
          </CardBody>
        </Card>
        <Image src={priceHistory} alt='graphic of the nft price history' className='mt-5' />
      </div>
      <div className='w-full col-span-4'>
        <Details nft={nfts[0]} />
        <Traits nft={nfts[0]} />
        <Offers />
        <ItemActivity />
      </div>
    </div>
  );
}
