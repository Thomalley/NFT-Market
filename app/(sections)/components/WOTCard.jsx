import {
  Card, CardBody, CardFooter, Image, Button,
} from '@nextui-org/react';
import { motion } from 'framer-motion';
import { EthIcon, HeartFavouriteIcon } from '../../utils/svgs.jsx';
import { nftEthereumPriceFormatter } from '../../utils/functions';

export default function WorldOfTopCard({
  nft,
  positionIndexes,
  index,
  xVariant,
  containerClassName,
  motionDivWidth,
  leftPosition,
  topPosition,
}) {
  const positions = ['center', 'left2', 'left1', 'left', 'right', 'right1', 'right2'];
  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left2: {
      x: xVariant[0], scale: 0.9, zIndex: 4, rotateY: 50,
    },
    left1: {
      x: xVariant[1], scale: 0.8, zIndex: 3, rotateY: 50,
    },
    left: {
      x: xVariant[2], scale: 0.7, zIndex: 2, rotateY: 50,
    },
    right: {
      x: xVariant[3], scale: 0.7, zIndex: 1, rotateY: -50,
    },
    right1: {
      x: xVariant[4], scale: 0.8, zIndex: 3, rotateY: -50,
    },
    right2: {
      x: xVariant[5], scale: 0.9, zIndex: 4, rotateY: -50,
    },
  };
  return (
    <motion.div
      initial='center'
      animate={positions[positionIndexes[index]]}
      variants={imageVariants}
      transition={{ duration: 0.7 }}
      style={{
        width: motionDivWidth, position: 'absolute', top: topPosition, left: leftPosition,
      }}
      className={containerClassName}
    >
      <Card
        className='w-[100%] h-fit lg:h-80 2xl:h-100 mt-4 text-justify rounded-4xl p-5 bg-[#1E1E1E] shadow-card-shadow'
      >
        <CardBody>
          <div className='flex flex-row self-center justify-center overflow-auto w-fit h-fit'>
            {positions[positionIndexes[index]] === 'center' && (
              <section className='hidden sm:flex justify-between items-center absolute z-20 top-0 right-0 gap-x-2'>
                <div className='flex w-fit h-7 gap-x-1 justify-center items-center rounded-full bg-[#585858] text-white font-extrabold text-sm px-3 py-1'>
                  <h5>2h</h5>
                  <h5>4m</h5>
                  <h5>32s</h5>
                </div>
                {HeartFavouriteIcon}
              </section>
            )}
            <Image
              width={300}
              height={300}
              alt='nft card'
              className='max-w-full sm:w-64 sm:h-64 object-cover relative'
              src={nft.image.originalUrl}
            />
          </div>
          {positions[positionIndexes[index]] === 'center' && (
            <Button className='hidden sm:block w-28 h-11 bg-light text-text-in-bg font-extrabold text-sm px-4 absolute z-10 bottom-0 left-28'>
              Place Bid
            </Button>
          )}
        </CardBody>
        <CardFooter className="flex flex-col text-lg justify-between">
          <div className='flex flex-col'>
            <p className="text-default-500 pr-2">{nft.name}</p>
            <p className='flex gap-x-1 items-center'>{EthIcon} {nftEthereumPriceFormatter(nft.contract.openSeaMetadata.floorPrice)}</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
