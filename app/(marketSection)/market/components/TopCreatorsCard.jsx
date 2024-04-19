'use client';

import { useEffect, useState } from 'react';
import {
  Avatar, Button, Card, CardBody, CardHeader,
} from '@nextui-org/react';
import { cardInfo } from '../../../utils/data';
import SkeletonTopCreator from './SkeletonTopCreator.jsx';

export default function TopCreatorsCard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Card className='sm:w-[400px] h-full sm:h-[480px] bg-[#232323] p-3 m-3 sm:m-0'>
      <CardHeader className='flex justify-between'>
        <h2 className='font-extrabold text-[22px]'>Top Creators</h2>
        <h4 className='text-sm font-medium'>See all</h4>
      </CardHeader>
      <CardBody className='mt-1'>
        <ol className='space-y-3'>
          {loading ? (
            <>
              <SkeletonTopCreator />
              <SkeletonTopCreator />
              <SkeletonTopCreator />
              <SkeletonTopCreator />
            </>
          ) : (cardInfo.slice(0, 5).map((c, index) => (
            <li key={index} className='flex justify-between items-center gap-4'>
              <div className='flex items-center gap-3'>
                <h2 className='font-extrabold text-lg'>{index + 1}.</h2>
                <Avatar
                  radius="full"
                  size='lg'
                  src={c.img}
                  className="w-fit mt-2"
                />
                <div className='space-y-1'>
                  <h3 className='text-base font-extrabold'>{c.name}</h3>
                  <h3 className='font-AzeretMono font-normal text-sm text-white/50'>@themes</h3>
                </div>
              </div>
              <Button className='w-[100px] h-[44px] rounded-xl font-extrabold text-sm'>Follow</Button>
            </li>
          )))}
        </ol>
      </CardBody>
    </Card>
  );
}
