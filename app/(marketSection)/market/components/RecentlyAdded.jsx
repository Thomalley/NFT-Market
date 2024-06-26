'use client';

import { Button, Select, SelectItem } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SortBySelectIcon } from '../../../utils/svgs.jsx';
import FeaturedItemCard from '../../../(sections)/components/FeaturedItemCard.jsx';
import useNft from '../../../hooks/useNft';
import SkeletonCard from '../../../(sections)/components/SkeletonCard.jsx';

export default function RecentlyAdded() {
  const buttonOptions = ['Category', 'Items', 'Status', 'Price Range'];
  const [isButtonSelected, setIsButtonSelected] = useState(1);
  const [sort, setSort] = useState([]);
  const options = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6'];

  const [nfts, setNfts] = useState([]);
  const { getAllNfts } = useNft({ start: 38, end: 46 });
  const getNfts = async () => {
    const response = await getAllNfts();
    if (response) setNfts(response);
  };
  useEffect(() => {
    getNfts();
  }, []);
  return (
    <div className='sm:max-w-[1100px] mb-10 pt-10 px-3 sm:px-0'>
      <header >
        <h1 className="text-[32px] font-extrabold">Recently Added</h1>
      </header>
      <div className="flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0 mt-6">
        <div className='flex flex-col sm:flex-row sm:space-x-3 gap-4 sm:gap-0'>
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
          className="w-full sm:w-64 -mr-20"
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
      <div className='hidden sm:grid grid-cols-4 mt-8 gap-x-24 gap-4'>
        {nfts.length ? (nfts.map((n, index) => (
          <Link key={n.tokenId} prefetch={true} href={`/productDetail/${n.tokenId}`}>
            <FeaturedItemCard key={index} nft={n} />
          </Link>
        ))) : (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
      </div>
      <div className='sm:hidden grid grid-cols-1 mt-8 gap-7'>
        {nfts.length ? nfts.slice(0, 2).map((n, index) => (
          <Link key={n.tokenId} prefetch={true} href={`/productDetail/${n.tokenId}`}>
            <FeaturedItemCard key={index} nft={n} />
          </Link>
        )) : (
          <>
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
      </div>
    </div >
  );
}
