import { Card, CardBody, CardHeader } from '@nextui-org/react';

export default function TrendringCoinsCard() {
  const coins = ['Bitcoin', 'Ethereum', 'Cardano', 'Solana', 'Litecoin'];
  return (
    <Card className='sm:w-[400px] h-[345px] bg-[#232323] p-3 m-3 sm:m-0'>
      <CardHeader>
        <h2 className='font-extrabold text-[22px]'>Trending coins</h2>
      </CardHeader>
      <CardBody className='space-y-4 mt-1'>
        {coins.map((c, index) => (
          <div key={index} className='flex items-center gap-3'>
            <div className='size-[34px] bg-[#2E2E2E] rounded-full'></div>
            <h3 className='font-AzeretMono font-light text-sm text-white/50'>{c}</h3>
          </div>
        ))}
      </CardBody>
    </Card>
  );
}
