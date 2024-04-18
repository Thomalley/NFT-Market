'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Tooltip,
} from '@nextui-org/react';
import useNft from '../../../hooks/useNft';
import {
  DescriptionIcon,
  EthIcon,
  GoToIcon,
  HeartWhiteIcon,
  ItemActivityIcon,
  ShareIcon,
  ThreeDotsIcon,
  TimerIcon,
  TopTrendingIcon,
  ViewsIcon,
  YellowVerifiedIcon,
} from '../../../utils/svgs.jsx';
import { nftEthereumPriceFormatter, nftUsdPriceFormatter } from '../../../utils/functions';
import Chart from '../../../../public/Chart.png';
import Details from '../components/Details.jsx';
import Traits from '../components/Traits.jsx';
import Offers from '../components/Offers.jsx';
import ItemActivity from '../components/ItemActivity.jsx';

export default function ProductDetail({ params }) {
  const [metadata, setMetadata] = useState({});
  const { getNftDetails } = useNft({ tokenId: BigInt(params?.id) });
  const getMetadata = async () => {
    const response = await getNftDetails();
    if (response) setMetadata(response);
  };

  useEffect(() => {
    getMetadata();
  }, [params]);

  if (!metadata.tokenId) return <h1>No metadata tokenid</h1>;
  return (
    <div className="max-w-[1090px] mx-auto grid grid-cols-4 justify-center mt-10 gap-3">
      <div className='relative col-span-2 sm:h-[903px]'>
        <Image
          src={metadata?.image?.cachedUrl}
          alt='nft image'
          priority
          width={540}
          height={903}
          className='sm:h-[903px] sm:w-[540px] object-cover rounded-[20px]'
        />
        <div className='absolute flex justify-center items-center w-[158px] h-[52px] rounded-full bg-[#585858] font-extrabold text-xl bottom-3 right-48'>2h 4m 32s</div>
        <div className='absolute flex justify-center items-center w-[52px] h-[26px] rounded-full bg-[#585858] font-extrabold text-xs top-4 right-5 gap-1'>10 {HeartWhiteIcon}</div>
        <div className='absolute flex justify-center items-center size-[26px] rounded-full bg-[#585858] top-4 right-20'>{EthIcon}</div>
      </div>
      <div className='w-full col-span-2 '>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <h4 className='text-main-color font-extrabold text-sm'>{metadata?.collection?.name}</h4>
            {YellowVerifiedIcon}
          </div>
          <div className='flex gap-3'>
            {ShareIcon}
            {ThreeDotsIcon}
          </div>
        </div>
        <h2 className='font-extrabold text-[32px]'>{metadata?.raw?.metadata?.name}</h2>
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
        <Card className='shadow-none sm:w-[522px] ml-2 sm:h-[155px] rounded-[20px] mt-6 bg-[#232323]'>
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
                  {nftEthereumPriceFormatter(metadata?.contract?.openSeaMetadata?.floorPrice)} ETH
                </h1>
                <h4 className='font-AzeretMono opacity-30 text-xs font-normal tracking-wider'>${nftUsdPriceFormatter(metadata?.contract?.openSeaMetadata?.floorPrice)}</h4>
              </div>
              <Button className='bg-main-color font-extrabold text-sm text-text-in-bg h-[50px] w-[216px]'>Place A Bid {GoToIcon}</Button>
            </div>
          </CardBody>
        </Card>
        <Accordion
          variant='splitted'
          defaultExpandedKeys={['1']}
          itemClasses={{
            title: 'text-white font-extrabold text-lg',
            indicator: 'text-white',
            content: 'font-AzeretMono text-sm font-normal bg-[#232323] px-4 rounded-b-medium',
            heading: 'bg-[#232323] px-4 rounded-medium data-[open=true]:rounded-b-none',
          }}
        >
          <AccordionItem
            key='1'
            aria-label='Accordion Description'
            startContent={<DescriptionIcon />}
            title='Description'
            className='my-4 group-[.is-splitted]:px-0'
          >
            <Divider className='mb-4' />
            <Card className='shadow-none w-full sm:h-[76px] rounded-[20px] mt-6 bg-[#232323] px-2'>
              <CardBody className='-mt-3'>
                <div className='font-AzeretMono font-normal text-sm'>
                  <p className='text-white/50 truncate'>
                    {metadata?.contract?.openSeaMetadata?.description}
                  </p>
                  <span className='ml-2 text-main-color cursor-pointer'>
                    see more
                  </span>
                </div>
              </CardBody>
            </Card>
          </AccordionItem>
        </Accordion>
        <Accordion
          variant='splitted'
          defaultExpandedKeys={['1']}
          itemClasses={{
            title: 'text-white font-extrabold text-lg',
            indicator: 'text-white',
            content: 'font-AzeretMono text-sm font-normal bg-[#232323] px-4 rounded-b-medium mb-0',
            heading: 'bg-[#232323] px-4 rounded-medium data-[open=true]:rounded-b-none',
          }}
        >
          <AccordionItem
            key={'1'}
            aria-label='Accordion Chart'
            startContent={<DescriptionIcon />}
            title='Price History'
            className='mt-4 group-[.is-splitted]:px-0'
          >
            <Divider className='mb-4' />
            <Tooltip
              className='bg-[#DEE8E833]'
              content={
                <div className="px-1 py-2 flex flex-col justify-center w-52">
                  <h2 className="text-base font-bold flex gap-x-2 items-center justify-center">{EthIcon} 0,873</h2>
                  <div className="text-xs text-white/30 text-center font-AzeretMono">
                    <h5 >AVG. Price: 0,4175 ETH</h5>
                    <h5 >Num. sale: 2</h5>
                    <h5 >Apr 16 at 7:00 AM</h5>
                  </div>
                </div>
              }
            >
              <Image src={Chart} alt='graphic of the nft price history' className='w-[522px] ml-2' />
            </Tooltip>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='w-full col-span-4'>
        <Accordion
          defaultExpandedKeys={['1']}
          variant='splitted'
          itemClasses={{
            title: 'text-white font-extrabold text-lg',
            indicator: 'text-white',
            content: 'font-AzeretMono text-sm font-normal bg-[#232323] px-4 rounded-b-medium',
            heading: 'bg-[#232323] px-4 rounded-medium data-[open=true]:rounded-b-none',
          }}
        >
          <AccordionItem
            key={'1'}
            aria-label='Accordion Details'
            startContent={<DescriptionIcon />}
            title='Details'
            className='mb-2 group-[.is-splitted]:px-0'
          >
            <Divider className='mb-4' />
            <Details nft={metadata} />
          </AccordionItem>
        </Accordion>
        <Accordion
          defaultExpandedKeys={['1']}
          variant='splitted'
          itemClasses={{
            title: 'text-white font-extrabold text-lg',
            indicator: 'text-white',
            content: 'font-AzeretMono text-sm font-normal bg-[#232323] px-4 rounded-b-medium',
            heading: 'bg-[#232323] px-4 rounded-medium data-[open=true]:rounded-b-none',
          }}
        >
          <AccordionItem
            key={'1'}
            aria-label='Accordion Traits'
            startContent={<DescriptionIcon />}
            title='Traits'
            className='mb-2 group-[.is-splitted]:px-0'
          >
            <Divider className='mb-4' />
            <Traits nft={metadata} />
          </AccordionItem>
        </Accordion>
        <Accordion
          defaultExpandedKeys={['1']}
          variant='splitted'
          itemClasses={{
            title: 'text-white font-extrabold text-lg',
            indicator: 'text-white',
            content: 'font-AzeretMono text-sm font-normal bg-[#232323] px-4 rounded-b-medium',
            heading: 'bg-[#232323] px-4 rounded-medium data-[open=true]:rounded-b-none',
          }}
        >
          <AccordionItem
            key={'1'}
            aria-label='Accordion Offers'
            startContent={<DescriptionIcon />}
            title='Offers'
            className='mb-2 group-[.is-splitted]:px-0'
          >
            <Divider className='mb-4' />
            <Offers />
          </AccordionItem>
        </Accordion>
        <Accordion
          defaultExpandedKeys={['1']}
          variant='splitted'
          itemClasses={{
            title: 'text-white font-extrabold text-lg',
            indicator: 'text-white',
            content: 'font-AzeretMono text-sm font-normal bg-[#232323] px-4 rounded-b-medium',
            heading: 'bg-[#232323] px-4 rounded-medium data-[open=true]:rounded-b-none',
          }}
        >
          <AccordionItem
            key={'1'}
            aria-label='Accordion Item Activity'
            startContent={<ItemActivityIcon />}
            title='Item Activity'
            className='mb-2 group-[.is-splitted]:px-0'
          >
            <Divider className='mb-4' />
            <ItemActivity />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
