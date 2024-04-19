'use client';

import { useState, useEffect } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import {
  CategoryIcon,
  DiscoverMoreIcon,
  ItemsIcon,
  StatusIcon,
  PriceRangeIcon,
} from '../../utils/svgs.jsx';
import FeaturedItemCard from './FeaturedItemCard.jsx';
import useNft from '../../hooks/useNft';
import SkeletonCard from './SkeletonCard.jsx';

export default function DiscoverItem() {
  const [sort, setSort] = useState([]);
  const options = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6'];
  const [nfts, setNfts] = useState([]);
  const { getAllNfts } = useNft({ start: 19, end: 27 });
  const getNfts = async () => {
    const response = await getAllNfts();
    if (response) setNfts(response);
  };
  useEffect(() => {
    getNfts();
  }, []);
  return (
    <div className='max-w-[1100px] mx-auto mb-10 px-2 sm:px-0'>
      <header className='flex justify-between'>
        <h1 className="text-[32px] font-extrabold">Discover Item</h1>
        <div className='flex items-center gap-x-2 cursor-pointer hover:gap-x-4 transform duration-500'>
          <h5 className='text-sm'>Discover More</h5>
          {DiscoverMoreIcon}
        </div>
      </header>
      <div className='flex flex-col sm:flex-row gap-5 mt-5'>
        <Select
          selectionMode="single"
          placeholder="Category"
          startContent={CategoryIcon}
          selectedKeys={sort}
          aria-label="sort select"
          className="w-full sm:w-48"
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
        <Select
          selectionMode="single"
          placeholder="Items"
          startContent={ItemsIcon}
          selectedKeys={sort}
          aria-label="sort select"
          className="w-full sm:w-48"
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
        <Select
          selectionMode="single"
          placeholder="Status"
          startContent={StatusIcon}
          selectedKeys={sort}
          aria-label="sort select"
          className="w-full sm:w-48"
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
        <Select
          selectionMode="single"
          placeholder="Prince Range"
          startContent={PriceRangeIcon}
          selectedKeys={sort}
          aria-label="sort select"
          className="w-full sm:w-48"
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
        <Select
          selectionMode="single"
          placeholder="Sort By: Recently Added"
          startContent={PriceRangeIcon}
          selectedKeys={sort}
          aria-label="sort select"
          className="w-full sm:w-64"
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
      <div className='hidden sm:grid sm:grid-cols-4 mt-8 gap-7'>
        {nfts.length ? nfts.map((n, index) => (
          <FeaturedItemCard key={index} nft={n} />
        )) : (
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
          <FeaturedItemCard key={index} nft={n} />
        )) : (
          <>
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
      </div>
    </div>
  );
}
