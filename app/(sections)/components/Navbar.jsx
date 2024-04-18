'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger,
} from '@nextui-org/react';
import Logo from '../../../public/Logo.png';
import {
  YellowDropdownIcon,
  GreyDropdownIcon,
  WalletIcon, MenuIcon,
} from '../../utils/svgs.jsx';

export default function Navbar() {
  const [menuSelected, setMenuSelected] = useState([]);
  const router = useRouter();
  const availableMenuPaths = [
    { label: 'Marketplace', href: '/market' },
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/' },
    { label: 'Pages', href: '/' },
    { label: 'Faqs', href: '/faqs' },
    { label: 'Login', href: '/login' },
  ];
  return (
    <nav className="flex flex-row mt-8 items-center justify-end mr-6 sm:mr-0 sm:justify-center gap-6 text-base font-medium bg-transparent">
      <div className='w-fit hidden sm:flex gap-4'>
        <Image src={Logo} alt="logo image" className="mr-14" />
        {availableMenuPaths.map((elem, index) => (
          <div key={index} className="flex items-center gap-2" onClick={() => {
            setMenuSelected(elem.label);
            router.push(elem.href);
          }}>
            <h2 className={`${menuSelected === elem.label && 'text-main-color'} font-extrabold cursor-pointer`}>{elem.label}</h2>
            {elem.label !== 'Login' && (menuSelected === elem.label ? YellowDropdownIcon : GreyDropdownIcon)}
          </div>
        ))}
        <Button isIconOnly radius='md' className='w-40 bg-[#DDF247] ml-14'>
          <span className='flex text-text-in-bg font-extrabold gap-1 text-sm'>
            Wallet Connect
            {WalletIcon}
          </span>
        </Button>
      </div>
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
          {availableMenuPaths.map((value) => (
            <DropdownItem
              key={value.label}
              textValue={value.label}
              onClick={() => router.push(value.href)}
            >
              {value.label}
            </DropdownItem>
          ))}
          <DropdownItem textValue='Connect wallet'>
            <Button isIconOnly radius='md' className='w-40 bg-main-color'>
              <span className='flex text-text-in-bg font-extrabold gap-1 text-sm'>
                Wallet Connect
                {WalletIcon}
              </span>
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </nav>
  );
}
