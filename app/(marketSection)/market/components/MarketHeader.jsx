import { Avatar, Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import { SearchIcon, NotificationsIcon, GreyDropdownIcon } from '../../../utils/svgs.jsx';
import { userStore } from '../../../stores/userStore';

export default function MarketHeader() {
  const storedUser = userStore((s) => s.user);
  return (
    <nav className='mt-10 flex flex-col sm:flex-row justify-center sm:justify-between px-3'>
      <Input
        type="text"
        placeholder="Search artwork, collection..."
        endContent={SearchIcon}
        className='w-full sm:w-[540px] h-[52px]'
        classNames={{
          label: 'font-normal text-sm',
          input: 'font-AzeretMono text-sm bg-text-in-bg',
          inputWrapper: 'bg-text-in-bg data-[hover=true]:bg-text-in-bg h-[52px] px-5',
        }}
      />
      <div className='flex items-center justify-between mt-5 sm:mt-0 gap-3'>
        <Button isIconOnly className='bg-transparent rounded-full size-[50px]'>{NotificationsIcon}</Button>
        {storedUser.logged ? (
          <div className='flex items-center gap-3'>
            <Avatar src='https://i.pravatar.cc/140' className='size-[50px] rounded-full' />
            <h4 className='flex gap-1 items-center font-extrabold text-sm text-white'>{storedUser.name} {GreyDropdownIcon}</h4>
          </div>
        ) : (
          <Link href="/login">
            <Button className='bg-main-color text-text-in-bg font-extrabold text-sm'>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
