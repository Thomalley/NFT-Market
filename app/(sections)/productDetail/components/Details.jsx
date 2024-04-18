import {
  Card,
  CardBody,
} from '@nextui-org/react';
import { truncateAddress } from '../../../utils/functions';

export default function Details({ nft }) {
  return (
    <div>
      <Card className='shadow-none w-[1100px] h-[264px] rounded-[20px] mt-6 bg-[#232323] px-2'>
        <CardBody className='grid grid-cols-2 -mt-3 justify-between w-full h-fit'>
          <h3 className='font-AzeretMono text-sm h-fit'>Contract Address</h3>
          <h3 className='font-AzeretMono text-sm h-fit text-main-color text-right'>{truncateAddress(nft?.contract.address)}</h3>
          <h3 className='font-AzeretMono text-sm h-fit'>Token ID</h3>
          <h3 className='font-AzeretMono text-sm h-fit text-main-color text-right'>{nft?.tokenId}</h3>
          <h3 className='font-AzeretMono text-sm h-fit'>Token Standard</h3>
          <h3 className='font-AzeretMono text-sm h-fit text-right'>{nft?.contract.tokenType}</h3>
          <h3 className='font-AzeretMono text-sm h-fit'>Chain</h3>
          <h3 className='font-AzeretMono text-sm h-fit text-right'>Ethereum</h3>
          <h3 className='font-AzeretMono text-sm h-fit'>Last updated</h3>
          <h3 className='font-AzeretMono text-sm h-fit text-right'>8 monts ago</h3>
          <h3 className='font-AzeretMono text-sm h-fit'>Creator earnings</h3>
          <h3 className='font-AzeretMono text-sm h-fit text-right'>8%</h3>
        </CardBody>
      </Card>
    </div>
  );
}
