'use client';

import Image from 'next/image';
import { Divider } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/Logo.png';
import {
  DiscordIcon,
  FacebookIcon,
  TikTokIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../../utils/svgs.jsx';

export default function Footer() {
  const pathName = usePathname();
  return (
    <div className={`${['/signup', '/login', '/faqs', '/productDetail'].includes(pathName) ? 'bg-[#111111]' : ''} h-fit`}>
      <div className='max-w-[1100px] mx-auto mt-14 py-10'>
        <div className='flex flex-col sm:flex-row sm:gap-12 ml-8 sm:ml-0'>
          <Image src={Logo} alt='logo image' className='mr-14 h-fit' />
          <div className='flex flex-col'>
            <h1 className='font-extrabold text-lg'>Marketplace</h1>
            <div className='hidden sm:block font-AzeretMono text-white/55 font-normal text-sm tracking-wider space-y-1 mt-4'>
              <h3>All NFTs</h3>
              <h3>Virtual worlds</h3>
              <h3>Domain names</h3>
              <h3>Photography</h3>
              <h3>Digital art</h3>
              <h3>Music</h3>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-extrabold text-lg'>Resource</h1>
            <div className='hidden sm:block font-AzeretMono text-white/55 font-normal text-sm tracking-wider space-y-1 mt-4'>
              <h3>Help center</h3>
              <h3>Platform status</h3>
              <h3>Partners</h3>
              <h3>Discount community</h3>
              <h3>Live auctions</h3>
              <h3>Discover</h3>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-extrabold text-lg'>Account</h1>
            <div className='hidden sm:block font-AzeretMono text-white/55 font-normal text-sm tracking-wider space-y-1 mt-4'>
              <h3>Authors</h3>
              <h3>My Collection</h3>
              <h3>Author Profile</h3>
              <h3>Go to dashboard</h3>
              <h3>Collection</h3>
              <h3>Create Collection</h3>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-extrabold text-lg'>Company</h1>
            <div className='hidden sm:block font-AzeretMono text-white/55 font-normal text-sm tracking-wider space-y-1 mt-4'>
              <h3>Help center</h3>
              <h3>Platform status</h3>
            </div>
            <h1 className='font-extrabold text-lg sm:mt-7'>Join the community</h1>
            <div className='flex flex-row gap-3 mt-4'>
              {FacebookIcon}
              {TwitterIcon}
              {DiscordIcon}
              {TikTokIcon}
              {YoutubeIcon}
            </div>
          </div>
        </div>
        <Divider className='mt-14 mb-6' />
        <div className='flex flex-col sm:flex-row justify-between font-AzeretMono'>
          <h4 className='text-white/55 font-normal text-sm'>© 2023 OpeN9 - Made By Themesflat</h4>
          <div className='flex flex-col sm:flex-row gap-6'>
            <h4 className='text-white/55 font-normal text-sm'>Privacy Policy</h4>
            <h4 className='text-white/55 font-normal text-sm'>Terms of Service</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
