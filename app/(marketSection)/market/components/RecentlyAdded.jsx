'use client';

import { Button, Select, SelectItem } from '@nextui-org/react';
import { useState } from 'react';
import { SortBySelectIcon } from '../../../utils/svgs.jsx';
import FeaturedItemCard from '../../../(sections)/components/FeaturedItemCard.jsx';
import useAlchemy from '../../../hooks/useAlchemy.jsx';

export default function RecentlyAdded() {
  const buttonOptions = ['Category', 'Items', 'Status', 'Price Range'];
  const [isButtonSelected, setIsButtonSelected] = useState(1);
  const [sort, setSort] = useState([]);
  const options = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6'];
  const { nfts } = useAlchemy(17, 25);

  return (
    <>
      <header >
        <h1 className="text-[32px] font-extrabold">Recently Added</h1>
      </header>
      <div className="flex justify-between mt-6 -mr-20">
        <div className='space-x-2'>
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
      <div className='grid grid-cols-4 mt-8 gap-x-24 gap-4'>
        {nfts.map((n, index) => (
          <FeaturedItemCard key={index} nft={n} />
        ))}
      </div>
    </>
  );
}
