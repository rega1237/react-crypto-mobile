import PropTypes from 'prop-types';

const FilterSelector = (props) => {
  const { selectHandler } = props;

  return (
    <select name="filter" id="filter" onInput={(e) => selectHandler(e)}>
      <option defaultValue="All">All</option>
      <option value="10">Rank 1-10</option>
      <option value="20">Rank 11-20</option>
      <option value="30">Rank 21-30</option>
      <option value="40">Rank 31-40</option>
      <option value="50">Rank 41-50</option>
      <option value="60">Rank 51-60</option>
      <option value="70">Rank 61-70</option>
      <option value="80">Rank 71-80</option>
      <option value="90">Rank 81-90</option>
      <option value="100">Rank 91-100</option>
    </select>
  );
};

FilterSelector.propTypes = {
  selectHandler: PropTypes.func.isRequired,
};

export default FilterSelector;
