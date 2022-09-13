import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import back from '../../icon/back.png';
import './CoinDetails.css';
import Header from '../Header/Header';

const CoinDetails = () => {
  const { id } = useParams();
  const coinStore = useSelector((state) => state.cryptoReducer);
  const selectCoin = coinStore.filter((element) => element.id === id);
  const coin = selectCoin[0];

  if (coin !== undefined) {
    return (
      <div className="details-container">
        <div className="presentation">
          <NavLink to="/">
            <img className="back-icon" src={back} alt="" />
          </NavLink>
          <Header />
          <div className="img-name">
            <img className="img-coin-details" src={coin.img} alt={`${coin.name} logo`} />
            <div className="name-rank">
              <h1>{`${coin.name} (${coin.symbol})`}</h1>
              <h2>{`Rank #${coin.rank}`}</h2>
            </div>
          </div>
        </div>

        <ul>
          <li className="description-element">
            <h2>Price:</h2>
            <h3>{`${coin.priceUsd.toFixed(3)} USD`}</h3>
          </li>
          <li className="description-element">
            <h2>Market cap:</h2>
            <h3>{`${coin.marketCapUsd.toFixed(3)} USD`}</h3>
          </li>
          <li className="description-element">
            <h2>Supply:</h2>
            <h3>{`${coin.supply}`}</h3>
          </li>
          <li className="description-element">
            <h2>Max Supply:</h2>
            <h3>{`${coin.maxSupply}`}</h3>
          </li>
          <li className="description-element">
            <h2>Volume last 24 hr:</h2>
            <h3>{`${coin.volumeUsd24Hr.toFixed(3)} USD`}</h3>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="details-container">
      <div className="presentation">
        <NavLink to="/">
          <img className="back-icon" src={back} alt="" />
        </NavLink>
        <Header />
      </div>
      <div className="error">
        <h1>Oops! nothing To show here</h1>
        <h2>Please go back and select the Currency you want to check!</h2>
      </div>
    </div>
  );
};

export default CoinDetails;
