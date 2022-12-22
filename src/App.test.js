import { render, screen } from '@testing-library/react';
import App from './App';

test('renders test react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/test react/i);
  expect(linkElement).toBeInTheDocument();
});
