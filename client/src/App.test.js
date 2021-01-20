import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello from client', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hello from client')).toBeInTheDocument();
});
