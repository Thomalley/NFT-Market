import {
  Card,
  CardBody,
  Divider,
} from '@nextui-org/react';
import { EthIcon } from '../../../utils/svgs.jsx';

export default function Offers() {
  return (
    <>
      <Card className='shadow-none w-full h-[319px] rounded-[20px] mt-6 bg-[#232323] px-2'>
        <CardBody className='flex flex-col px-4 -mt-6 sm:overflow-hidden font-AzeretMono'>
          <Divider className=' bg-white/5 w-full sm:w-[1050px] flex self-center' />
          <div className='flex justify-around text-center sm:text-start h-full items-center -mb-5 font-Manrope'>
            <h2 className='font-extrabold text-sm h-9 w-full'>Price</h2>
            <h2 className='font-extrabold text-sm h-9 w-full'>USD Price</h2>
            <h2 className='hidden sm:block font-extrabold text-sm h-9 w-full'>Quantity</h2>
            <h2 className='hidden sm:block font-extrabold text-sm h-9 w-full'>Floor Diference</h2>
            <h2 className='hidden sm:block font-extrabold text-sm h-9 w-full'>Expiration</h2>
            <h2 className='font-extrabold text-sm h-9 w-full'>Form</h2>
          </div>
          <Divider className=' bg-white/5 w-full sm:w-[1050px] flex self-center' />
          <div className='flex justify-around text-center sm:text-start h-full items-center -mb-5'>
            <h2 className='flex items-center gap-1 font-normal text-sm h-9 -mt-4 w-full'>{EthIcon} 0,0034</h2>
            <h2 className='font-normal text-sm h-9 w-full'>$6,60</h2>
            <h2 className='hidden sm:block font-normal text-sm h-9 w-full'>3</h2>
            <h2 className='hidden sm:block font-normal text-sm h-9 w-full'>90% below</h2>
            <h2 className='hidden sm:block font-normal text-sm h-9 w-full'>in 26 day</h2>
            <h2 className='font-normal text-sm h-9 w-full text-main-color'>273E40</h2>
          </div>
          <Divider className=' bg-white/5 w-full sm:w-[1050px] flex self-center' />
          <div className='flex justify-around text-center sm:text-start h-full items-center -mb-5'>
            <h2 className='flex items-center gap-1 font-normal text-sm h-9 -mt-4 w-full'>{EthIcon} 0,0034</h2>
            <h2 className='font-normal text-sm h-9 w-full'>$6,13</h2>
            <h2 className='hidden sm:block font-normal text-sm h-9 w-full'>1</h2>
            <h2 className='hidden sm:block font-normal text-sm h-9 w-full'>90% below</h2>
            <h2 className='hidden sm:block font-normal text-sm h-9 w-full'>in 26 day</h2>
            <h2 className='font-normal text-sm h-9 w-full text-main-color'>273E40</h2>
          </div>
          <Divider className=' bg-white/5 w-full sm:w-[1050px] flex self-center' />
          <div className='flex justify-around text-center sm:text-start h-full items-center -mb-5'>
            <h2 className='flex items-center gap-1 font-normal text-sm h-9 -mt-4 w-full'>{EthIcon} 0,0033</h2>
            <h2 className='font-normal text-sm h-9 w-full'>$6,11</h2>
            <h2 className='hidden sm:block font-normal text-sm h-9 w-full'>3</h2>
            <h2 className='hidden sm:block font-normal text-sm h-9 w-full'>91% below</h2>
            <h2 className='hidden sm:block font-normal text-sm h-9 w-full'>in 26 day</h2>
            <h2 className='font-normal text-sm h-9 w-full text-main-color'>273E40</h2>
          </div>
          <Divider className=' bg-white/5 w-full sm:w-[1050px] flex self-center' />
          <div className='flex justify-around text-center sm:text-start h-full items-center -mb-5'>
            <h2 className='flex items-center gap-1 font-normal text-sm h-9 -mt-4 w-full'>{EthIcon} 0,0033</h2>
            <h2 className='font-normal text-sm h-9 w-full'>$6,11</h2>
            <h2 className='hidden sm:block font-normal text-sm h-9 w-full'>3</h2>
            <h2 className='hidden sm:block font-normal text-sm h-9 w-full'>91% below</h2>
            <h2 className='hidden sm:block font-normal text-sm h-9 w-full'>in 26 day</h2>
            <h2 className='font-normal text-sm h-9 w-full text-main-color'>273E40</h2>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
