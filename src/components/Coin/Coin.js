import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Coin.css';

const Coin = (props) => {
  const {
    id, name, img,
  } = props;

  return (
    <NavLink className="nav-link" to={`/details/${id}`}>
      <div className="coin">
        <div className="data-container">
          <img className="img-logo" src={img} alt={`${name} Logo`} />
          <h2>{name}</h2>
        </div>
      </div>
    </NavLink>
  );
};

Coin.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Coin;
