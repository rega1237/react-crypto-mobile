import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Coin from '../components/Coin/Coin';

test('selected snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <Coin  
            id='bitcoin'
            img='img'
            name='bitcoin'
          />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});