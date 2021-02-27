import { render, screen } from '@testing-library/react';
import App from './App';

test('renders developer name', () => {
  render(<App />);
  const linkElement = screen.getByText(/developed by/i);
  expect(linkElement).toBeInTheDocument();
});
