import {
  Card, CardHeader, CardBody, Button, Avatar, Divider,
  CardFooter,
  Image,
} from '@nextui-org/react';
import { EthIcon, HeartFavouriteIcon } from '../../utils/svgs.jsx';
import { nftEthereumPriceFormatter } from '../../utils/functions';

export default function FeaturedItemCard({ nft }) {
  return (
    <Card className="p-1 w-64 h-100 rounded-[20px] bg-[#232323] mx-auto lg:mx-0 shadow-none">
      <CardHeader className="relative pb-0 pt-2 px-2 flex-col items-center">
        <Button isIconOnly radius='full' className='absolute bg-transparent right-3 top-2 z-50'>{HeartFavouriteIcon}</Button>
        <Image
          width={235}
          height={244}
          alt='nft image'
          className='w-[255px] h-[244px] object-cover max-w-full z-0'
          src={nft?.image?.originalUrl}
        />
      </CardHeader>
      <CardBody className="flex justify-start">
        <h4 className="font-extrabold text-lg">{nft?.name}</h4>
        <div className='flex items-center gap-3'>
          <Avatar
            src='https://i.pravatar.cc/150?u=a04258114e29026702d'
            className="w-fit mt-2"
          />
          <div className='space-y-1 mt-2'>
            <h3 className='font-AzeretMono opacity-30 text-xs'>Created by:</h3>
            <h3 className='font-AzeretMono font-normal text-xs'>Marvin McKinney</h3>
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className='flex justify-between'>
        <h3 className='text-xs font-AzeretMono opacity-30'>Current bid: </h3>
        <h3 className='flex gap-1 items-center font-extrabold text-base'>{EthIcon} {nftEthereumPriceFormatter(nft.contract.openSeaMetadata.floorPrice)}</h3>
      </CardFooter>
    </Card>
  );
}
