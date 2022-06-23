import { cryptoReducer, getAllCoins } from '../redux/reducer';

describe('test reducer', () => {
  it('should return the initial state []', () => {
    expect(cryptoReducer(undefined, {})).toEqual([]);
  });

  const GETALLCOINS = 'crypto-mobile/cryptos/GETALLCOINS';
  const reducer = cryptoReducer([], {
    type: GETALLCOINS,
    payload: [
      {
        id: "ethereum",
        img: "/icon/eth.png",
        marketCapUsd: 136283740285.73813,
        maxSupply: 0,
        name: "Ethereum",
        priceUsd: 1123.716840514204,
        rank: 2,
        supply: 121279432.124,
        symbol: "ETH",
        volumeUsd24Hr: 6650810940.031713,
      },
      {
        id: "ethereum",
        img: "/icon/eth.png",
        marketCapUsd: 136283740285.73813,
        maxSupply: 0,
        name: "Ethereum",
        priceUsd: 1123.716840514204,
        rank: 2,
        supply: 121279432.124,
        symbol: "ETH",
        volumeUsd24Hr: 6650810940.031713,
      },
    ],
  });

  expect(reducer).toEqual([
    {
      id: "ethereum",
      img: "/icon/eth.png",
      marketCapUsd: 136283740285.73813,
      maxSupply: 0,
      name: "Ethereum",
      priceUsd: 1123.716840514204,
      rank: 2,
      supply: 121279432.124,
      symbol: "ETH",
      volumeUsd24Hr: 6650810940.031713,
    },
    {
      id: "ethereum",
      img: "/icon/eth.png",
      marketCapUsd: 136283740285.73813,
      maxSupply: 0,
      name: "Ethereum",
      priceUsd: 1123.716840514204,
      rank: 2,
      supply: 121279432.124,
      symbol: "ETH",
      volumeUsd24Hr: 6650810940.031713,
    },
  ]);
})
