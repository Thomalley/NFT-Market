'use client';

// eslint-disable-next-line camelcase
import { Azeret_Mono } from 'next/font/google';
import {
  Accordion,
  AccordionItem,
  Button,
  Divider,
} from '@nextui-org/react';
import { useState } from 'react';
import {
  PlusAccordionIndicator,
  MinusAccordionIndicator,
  GoToIcon,
  PdfIcon,
} from '../../utils/svgs.jsx';

const azeretMono = Azeret_Mono({
  subsets: ['latin'],
});
const AccordionContent = ['Why are NFTs becoming popular?', 'How do I keep my NFTs safe?', 'What is blockchain?', 'What is an NFT?', 'Where can I learn more about cryptocurrencies, NFTs, and blockchain?', 'What is polygon?', 'What is the Ledger Nano X?', 'How do I set up my Ledger?'];
export default function Faqs() {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  return (
    <div className='max-w-[750px] min-h-[980px] mx-auto'>
      <header className='mt-12 text-center tracking-wide mb-7'>
        <h1 className="text-[40px] font-extrabold">Frequently asked questions</h1>
        <h5 className={`${azeretMono.className} text-sm text-[#919191] mt-4`}>{"Quick answers to questions you may have. Can't find what you're looking for?"}
        </h5>
        <div className={`${azeretMono.className} flex justify-center gap-2 font-normal text-sm`}>
          <h5 className='text-[#919191]'>Check out our</h5>
          <h5 className='text-white '>full documentation</h5>
        </div>
      </header>
      {AccordionContent.map((c, index) => (
        <Accordion
          key={`${index}`}
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          variant='splitted'
          itemClasses={{
            title: `${selectedKeys.has(`${index}`) ? 'text-main-color' : 'text-white'} font-extrabold text-lg`,
            indicator: `${selectedKeys.has(`${index}`) ? 'text-main-color' : 'text-white'}`,
            content: `${azeretMono.className} text-sm font-normal bg-[#232323]`,
            heading: 'bg-[#232323]',
            titleWrapper: 'bg-[#232323]',
            trigger: 'data-[hover=true]:bg-[#232323]',
            base: 'bg-[#232323]',
            startContent: 'bg-[#232323]',
          }}
        >
          <AccordionItem
            key={index}
            aria-label={`Accordion ${index}`}
            title={c}
            className='mb-2 bg-[#232323]'
            indicator={({ isOpen }) => (
              isOpen ? (
                <MinusAccordionIndicator />
              ) : (
                <PlusAccordionIndicator />
              )
            )}>
            <Divider className='mb-4' />
            Blockchain is a shared, immutable ledger that facilitates the process of recording
            transactions and tracking assets in a business network. An asset can be tangible
            (a house, car, cash, land) or intangible
            (intellectual property, patents, copyrights, branding).
            Virtually anything of value can be tracked and traded on a blockchain network,
            reducing risk and cutting costs for all involved
          </AccordionItem>
        </Accordion>
      ))}
      <div className='mt-9 space-x-8 text-center'>
        <Button isIconOnly size="md" className='w-[216px] h-[50px] bg-white rounded-[14px]'>
          <span className='flex text-[#161616] items-center font-extrabold gap-1 text-sm'>
            Document
            {PdfIcon}
          </span>
        </Button>
        <Button isIconOnly size="md" className=' bg-main-color w-[216px] h-[50px] rounded-[14px]'>
          <span className='flex text-[#161616] items-center font-extrabold gap-1 text-sm'>
            Get In Touch
            {GoToIcon}
          </span>
        </Button>
      </div>
    </div>
  );
}
