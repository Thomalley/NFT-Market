import Image from 'next/image';
import { Button } from '@nextui-org/react';
import Logo from '../../public/Logo.png';
import {
  YellowDropdownIcon,
  GreyDropdownIcon,
  WalletIcon, MenuIcon,
} from '../utils/svgs.jsx';

export default function Navbar() {
  return (
    <nav className="flex flex-row mt-8 items-center justify-center gap-6 text-base font-medium bg-transparent">
      <Image src={Logo} alt="logo image" className="mr-14" />
      <div className="flex items-center gap-2">
        <h2 className="font-extrabold text-[#E2FE26] cursor-pointer">Home</h2>
        {YellowDropdownIcon}
      </div>
      <h2 className="cursor-pointer">About us</h2>
      <div className="flex items-center gap-2">
        <h2 className="cursor-pointer">Explore</h2>
        {GreyDropdownIcon}
      </div>
      <div className="flex items-center gap-2">
        <h2 className="cursor-pointer">Pages</h2>
        {GreyDropdownIcon}
      </div>
      <div className="flex items-center gap-2">
        <h2 className="cursor-pointer">Blog</h2>
        {GreyDropdownIcon}
      </div>
      <h2 className="cursor-pointer">Contact</h2>
      <Button isIconOnly radius='md' className='w-40 bg-[#DDF247] ml-14'>
        <span className='flex text-[#161616] font-extrabold gap-1 text-sm'>
          Wallet Connect
          {WalletIcon}
        </span>
      </Button>
      {MenuIcon}
    </nav>
  );
}
