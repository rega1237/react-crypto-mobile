import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../../redux/reducer';
import Coin from '../Coin/Coin';
import FilterSelector from './FilterSelector';
import './CryptoList.css';

const CryptoList = () => {
  const cryptoStore = useSelector((state) => state.cryptoReducer);
  const dispatch = useDispatch();
  const [filterCoin, setFilter] = useState([]);

  if (cryptoStore.length === 0) {
    dispatch(fetchCoins);
  }

  const selectHandler = (e) => {
    if (e.target.value === '10') {
      setFilter(cryptoStore.filter((crypto) => crypto.rank <= 10));
    } else if (e.target.value === '20') {
      setFilter(cryptoStore.filter((crypto) => crypto.rank <= 20 && crypto.rank >= 11));
    } else if (e.target.value === '30') {
      setFilter(cryptoStore.filter((crypto) => crypto.rank <= 30 && crypto.rank >= 21));
    } else if (e.target.value === '40') {
      setFilter(cryptoStore.filter((crypto) => crypto.rank <= 40 && crypto.rank >= 31));
    } else if (e.target.value === '50') {
      setFilter(cryptoStore.filter((crypto) => crypto.rank <= 50 && crypto.rank >= 41));
    } else if (e.target.value === '60') {
      setFilter(cryptoStore.filter((crypto) => crypto.rank <= 60 && crypto.rank >= 51));
    } else if (e.target.value === '70') {
      setFilter(cryptoStore.filter((crypto) => crypto.rank <= 70 && crypto.rank >= 61));
    } else if (e.target.value === '80') {
      setFilter(cryptoStore.filter((crypto) => crypto.rank <= 80 && crypto.rank >= 71));
    } else if (e.target.value === '90') {
      setFilter(cryptoStore.filter((crypto) => crypto.rank <= 90 && crypto.rank >= 81));
    } else if (e.target.value === '100') {
      setFilter(cryptoStore.filter((crypto) => crypto.rank <= 100 && crypto.rank >= 91));
    } else {
      setFilter(cryptoStore);
    }
  };

  return (
    <div className="all-coins-container">
      <div className="filter-container">
        <FilterSelector selectHandler={selectHandler} />
      </div>
      <div className="all-coins">
        {filterCoin.length > 0
        && filterCoin.map((crypto) => (
          <Coin
            key={crypto.rank}
            img={crypto.img}
            id={crypto.id}
            name={crypto.name}
            rank={crypto.rank}
            price={crypto.priceUsd}
            volume={crypto.volumeUsd24Hr}
          />
        ))}
        {filterCoin.length === 0
        && cryptoStore.map((crypto) => (
          <Coin
            key={crypto.rank}
            img={crypto.img}
            id={crypto.id}
            name={crypto.name}
            rank={crypto.rank}
            price={crypto.priceUsd}
            volume={crypto.volumeUsd24Hr}
          />
        ))}
      </div>
    </div>
  );
};

export default CryptoList;
