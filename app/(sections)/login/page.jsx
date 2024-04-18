'use client';

import { useRouter } from 'next/navigation';
import { Button, Divider, Input } from '@nextui-org/react';
import { useState } from 'react';
import {
  AppleIcon,
  ColorfulFacebookIcon,
  ColorfulGoogleIcon,
  GoToIcon,
  HidePasswordIcon,
} from '../../utils/svgs.jsx';

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="flex flex-col items-center text-center min-h-[550px] mx-6">
      <header className='mt-12'>
        <h1 className="text-[40px] font-extrabold">Login</h1>
        <h5 className={'font-AzeretMono text-sm text-white/55 mt-4'}>Get started today by entering just a few details</h5>
      </header>
      <div className='bg-[#232323] w-full sm:w-[920px] mt-10 h-full sm:h-[568px] p-8 rounded-[20px] '>
        <div className='space-y-16'>
          <Input
            labelPlacement="outside"
            type="email"
            label="Email*"
            placeholder="mail@website.com"
            className='w-full sm:w-[860px]'
            classNames={{
              label: 'font-bold text-sm -mt-2',
              input: 'font-AzeretMono text-sm bg-text-in-bg',
              inputWrapper: 'bg-text-in-bg data-[hover=true]:bg-text-in-bg h-[52px] px-5',
            }}
          />
          <Input
            labelPlacement="outside"
            type={isVisible ? 'text' : 'password'}
            label="Password*"
            placeholder="Min. 8 character"
            endContent={<Button isIconOnly className='bg-transparent' onClick={toggleVisibility}>{HidePasswordIcon}</Button>}
            className='w-full sm:w-[860px]'
            classNames={{
              label: 'font-bold text-sm -mt-2',
              input: 'font-AzeretMono text-sm bg-text-in-bg ',
              inputWrapper: 'bg-text-in-bg data-[hover=true]:bg-text-in-bg h-[52px] px-5',
            }}
          />
        </div>
        <div className='flex sm:flex-col gap-6 items-center justify-between'>
          <Button className='bg-main-color font-extrabold text-sm text-text-in-bg w-full sm:w-[860px] sm:h-[50px] mt-8'>Login {GoToIcon}</Button>
          <h4 className={'font-AzeretMono mt-5 flex justify-end text-white/55 text-xs sm:text-sm'}>Forgot password</h4>
        </div>
        <div className='flex mt-8 items-center gap-x-9 mb-9'>
          <Divider className='w-1/4 sm:w-[341px]' />
          <h5 className={'font-AzeretMono text-white/50 text-sm'}>or continue</h5>
          <Divider className='w-1/4 sm:w-[341px]' />
        </div>
        <Button variant='bordered' className='w-[273px] h-[50px]'>{ColorfulGoogleIcon}Sign with Google</Button>
        <Button variant='bordered' className='w-[273px] h-[50px] sm:mx-4'>{ColorfulFacebookIcon}Sign with Facebook</Button>
        <Button variant='bordered' className='w-[273px] h-[50px]'>{AppleIcon}Sign with Apple</Button>
        <div className='flex justify-center items-center gap-2 mt-7'>
          <h4 className={'font-AzeretMono text-white/50 text-sm tracking-wider font-light'}>{"Don't have an account?"}</h4>
          <h4 className={'font-AzeretMono text-main-color text-sm '} onClick={() => router.push('/signup')}>Sign up</h4>
        </div>
      </div>
    </div>
  );
}
