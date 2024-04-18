import {
  Avatar, Button, Card, CardBody, CardHeader,
} from '@nextui-org/react';
import { cardInfo } from '../../../utils/data';

export default function TopCreatorsCard() {
  return (
    <Card className='w-[400px] h-[480px] bg-[#232323] p-3'>
      <CardHeader className='flex justify-between'>
        <h2 className='font-extrabold text-[22px]'>Top Creators</h2>
        <h4 className='text-sm font-medium'>See all</h4>
      </CardHeader>
      <CardBody className='mt-1'>
        <ol className='space-y-3'>
          {cardInfo.slice(0, 5).map((c, index) => (
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
          ))}
        </ol>
      </CardBody>
    </Card>
  );
}
