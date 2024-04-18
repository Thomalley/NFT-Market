import {
  Card,
  CardBody,
  CardHeader,
} from '@nextui-org/react';

export default function HistoryCard() {
  return (
    <Card className='w-[400px] h-[480px] bg-[#232323] p-3'>
      <CardHeader className='flex justify-between'>
        <h2 className='font-extrabold text-[22px]'>History</h2>
        <h4 className='text-sm font-medium'>See all</h4>
      </CardHeader>
      <CardBody>
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <div className='size-[60px] bg-[#2E2E2E] rounded-full'></div>
            <div className='flex justify-between items-center w-4/5'>
              <div className='space-y-1 mt-2'>
                <h3 className='text-lg font-extrabold'>Lorem NFT sold</h3>
                <h3 className='font-AzeretMono font-normal text-sm text-white/50'>Sold at 1.32 ETH</h3>
              </div>
              <h3 className='text-white/50 text-sm'>Just now</h3>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <div className='size-[60px] bg-[#2E2E2E] rounded-full'></div>
            <div className='flex justify-between items-center w-4/5'>
              <div className='space-y-1 mt-2'>
                <h3 className='text-lg font-extrabold'>New NFT uploaded</h3>
                <h3 className='font-AzeretMono font-normal text-sm text-white/50'>By Marisol Pena</h3>
              </div>
              <h3 className='text-white/50 text-sm'>1hr ago</h3>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <div className='size-[60px] bg-[#2E2E2E] rounded-full'></div>
            <div className='flex justify-between items-center w-4/5'>
              <div className='space-y-1 mt-2'>
                <h3 className='text-lg font-extrabold'>You followed a creator</h3>
                <h3 className='font-AzeretMono font-normal text-sm text-white/50'>Jane Cooper</h3>
              </div>
              <h3 className='text-white/50 text-sm'>2hr ago</h3>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <div className='size-[60px] bg-[#2E2E2E] rounded-full'></div>
            <div className='flex justify-between items-center w-4/5'>
              <div className='space-y-1 mt-2'>
                <h3 className='text-lg font-extrabold'>You placed a bid</h3>
                <h3 className='font-AzeretMono font-normal text-sm text-white/50'>Whirl wind NFT</h3>
              </div>
              <h3 className='text-white/50 text-sm'>4hr ago</h3>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <div className='size-[60px] bg-[#2E2E2E] rounded-full'></div>
            <div className='flex justify-between items-center w-4/5'>
              <div className='space-y-1 mt-2'>
                <h3 className='text-lg font-extrabold'>You followed a creator</h3>
                <h3 className='font-AzeretMono font-normal text-sm text-white/50'>Courtney Henry</h3>
              </div>
              <h3 className='text-white/50 text-sm'>16hr ago</h3>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
