import {
  Card, CardBody, CardFooter, Image,
} from '@nextui-org/react';
import { motion } from 'framer-motion';
import { EthIcon } from '../utils/svgs.jsx';

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
        className='w-[100%] h-fit lg:h-96 2xl:h-120 text-justify rounded-4xl p-5 bg-[#1E1E1E] shadow-card-shadow'
      >
        <CardBody>
          <div className='flex flex-row self-center justify-center overflow-auto w-fit h-fit'>
            <Image
              radius="lg"
              width={200}
              height={200}
              alt='nft card'
              style={{
                jusfitySelf: 'center',
                margin: 'auto',
                borderRadius: '50%',
                height: '100%',
                width: '100%',
              }}
              src={nft.image.originalUrl}
            />
          </div>
        </CardBody>
        <CardFooter className="flex flex-col text-lg justify-between">
          <div className='flex flex-col'>
            <p className="text-default-500 pr-2">{nft.name}</p>
            <p className='flex gap-x-1 items-center'>{EthIcon} {(nft.contract.openSeaMetadata.floorPrice).toString().slice(0, 4)}</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
