  // App.test.js
import { render, screen } from '@testing-library/react';
import App from '../App'

test('renders Hello there!! text', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello there!!/i);
  expect(textElement).toBeInTheDocument();
});
