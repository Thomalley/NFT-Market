'use client';

import Image from 'next/image';
import SideBar from './components/SideBar.jsx';
import ReacentlyAddedCard from './components/RecentlyAddedCard.jsx';
import TopCreatorsCard from './components/TopCreatorsCard.jsx';
import Discover from '../../../public/Discover.png';
import TrendringCoinsCard from './components/TrendingCoinsCard.jsx';
import HistoryCard from './components/HistoryCard.jsx';
import TrendingNfts from './components/TrendingNfts.jsx';
import RecentlyAdded from './components/RecentlyAdded.jsx';
import MarketHeader from './components/MarketHeader.jsx';

export default function Market() {
  return (
    <div className="flex bg-[#111111]">
      <SideBar />
      <div className='mx-auto max-w-[1500px] space-x-2'>
        <header>
          <MarketHeader />
        </header>
        <div className='grid grid-cols-6 gap-10 mt-10 rounded-[20px]'>
          <div className='col-span-4 space-y-10'>
            <div className='-mr-20'>
              <Image src={Discover} alt='Discover image' width={900} height={211} className='w-[1080px] object-cover -mr-40' />
            </div>
            <TrendingNfts />
            <RecentlyAdded />
          </div>
          <div className='w-fit col-span-2 mx-auto ml-16 space-y-7'>
            <ReacentlyAddedCard />
            <TopCreatorsCard />
            <TrendringCoinsCard />
            <HistoryCard />
          </div>
        </div>
      </div>
    </div>
  );
}
