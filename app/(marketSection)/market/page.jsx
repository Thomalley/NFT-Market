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
// eslint-disable-next-line camelcase
import { Poppins, Azeret_Mono } from 'next/font/google';
import Logo from '../../../public/Logo.png';
import Discover from '../../../public/Discover.png';
import {
  MarketSectionCreateIcon,
  MarketSectionExploreIcon,
  MarketSectionFavouriteIcon,
  MarketSectionHistoryIcon,
  MarketSectionLogoutIcon,
  MarketSectionMarketIcon,
  MarketSectionSettingsIcon,
} from '../../utils/svgs.jsx';
import MarketSectionActiveBidIcon from '../../utils/MarketSectionActiveBidIcon.png';
import MarketSectionMyCollectionIcon from '../../utils/MarketSectionMyCollectionIcon.png';
import MarketSectionWalletIcon from '../../utils/MarketSectionWalletIcon.png';
import useAlchemy from '../../../hooks/useAlchemy.jsx';
import cardInfo from '../../utils/data';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

const azeretMono = Azeret_Mono({
  subsets: ['latin'],
});
export default function Market() {
  const { nfts } = useAlchemy(14, 15);
  const coins = ['Bitcoin', 'Ethereum', 'Cardano', 'Solana', 'Litecoin'];
  return (
    <div className="flex bg-[#111111]">
      <nav className="flex flex-col justify-between items-start gap-y-9 h-screen w-[280px] bg-[#161616]">
        <div className='space-y-6 w-full'>
          <Image src={Logo} alt='Page logo' className='mt-10 ml-7 pb-2' />
          <Divider className='' />
          <Button className='ml-7 bg-[#DEE8E8] text-[#161616] w-[220px] h-[44px] font-extrabold text-sm'>Create {MarketSectionCreateIcon}</Button>
          <Divider className='' />
          <div className='ml-7 space-y-5'>
            <h3 className={`${poppins.className} opacity-40 text-sm font-semibold tracking-wider`}>Marketplace</h3>
            <h4 className='flex gap-3 font-medium text-base text-main-color'>{MarketSectionMarketIcon} Market</h4>
            <div className='flex gap-3 font-medium text-base -ml-[0.7px]'>
              <Image src={MarketSectionActiveBidIcon} alt='Active bid icon' />
              <h4 className='flex gap-3 font-medium text-base'>Active Bid</h4>
            </div>
            <h4 className='flex gap-3 font-medium text-base'>{MarketSectionExploreIcon} Explore</h4>
          </div>
          <div className='ml-7 space-y-5'>
            <h3 className={`${poppins.className} opacity-40 text-sm font-semibold tracking-wider`}>Account</h3>
            <div className='flex gap-3 font-medium text-base -ml-[0.7px]'>
              <Image src={MarketSectionMyCollectionIcon} alt='My collection icon' />
              <h4 className='flex gap-3 font-medium text-base'>My collection</h4>
            </div>
            <h4 className='flex gap-3 font-medium text-base'>{MarketSectionFavouriteIcon}My favourite</h4>
            <div className='flex gap-3 font-medium text-base -ml-[0.7px]'>
              <Image src={MarketSectionWalletIcon} alt='Wallet icon' />
              <h4 className='flex gap-3 font-medium text-base'>{ } Wallet</h4>
            </div>
            <h4 className='flex gap-3 font-medium text-base'>{MarketSectionHistoryIcon} History</h4>
            <h4 className='flex gap-3 font-medium text-base'>{MarketSectionSettingsIcon} Settings</h4>
            <h4 className='flex gap-3 font-medium text-base'>{MarketSectionLogoutIcon} Logout</h4>
          </div>
        </div>
        <div className='space-y-5 w-full mb-10'>
          <Divider />
          <h5 className={`${azeretMono.className} text-white/50 text-sm ml-5`}>© 2023 OpeN9 <br />
            Made By Themesflat</h5>
        </div>
      </nav>
      <div className='mx-auto max-w-[1500px] space-x-2'>
        <header>
          {/* acá debería ir la search, las noti y el name del user */}
        </header>
        <div className='grid grid-cols-6 gap-10 mt-10 rounded-[20px]'>
          <div className='col-span-4'>
            <Image src={Discover} alt='Discover image' />
          </div>
          <div className='w-fit col-span-2 mx-auto ml-16 space-y-7'>
            {/* Recently Added card */}
            <Card className='w-[400px] h-[600px] bg-[#232323] p-3'>
              <CardHeader>
                <h2 className='font-extrabold text-[22px]'>Recently added</h2>
              </CardHeader>
              <CardBody>
                <div>
                  <Image src={nfts[0]?.image?.cachedUrl} alt='nft image' width={360} height={200} className='w-[360px] h-[200px] object-cover rounded-t-[14px]' />
                  <div className='flex justify-between items-center bg-[#111111] w-full h-[50px] px-4 rounded-b-[14px]'>
                    <h3 className='text-white font-bold text-base'>Photography</h3>
                    <h3 className='text-white/50 text-sm'>16hr ago</h3>
                  </div>
                </div>
                <div className='space-y-3 mt-5'>
                  <div className='flex items-center gap-3'>
                    <Avatar
                      radius="md"
                      size='lg'
                      src='https://i.pravatar.cc/150'
                      className="w-fit mt-2"
                    />
                    <div className='flex justify-between items-center w-4/5'>
                      <div className='space-y-1 mt-2'>
                        <h3 className='text-lg font-extrabold'>Propw</h3>
                        <h3 className={`${azeretMono.className} font-normal text-sm text-white/50`}>@themes</h3>
                      </div>
                      <h3 className='text-white/50 text-sm'>Mon, 08 May</h3>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Avatar
                      radius="md"
                      size='lg'
                      src='https://i.pravatar.cc/140'
                      className="w-fit mt-2"
                    />
                    <div className='flex justify-between items-center w-4/5'>
                      <div className='space-y-1 mt-2'>
                        <h3 className='text-lg font-extrabold'>Propw</h3>
                        <h3 className={`${azeretMono.className} font-normal text-sm text-white/50`}>@themes</h3>
                      </div>
                      <h3 className='text-white/50 text-sm'>Mon, 08 May</h3>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Avatar
                      radius="md"
                      size='lg'
                      src='https://i.pravatar.cc/130'
                      className="w-fit mt-2"
                    />
                    <div className='flex justify-between items-center w-4/5'>
                      <div className='space-y-1 mt-2'>
                        <h3 className='text-lg font-extrabold'>Propw</h3>
                        <h3 className={`${azeretMono.className} font-normal text-sm text-white/50`}>@themes</h3>
                      </div>
                      <h3 className='text-white/50 text-sm'>Mon, 08 May</h3>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            {/* Top Creators card */}
            <Card className='w-[400px] h-[480px] bg-[#232323] p-3'>
              <CardHeader className='flex justify-between'>
                <h2 className='font-extrabold text-[22px]'>Top Creators</h2>
                <h4 className='text-sm font-medium'>See all</h4>
              </CardHeader>
              <CardBody className='mt-1'>
                <ol className='space-y-3'>
                  {cardInfo.slice(0, 5).map((c, index) => (
                    <li key={index} className='flex justify-between items-center gap-4'>
                      <div className='flex items-center gap-3'>
                        <h2 className='font-extrabold text-lg'>{index + 1}.</h2>
                        <Avatar
                          radius="full"
                          size='lg'
                          src={c.img}
                          className="w-fit mt-2"
                        />
                        <div className='space-y-1'>
                          <h3 className='text-base font-extrabold'>{c.name}</h3>
                          <h3 className={`${azeretMono.className} font-normal text-sm text-white/50`}>@themes</h3>
                        </div>
                      </div>
                      <Button className='w-[100px] h-[44px] rounded-xl font-extrabold text-sm'>Follow</Button>
                    </li>
                  ))}
                </ol>
              </CardBody>
            </Card>
            <Card className='w-[400px] h-[345px] bg-[#232323] p-3'>
              <CardHeader>
                <h2 className='font-extrabold text-[22px]'>Trending coins</h2>
              </CardHeader>
              <CardBody className='space-y-4 mt-1'>
                {coins.map((c, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <div className='size-[34px] bg-[#2E2E2E] rounded-full'></div>
                    <h3 className={`${azeretMono.className} font-light text-sm text-white/50`}>{c}</h3>
                  </div>
                ))}
              </CardBody>
            </Card>
            <Card className='w-[400px] h-[345px] bg-[#232323] p-3'>
              <CardHeader className='flex justify-between'>
                <h2 className='font-extrabold text-[22px]'>History</h2>
                <h4 className='text-sm font-medium'>See all</h4>
              </CardHeader>
              <CardBody>
                <div className='space-y-3 mt-5'>
                  <div className='flex items-center gap-3'>
                    <div className='size-[60px] bg-[#2E2E2E] rounded-full'></div>
                    <div className='flex justify-between items-center w-4/5'>
                      <div className='space-y-1 mt-2'>
                        <h3 className='text-lg font-extrabold'>Propw</h3>
                        <h3 className={`${azeretMono.className} font-normal text-sm text-white/50`}>@themes</h3>
                      </div>
                      <h3 className='text-white/50 text-sm'>Just now</h3>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='size-[60px] bg-[#2E2E2E] rounded-full'></div>
                    <div className='flex justify-between items-center w-4/5'>
                      <div className='space-y-1 mt-2'>
                        <h3 className='text-lg font-extrabold'>Propw</h3>
                        <h3 className={`${azeretMono.className} font-normal text-sm text-white/50`}>@themes</h3>
                      </div>
                      <h3 className='text-white/50 text-sm'>Mon, 08 May</h3>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='size-[60px] bg-[#2E2E2E] rounded-full'></div>
                    <div className='flex justify-between items-center w-4/5'>
                      <div className='space-y-1 mt-2'>
                        <h3 className='text-lg font-extrabold'>Propw</h3>
                        <h3 className={`${azeretMono.className} font-normal text-sm text-white/50`}>@themes</h3>
                      </div>
                      <h3 className='text-white/50 text-sm'>Mon, 08 May</h3>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
