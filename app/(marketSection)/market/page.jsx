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
    <div className="flex flex-col sm:flex-row bg-[#111111]">
      <SideBar />
      <div className='mx-auto max-w-[360px] sm:max-w-[1500px] sm:space-x-2'>
        <header className=''>
          <MarketHeader />
        </header>
        <div className='sm:grid sm:grid-cols-6 gap-10 mt-10 rounded-[20px]'>
          <div className='sm:col-span-4 sm:space-y-10'>
            <div className='hidden sm:block -mr-20'>
              <Image src={Discover} alt='Discover image' width={900} height={211} className='w-[1080px] object-cover -mr-40' />
            </div>
            <TrendingNfts />
            <RecentlyAdded />
          </div>
          <div className='sm:col-span-2 mx-auto mt-10 sm:mt-0 sm:ml-16 space-y-7'>
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
