import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CryptoList from '../components/CryptoList/CryptoList';
import store from '../redux/configureStore';

test('CryptoList is rendering', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <CryptoList />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
