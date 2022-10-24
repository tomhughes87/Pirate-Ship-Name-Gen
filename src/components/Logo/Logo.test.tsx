import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('Logo is on the screen', () => {
  render(<App />);
  const logoChecker = screen.getByRole('MyLogo')
  expect(logoChecker).toBeInTheDocument();
});
