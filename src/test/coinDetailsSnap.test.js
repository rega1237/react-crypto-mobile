import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import CoinDetails from '../components/CoinDetails/CoinDetails';

test('selected snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <CoinDetails />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
