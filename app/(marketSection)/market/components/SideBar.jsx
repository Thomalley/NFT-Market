'use client';

import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useState } from 'react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Logo from '../../../../public/Logo.png';
import MarketSectionActiveBidIcon from '../../../utils/MarketSectionActiveBidIcon.png';
import MarketSectionMyCollectionIcon from '../../../utils/MarketSectionMyCollectionIcon.png';
import MarketSectionWalletIcon from '../../../utils/MarketSectionWalletIcon.png';
import {
  MarketSectionCreateIcon,
  MarketSectionExploreIcon,
  MarketSectionFavouriteIcon,
  MarketSectionHistoryIcon,
  MarketSectionLogoutIcon,
  MarketSectionMarketIcon,
  MarketSectionSettingsIcon,
  MenuIcon,
} from '../../../utils/svgs.jsx';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});
export default function SideBar() {
  const [menuSelected, setMenuSelected] = useState([]);
  // const router = useRouter();

  return (
    <nav className="flex flex-row sm:flex-col mt-5 sm:mt-0 pr-3 sm:pr-0 w-full sm:w-[280px] justify-end sm:justify-between gap-y-9 bg-transparent sm:bg-text-in-bg">
      <div className='hidden sm:flex flex-col justify-between w-full h-full'>
        <div className='space-y-7 '>
          <Link href='/' prefetch={true}><Image src={Logo} alt='Page logo' className='mt-10 ml-7 pb-2' /></Link>
          <Divider className='' />
          <Button className='ml-7 bg-light text-text-in-bg w-[220px] h-[44px] font-extrabold text-sm'>Create {MarketSectionCreateIcon}</Button>
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
          <h5 className='font-AzeretMono text-white/50 text-sm ml-5'>© 2023 OpeN9 <br />
            Made By Themesflat</h5>
        </div>
      </div>
      {/* Responsive side bar */}
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly radius="full" className="bg-transparent md:hidden">
            {MenuIcon}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Multiple selection example"
          variant="flat"
          closeOnSelect={true}
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={menuSelected}
          onSelectionChange={setMenuSelected}
        >
          <DropdownItem textValue='Create'>
            <Button className='ml-7 bg-light text-text-in-bg w-[220px] h-[44px] font-extrabold text-sm'>Create {MarketSectionCreateIcon}</Button>
          </DropdownItem>
          <DropdownItem
            textValue='Market'
          // key={value.label}
          // onClick={() => router.push(value.href)}
          >
            <h4 className='flex gap-3 font-medium text-base text-main-color'>{MarketSectionMarketIcon} Market</h4>
          </DropdownItem>
          <DropdownItem
            textValue='Market'
          // key={value.label}
          // onClick={() => router.push(value.href)}
          >
            <div className='flex gap-3 font-medium text-base -ml-[0.7px]'>
              <Image src={MarketSectionActiveBidIcon} alt='Active bid icon' />
              <h4 className='flex gap-3 font-medium text-base'>Active Bid</h4>
            </div>
          </DropdownItem>
          <DropdownItem
            textValue='Market'
          // key={value.label}
          // onClick={() => router.push(value.href)}
          >
            <h4 className='flex gap-3 font-medium text-base'>{MarketSectionExploreIcon} Explore</h4>
          </DropdownItem>
          <DropdownItem
            textValue='Market'
          // key={value.label}
          // onClick={() => router.push(value.href)}
          >
            <div className='flex gap-3 font-medium text-base -ml-[0.7px]'>
              <Image src={MarketSectionMyCollectionIcon} alt='My collection icon' />
              <h4 className='flex gap-3 font-medium text-base'>My collection</h4>
            </div>
          </DropdownItem>
          <DropdownItem
            textValue='Market'
          // key={value.label}
          // onClick={() => router.push(value.href)}
          >
            <h4 className='flex gap-3 font-medium text-base'>{MarketSectionFavouriteIcon}My favourite</h4>
          </DropdownItem>
          <DropdownItem
            textValue='Market'
          // key={value.label}
          // onClick={() => router.push(value.href)}
          >
            <div className='flex gap-3 font-medium text-base -ml-[0.7px]'>
              <Image src={MarketSectionWalletIcon} alt='Wallet icon' />
              <h4 className='flex gap-3 font-medium text-base'>{ } Wallet</h4>
            </div>
          </DropdownItem>
          <DropdownItem
            textValue='Market'
          // key={value.label}
          // onClick={() => router.push(value.href)}
          >
            <h4 className='flex gap-3 font-medium text-base'>{MarketSectionHistoryIcon} History</h4>
          </DropdownItem>
          <DropdownItem
            textValue='Market'
          // key={value.label}
          // onClick={() => router.push(value.href)}
          >
            <h4 className='flex gap-3 font-medium text-base'>{MarketSectionSettingsIcon} Settings</h4>
          </DropdownItem>
          <DropdownItem
            textValue='Market'
          // key={value.label}
          // onClick={() => router.push(value.href)}
          >
            <h4 className='flex gap-3 font-medium text-base'>{MarketSectionLogoutIcon} Logout</h4>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </nav>
  );
}
