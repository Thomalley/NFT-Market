import { Alchemy, Network } from 'alchemy-sdk';

const useNft = ({ tokenId, start = 0, end = 10 }) => {
  const alchemy = new Alchemy();
  const contractAddress = '0xe785E82358879F061BC3dcAC6f0444462D4b5330';
  const options = {
    apiKey: 'sf1AYSLaVV-D7uF9VzmHfxFLbLGZgu7X',
    network: Network.ETH_MAINNET,
  };

  const getNftDetails = async () => {
    try {
      const nftDetail = await alchemy.nft.getNftMetadata(contractAddress, tokenId);
      if (nftDetail) {
        return nftDetail;
      }
    } catch (err) {
      console.log(err);
    }
    return null;
  };

  const getAllNfts = async () => {
    try {
      const response = await alchemy.nft.getNftsForContract(contractAddress, { options });
      if (response) return response.nfts.slice(start, end);
    } catch (err) {
      console.log(err);
    }
    return null;
  };

  return {
    getNftDetails, getAllNfts,
  };
};

export default useNft;
