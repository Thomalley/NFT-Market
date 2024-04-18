'use client';

import { Network, Alchemy } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

const useAlchemy = (start, end) => {
  const options = {
    apiKey: 'sf1AYSLaVV-D7uF9VzmHfxFLbLGZgu7X',
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy();
  const contractAddress = '0xe785E82358879F061BC3dcAC6f0444462D4b5330';
  const [nfts, setNfts] = useState([]);

  const getNfts = async () => {
    const metadata = await alchemy.nft.getNftsForContract(contractAddress, { options });
    setNfts(metadata.nfts.slice(start, end));
  };

  useEffect(() => {
    getNfts();
  }, []);

  return { nfts };
};

export default useAlchemy;
