'use client';

import { useState } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import {
  CategoryIcon,
  DiscoverMoreIcon,
  ItemsIcon,
  StatusIcon,
  PriceRangeIcon,
} from '../utils/svgs.jsx';
import FeaturedItemCard from './FeaturedItemCard.jsx';
import useAlchemy from '../../hooks/useAlchemy.jsx';

export default function DiscoverItem() {
  const [sort, setSort] = useState([]);
  const options = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6'];
  const { nfts } = useAlchemy(9, 17);
  return (
    <div className='max-w-[1100px] mx-auto'>
      <header className='flex justify-between'>
        <h1 className="text-[32px] font-extrabold">Discover Item</h1>
        <h5 className='flex items-center gap-2 text-sm'>Discover More {DiscoverMoreIcon}</h5>
      </header>
      <div className='flex gap-5 mt-5'>
        <Select
          selectionMode="single"
          placeholder="Category"
          startContent={CategoryIcon}
          selectedKeys={sort}
          aria-label="sort select"
          className="w-48"
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
          className="w-48"
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
          className="w-48"
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
          className="w-48"
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
          className="w-64"
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
      <div className='grid grid-cols-4 mt-8 gap-7'>
        {nfts.map((n, index) => (
          <FeaturedItemCard key={index} data={n} />
        ))}
      </div>
    </div>
  );
}
