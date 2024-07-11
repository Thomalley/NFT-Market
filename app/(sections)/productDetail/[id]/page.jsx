import { Alchemy, Network } from 'alchemy-sdk';
import ProductDetailView from '../ProductDetailView.jsx';
import useNft from '../../../hooks/useNft';

export async function generateStaticParams() {
  const alchemy = new Alchemy();
  const contractAddress = '0xe785E82358879F061BC3dcAC6f0444462D4b5330';
  const options = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  const response = await alchemy.nft.getNftsForContract(contractAddress, { options });
  let nfts = [];
  if (response) {
    nfts = response.nfts.slice(0, 50).map((nft) => ({ id: nft.tokenId }));
  }
  return nfts;
}

export default async function ProductDetail({ params }) {
  const { getNftDetails } = useNft({ tokenId: BigInt(params?.id) });
  const response = await getNftDetails();
  return (
    <ProductDetailView initialMetadata={response} params={params} />
  );
}
