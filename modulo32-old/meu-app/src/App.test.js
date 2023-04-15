import { render, screen } from '@testing-library/react';
import App from './App';

test('teste titulo', () => {
  render(<App />);
  const testCase = document.querySelector('.App h1');
  expect(testCase).toHaveTextContent(/Entre em sua conta/i);
});
