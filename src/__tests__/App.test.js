import {render, screen, getByRole, fireEvent, queryByText, waitFor, cleanup} from '@testing-library/react';
import App from '../App';
import React from "react";
import {Provider} from "react-redux";
import {store} from '../redux/store';

const renderApp = () => {
  render(
      <Provider store={store}>
        <App/>
      </Provider>
  )
}

test('renders loader by default', () => {
  renderApp()
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});

test('by default is not showing cart', () => {
  renderApp()
  const cart = screen.queryByText(/Your cart/i);
  expect(cart).toBeNull();
})

test('is showing cart once cart button is clicked', async () => {
  renderApp()
  // need to use query instead of getBy or const = ... to make it works
  await waitFor(() => expect(screen.queryByRole('button', { name: 'Show cart' })).toBeInTheDocument());

  // no need to use await again
  fireEvent.click(screen.queryByRole('button', { name: 'Show cart' }));
  const cart = screen.queryByText(/Your cart/i);
  expect(cart).toBeInTheDocument();
})

it('changes number of items in cart after Order button is clicked', async () =>{
  renderApp()
  await waitFor(() => expect(screen.queryByRole('button', { name: 'Show cart' })).toBeInTheDocument());
  // testing badge's text to be equals 0
  expect(screen.queryByTestId('items-in-cart')).toHaveTextContent(/0/);
  // can test also child components
  fireEvent.click(screen.queryAllByRole('button', {name: 'Order'})[0])
  // testing if badge is showing increased value
  expect(screen.queryByTestId('items-in-cart')).toHaveTextContent(/1/);
})

// Cleanup function only unmounts React trees that were mounted with render, but doesn't reset state from stores/reducers, so I have to remember to set clear store action in App.js
it('removes product from list once remove button is clicked', async ()=>{
  renderApp()
  await waitFor(() => expect(screen.queryByRole('button', { name: 'Show cart' })).toBeInTheDocument());

  fireEvent.click(screen.queryAllByRole('button', {name: 'Order'})[0])
  expect(screen.queryByTestId('items-in-cart')).toHaveTextContent(/1/);

  fireEvent.click(screen.queryByRole('button', {name: /Show cart/i}));
  fireEvent.click(screen.getByRole('button', {name: /X/i}))

  expect(screen.queryByRole('cell')).not.toBeInTheDocument()
})