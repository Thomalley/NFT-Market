import {
  Card,
  CardBody,
} from '@nextui-org/react';

export default function Traits({ nft }) {
  return (
    <div>
      <Card className='shadow-none sm:w-full sm:h-[427px] rounded-[20px] mt-6 bg-[#232323] px-2'>
        <CardBody className='sm:grid sm:grid-cols-4 gap-3'>
          {nft?.raw.metadata.attributes.map((t, index) => (
            <div key={index} className='flex flex-col gap-2 justify-center items-center sm:w-[230px] h-[101px] border-1 border-white/10 rounded-2xl'>
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
