import {
  Card,
  CardBody,
  CardHeader,
  Divider,
} from '@nextui-org/react';
import { DescriptionIcon, EthIcon, GreyDropdownIcon } from '../../../utils/svgs.jsx';

export default function Offers() {
  return (
    <div>
      <Card className='shadow-none w-[1100px] h-[319px] rounded-[20px] mt-6 bg-[#232323] px-2'>
        <CardHeader className='flex flex-col items-start p-4'>
          <div className='flex justify-between items-center gap-2 font-extrabold text-sm mb-4 w-full'>
            <h3 className='flex gap-2'>{DescriptionIcon}Offers</h3>
            <div>
              {GreyDropdownIcon}
            </div>
          </div>
        </CardHeader>
        <CardBody className='flex flex-col px-4 -mt-6 overflow-hidden font-AzeretMono'>
          <Divider className=' bg-white/5 w-full sm:w-[1050px] flex self-center' />
          <div className='flex justify-around text-start h-full items-center -mb-5 font-Manrope'>
            <h2 className='font-extrabold text-sm h-9 w-full'>Price</h2>
            <h2 className='font-extrabold text-sm h-9 w-full'>USD Price</h2>
            <h2 className='font-extrabold text-sm h-9 w-full'>Quantity</h2>
            <h2 className='font-extrabold text-sm h-9 w-full'>Floor Diference</h2>
            <h2 className='font-extrabold text-sm h-9 w-full'>Expiration</h2>
            <h2 className='font-extrabold text-sm h-9 w-full'>Form</h2>
          </div>
          <Divider className=' bg-white/5 w-full sm:w-[1050px] flex self-center' />
          <div className='flex justify-around text-start h-full items-center -mb-5'>
            <h2 className='flex items-center gap-1 font-normal text-sm h-9 -mt-4 w-full'>{EthIcon} 0,0034</h2>
            <h2 className='font-normal text-sm h-9 w-full'>$6,60</h2>
            <h2 className='font-normal text-sm h-9 w-full'>3</h2>
            <h2 className='font-normal text-sm h-9 w-full'>90% below</h2>
            <h2 className='font-normal text-sm h-9 w-full'>in 26 day</h2>
            <h2 className='font-normal text-sm h-9 w-full text-main-color'>273E40</h2>
          </div>
          <Divider className=' bg-white/5 w-full sm:w-[1050px] flex self-center' />
          <div className='flex justify-around text-start h-full items-center -mb-5'>
            <h2 className='flex items-center gap-1 font-normal text-sm h-9 -mt-4 w-full'>{EthIcon} 0,0034</h2>
            <h2 className='font-normal text-sm h-9 w-full'>$6,13</h2>
            <h2 className='font-normal text-sm h-9 w-full'>1</h2>
            <h2 className='font-normal text-sm h-9 w-full'>90% below</h2>
            <h2 className='font-normal text-sm h-9 w-full'>in 26 day</h2>
            <h2 className='font-normal text-sm h-9 w-full text-main-color'>273E40</h2>
          </div>
          <Divider className=' bg-white/5 w-full sm:w-[1050px] flex self-center' />
          <div className='flex justify-around text-start h-full items-center -mb-5'>
            <h2 className='flex items-center gap-1 font-normal text-sm h-9 -mt-4 w-full'>{EthIcon} 0,0033</h2>
            <h2 className='font-normal text-sm h-9 w-full'>$6,11</h2>
            <h2 className='font-normal text-sm h-9 w-full'>3</h2>
            <h2 className='font-normal text-sm h-9 w-full'>91% below</h2>
            <h2 className='font-normal text-sm h-9 w-full'>in 26 day</h2>
            <h2 className='font-normal text-sm h-9 w-full text-main-color'>273E40</h2>
          </div>
          <Divider className=' bg-white/5 w-full sm:w-[1050px] flex self-center' />
          <div className='flex justify-around text-start h-full items-center -mb-5'>
            <h2 className='flex items-center gap-1 font-normal text-sm h-9 -mt-4 w-full'>{EthIcon} 0,0033</h2>
            <h2 className='font-normal text-sm h-9 w-full'>$6,11</h2>
            <h2 className='font-normal text-sm h-9 w-full'>3</h2>
            <h2 className='font-normal text-sm h-9 w-full'>91% below</h2>
            <h2 className='font-normal text-sm h-9 w-full'>in 26 day</h2>
            <h2 className='font-normal text-sm h-9 w-full text-main-color'>273E40</h2>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
