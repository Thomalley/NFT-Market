import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Avatar,
  Image,
  Tooltip,
} from '@nextui-org/react';
import { HeartFavouriteIcon, EthIcon } from '../../../utils/svgs.jsx';
import { nftEthereumPriceFormatter } from '../../../utils/functions';

export default function TrendingNftsCard({ nft }) {
  return (
    <Tooltip content="See more" className='hidden sm:block'>
      <Card className="p-1 w-[255px] h-[425px] rounded-[20px] bg-[#232323] mx-auto shadow-none sm:hover:scale-[1.01] cursor-pointer transform duration-300">
        <CardHeader className='py-1'>
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
        </CardHeader>
        <CardBody className='relative pb-0'>
          <Button isIconOnly radius='full' className='absolute bg-transparent right-3 top-2 z-50'>{HeartFavouriteIcon}</Button>
          <Image
            width={235}
            height={244}
            alt='nft image'
            className='w-[255px] h-[244px] object-cover max-w-full z-0'
            src={nft?.image?.originalUrl}
          />
          <h4 className="font-extrabold text-lg mt-2">{nft?.name}</h4>
          <span className='flex justify-between mt-4'>
            <div>
              <h3 className='text-xs opacity-30'>Current bid: </h3>
              <h3 className='flex gap-1 items-center font-extrabold text-base'>{EthIcon} {nftEthereumPriceFormatter(nft.contract.openSeaMetadata.floorPrice)}</h3>
            </div>
            <Button className='w-[116px] h-[44px] rounded-xl bg-light text-text-in-bg font-extrabold text-sm'>
              Place Bid
            </Button>
          </span>
        </CardBody>
      </Card>
    </Tooltip>
  );
}
