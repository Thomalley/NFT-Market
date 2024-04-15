import {
  Card, CardHeader, CardBody, Button, Avatar, Divider,
  CardFooter,
  Image,
} from '@nextui-org/react';
// eslint-disable-next-line camelcase
import { Azeret_Mono } from 'next/font/google';
import { HeartFavouriteIcon } from '../utils/svgs.jsx';

const azeretMono = Azeret_Mono({
  subsets: ['latin'],
});
export default function FeaturedItemCard({ nft }) {
  return (
    <Card className="p-1 w-64 h-96 rounded-5 mb-10 bg-[#232323] mx-auto lg:mx-0 shadow-none">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <div className='flex flex-row self-center justify-center overflow-auto w-fit h-fit'>
          <Image
            radius="lg"
            width={200}
            height={200}
            alt='nft image'
            style={{
              jusfitySelf: 'center',
              margin: 'auto',
              borderRadius: '50%',
              height: '100%',
              width: '100%',
            }}
            src={nft?.image?.originalUrl}
          />
        </div>
        <Button isIconOnly className='absolute bg-transparent right-3 top-4'>{HeartFavouriteIcon}</Button>
      </CardHeader>
      <CardBody className="flex justify-start">
        <h4 className="font-extrabold text-lg">{nft?.name}</h4>
        <div className='flex items-center gap-3'>
          <Avatar
            src='https://i.pravatar.cc/150?u=a04258114e29026702d'
            className="w-fit mt-2"
          />
          <div className='space-y-1 mt-2'>
            <h3 className={`${azeretMono.className} opacity-30 text-xs`}>Created by:</h3>
            <h3 className={`${azeretMono.className} font-normal text-xs`}>Marvin McKinney</h3>
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className='h-12'>
        <h3 className={`${azeretMono.className} font-normal text-xs opacity-30`}>Current bid: </h3>
      </CardFooter>
    </Card>
  );
}
