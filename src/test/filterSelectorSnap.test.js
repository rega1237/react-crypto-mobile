import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import FilterSelector from '../components/CryptoList/FilterSelector';
import store from '../redux/configureStore';

test('Selector is rendered', () => {
  const selectHandler = () => true;
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <FilterSelector selectHandler={selectHandler} />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
