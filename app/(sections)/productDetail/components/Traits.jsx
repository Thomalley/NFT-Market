import {
  Card,
  CardBody,
  CardHeader,
  Divider,
} from '@nextui-org/react';
import { DescriptionIcon, GreyDropdownIcon } from '../../../utils/svgs.jsx';

export default function Traits({ nft }) {
  return (
    <div>
      <Card className='shadow-none w-[1100px] h-[427px] rounded-[20px] mt-6 bg-[#232323] px-2'>
        <CardHeader className='flex flex-col items-start p-4'>
          <div className='flex justify-between items-center gap-2 font-extrabold text-sm mb-3 w-full'>
            <h3 className='flex gap-2'>{DescriptionIcon}Details</h3>
            <div>
              {GreyDropdownIcon}
            </div>
          </div>
          <Divider />
        </CardHeader>
        <CardBody className='grid grid-cols-4 gap-3'>
          {nft?.raw.metadata.attributes.map((t, index) => (
            <div key={index} className='flex flex-col gap-2 justify-center items-center w-[260px] h-[101px] border-1 border-white/10 rounded-2xl'>
              <h3 className='font-AzeretMono text-white/30 text-xs font-normal'>{t.trait_type}</h3>
              <h2 className='font-extrabold text-sm'>{`${t.value} ${Math.floor(Math.random() * 100)} %`}</h2>
              <h3 className='font-AzeretMono text-white/30 text-xs font-normal'>Floor: {Math.floor(Math.random() * 100) / 100} ETH</h3>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
