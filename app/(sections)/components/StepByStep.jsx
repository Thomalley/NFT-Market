import Image from 'next/image';
import StepbyStepPhoto from '../../../public/StepByStep.png';
import DiscoverPhoto from '../../../public/Discover.png';

export default function StepByStep() {
  return (
    <div className='hidden sm:block text-center mx-auto mt-5 mb-5'>
      <h1 className="text-[32px] font-extrabold">Step by step Create and Sell Your NFTs</h1>
      <Image src={StepbyStepPhoto} alt='Step by step image' className='w-fit mx-auto'/>
      <Image src={DiscoverPhoto} alt='Discover image' className='w-fit mx-auto mt-12'/>
    </div>
  );
}
