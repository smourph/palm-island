import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('should render App', () => {
  render(<App/>);

  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
  expect(heading).toBeVisible();
  expect(heading).toHaveTextContent(/Palm Island/);

  const game = screen.getByRole('main');
  expect(game).toBeInTheDocument();
  expect(game).toBeVisible();
  expect(game).toHaveClass('app');
});
