export const nftEthereumPriceFormatter = (price) => {
  if (price === undefined) return 0.34;
  const formattedPrice = (Math.floor(price * 100) / 100).toLocaleString('us');
  return formattedPrice;
};

export const nftUsdPriceFormatter = (price) => {
  const formattedPrice = (Math.floor((price * 3060) * 100) / 100).toLocaleString('us');
  return formattedPrice;
};

export const truncateAddress = (string = '') => {
  const modifiedString = `${string.substring(0, 6)}...${string.slice(-4)}`;
  return modifiedString;
};
