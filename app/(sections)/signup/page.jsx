'use client';

import {
  Button,
  Checkbox,
  Divider,
  Input,
} from '@nextui-org/react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  AppleIcon,
  ColorfulFacebookIcon,
  ColorfulGoogleIcon,
  GoToIcon,
  HidePasswordIcon,
} from '../../utils/svgs.jsx';
import { userStore } from '../../stores/userStore';

export default function SignUp() {
  const [isVisible, setIsVisible] = useState(false);
  const register = userStore((s) => s.register);
  const router = useRouter();
  const [userRegister, setUserRegister] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleInputChange = (e) => {
    setUserRegister((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isInvalid = useMemo(() => {
    if (confirmPassword === '') return false;
    if (confirmPassword !== userRegister.password) return true;
    return false;
  }, [confirmPassword]);

  const isButtonDisabled = useMemo(() => {
    if (!userRegister.name
      || !userRegister.email
      || !userRegister.password
      || !confirmPassword
      || confirmPassword !== userRegister.password) return true;
    return false;
  }, [userRegister, confirmPassword]);

  const handleRegisterSubmit = () => {
    register(userRegister);
    router.push('/login');
  };

  return (
    <div className="flex flex-col items-center text-center min-h-[550px] mx-6">
      <header className='mt-12'>
        <h1 className="text-[40px] font-extrabold">Create Your Account</h1>
        <h5 className='font-AzeretMono text-sm text-white/55 mt-4'>{"Let's get started with your 30 days free trial"}</h5>
      </header>
      <div className='bg-[#232323] w-full sm:w-[920px] mt-10 h-full sm:h-[816px] p-8 rounded-[20px] '>
        <div className='space-y-16'>
          <Input
            isRequired
            labelPlacement="outside"
            type="text"
            label="Name"
            name='name'
            value={userRegister.name}
            onChange={handleInputChange}
            placeholder="Alexander Oliver"
            className='w-full sm:w-[860px]'
            classNames={{
              label: 'font-bold text-sm -mt-2',
              input: 'font-AzeretMono text-sm bg-text-in-bg',
              inputWrapper: 'bg-text-in-bg data-[hover=true]:bg-text-in-bg group-data-[focus-within=true]:bg-text-in-bg group-data-[focus=true]:bg-text-in-bg h-[52px] px-5',
            }}
          />
          <Input
            isRequired
            labelPlacement="outside"
            type="email"
            label="Email"
            name='email'
            value={userRegister.email}
            onChange={handleInputChange}
            placeholder="mail@website.com"
            className='w-full sm:w-[860px]'
            classNames={{
              label: 'font-bold text-sm -mt-2',
              input: 'font-AzeretMono text-sm bg-text-in-bg',
              inputWrapper: 'bg-text-in-bg data-[hover=true]:bg-text-in-bg group-data-[focus-within=true]:bg-text-in-bg group-data-[focus=true]:bg-text-in-bg h-[52px] px-5',
            }}
          />
          <Input
            isRequired
            labelPlacement="outside"
            type={isVisible ? 'text' : 'password'}
            label="Password"
            name='password'
            value={userRegister.password}
            onChange={handleInputChange}
            placeholder="Min. 8 character"
            endContent={<Button isIconOnly className='bg-transparent' onClick={toggleVisibility}>{HidePasswordIcon}</Button>}
            className='w-full sm:w-[860px]'
            classNames={{
              label: 'font-bold text-sm -mt-2',
              input: 'font-AzeretMono text-sm bg-text-in-bg ',
              inputWrapper: 'bg-text-in-bg data-[hover=true]:bg-text-in-bg group-data-[focus-within=true]:bg-text-in-bg  group-data-[focus=true]:bg-text-in-bgh-[52px] px-5',
            }}
          />
          <Input
            isRequired
            isInvalid={isInvalid}
            errorMessage={isInvalid && <h5>Passwords do not match</h5>}
            labelPlacement="outside"
            type={isVisible ? 'text' : 'password'}
            label="Confirm password"
            value={confirmPassword}
            onValueChange={setConfirmPassword}
            placeholder="Confirm Password"
            endContent={<Button isIconOnly className='bg-transparent' onClick={toggleVisibility}>{HidePasswordIcon}</Button>}
            className='w-full sm:w-[860px]'
            classNames={{
              label: 'font-bold text-sm -mt-2',
              input: 'font-AzeretMono text-sm bg-text-in-bg ',
              inputWrapper: 'bg-text-in-bg data-[hover=true]:bg-text-in-bg group-data-[focus-within=true]:bg-text-in-bg group-data-[focus=true]:bg-text-in-bg h-[52px] px-5',
            }}
          />
        </div>
        <div className='flex items-center justify-start mt-7'>
          <Checkbox />
          <h4 className='font-AzeretMono text-white/55 text-sm'>I agree to all Term, Privacy Polic and fees</h4>
        </div>
        <Button
          className='bg-main-color font-extrabold text-sm text-text-in-bg w-full sm:w-[860px] h-[50px] mt-8'
          isDisabled={isButtonDisabled}
          onClick={handleRegisterSubmit}
        >
          Sign Up {GoToIcon}
        </Button>
        <div className='flex mt-8 items-center gap-x-9 mb-9'>
          <Divider className='w-1/4 sm:w-[341px]' />
          <h5 className='font-AzeretMono text-white/50 text-sm'>or continue</h5>
          <Divider className='w-1/4 sm:w-[341px]' />
        </div>
        <Button variant='bordered' className='w-[273px] h-[50px]'>{ColorfulGoogleIcon}Sign with Google</Button>
        <Button variant='bordered' className='w-[273px] h-[50px] sm:mx-4'>{ColorfulFacebookIcon}Sign with Facebook</Button>
        <Button variant='bordered' className='w-[273px] h-[50px]'>{AppleIcon}Sign with Apple</Button>
        <div className='flex justify-center items-center sm:gap-2 mt-7'>
          <h4 className='font-AzeretMono text-white/50 text-sm tracking-wider font-light'>Already have an account?</h4>
          <Link href='/login'><h4 className='font-AzeretMono text-main-color text-sm '>Log in</h4></Link>
        </div>
      </div>
    </div>
  );
}
