import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
} from '@nextui-org/react';
import Image from 'next/image';
import useAlchemy from '../../../hooks/useAlchemy.jsx';

export default function ReacentlyAddedCard() {
  const { nfts } = useAlchemy(14, 15);
  return (
    <Card className='w-[400px] h-[600px] bg-[#232323] p-3'>
      <CardHeader>
        <h2 className='font-extrabold text-[22px]'>Recently added</h2>
      </CardHeader>
      <CardBody>
        <div>
          <Image src={nfts[0]?.image?.cachedUrl} alt='nft image' width={360} height={200} className='w-[360px] h-[200px] object-cover rounded-t-[14px]' />
          <div className='flex justify-between items-center bg-[#111111] w-full h-[50px] px-4 rounded-b-[14px]'>
            <h3 className='text-white font-bold text-base'>Photography</h3>
            <h3 className='text-white/50 text-sm'>16hr ago</h3>
          </div>
        </div>
        <div className='space-y-3 mt-5'>
          <div className='flex items-center gap-3'>
            <Avatar
              radius="md"
              size='lg'
              src='https://i.pravatar.cc/150'
              className="w-fit mt-2"
            />
            <div className='flex justify-between items-center w-4/5'>
              <div className='space-y-1 mt-2'>
                <h3 className='text-lg font-extrabold'>Propw</h3>
                <h3 className='font-AzeretMono font-normal text-sm text-white/50'>@themes</h3>
              </div>
              <h3 className='text-white/50 text-sm'>Mon, 08 May</h3>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Avatar
              radius="md"
              size='lg'
              src='https://i.pravatar.cc/140'
              className="w-fit mt-2"
            />
            <div className='flex justify-between items-center w-4/5'>
              <div className='space-y-1 mt-2'>
                <h3 className='text-lg font-extrabold'>Propw</h3>
                <h3 className='font-AzeretMono font-normal text-sm text-white/50'>@themes</h3>
              </div>
              <h3 className='text-white/50 text-sm'>Mon, 08 May</h3>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Avatar
              radius="md"
              size='lg'
              src='https://i.pravatar.cc/130'
              className="w-fit mt-2"
            />
            <div className='flex justify-between items-center w-4/5'>
              <div className='space-y-1 mt-2'>
                <h3 className='text-lg font-extrabold'>Propw</h3>
                <h3 className='font-AzeretMono font-normal text-sm text-white/50'>@themes</h3>
              </div>
              <h3 className='text-white/50 text-sm'>Mon, 08 May</h3>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
