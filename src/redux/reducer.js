const GETALLCOINS = 'crypto-mobile/cryptos/GETALLCOINS';
const url = 'https://api.coincap.io/v2/assets/';

export const cryptoReducer = (state = [], action) => {
  switch (action.type) {
    case GETALLCOINS:
      return [...action.payload];
    default:
      return state;
  }
};

const getAllCoins = (coins) => ({
  type: GETALLCOINS,
  payload: coins,
});

export const fetchCoins = (dispatch) => {
  const coinsList = [];
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },

  })
    .then((response) => response.json())
    .then((result) => {
      result.data.forEach((element) => {
        coinsList.push({
          img: `/icon/${element.symbol.toLowerCase()}.png`,
          rank: Number(element.rank),
          id: element.id,
          name: element.name,
          symbol: element.symbol,
          supply: Number(element.supply),
          maxSupply: Number(element.maxSupply),
          marketCapUsd: Number(element.marketCapUsd),
          volumeUsd24Hr: Number(element.volumeUsd24Hr),
          priceUsd: Number(element.priceUsd),
        });
      });
      dispatch(getAllCoins(coinsList));
    });
};
