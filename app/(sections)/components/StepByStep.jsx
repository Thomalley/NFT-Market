import Image from 'next/image';
import StepbyStepPhoto from '../../../public/StepByStep.png';
import DiscoverPhoto from '../../../public/Discover.png';

export default function StepByStep() {
  return (
    <div className='hidden sm:block text-center mx-auto mt-5 mb-5'>
      <h1 className="text-[32px] font-extrabold mb-2">Step by step Create and Sell Your NFTs</h1>
      <Image src={StepbyStepPhoto} alt='Step by step image' className='w-[1080px] object-cover mx-auto'/>
      <Image src={DiscoverPhoto} alt='Discover image' width={900} height={211} className='w-[1080px] object-cover mx-auto mt-12'/>
    </div>
  );
}
