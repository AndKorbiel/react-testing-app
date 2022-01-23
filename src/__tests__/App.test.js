import { render, screen, getByRole, fireEvent, queryByText, waitFor } from '@testing-library/react';
import App from '../App';

test('renders loader by default', () => {
  render(<App />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});

test('by default is not showing cart', () => {
  render(<App />);
  const cart = screen.queryByText(/Your cart/i);
  expect(cart).toBeNull();
})

test('is showing cart once cart button is clicked', async () => {
  render(<App />)
  // need to use query instead of getBy or const = ... to make it works
  await waitFor(() => expect(screen.queryByRole('button', { name: 'Show cart' })).toBeInTheDocument());

  // no need to use await again
  fireEvent.click(screen.queryByRole('button', { name: 'Show cart' }));
  const cart = screen.queryByText(/Your cart/i);
  expect(cart).toBeInTheDocument();
})
