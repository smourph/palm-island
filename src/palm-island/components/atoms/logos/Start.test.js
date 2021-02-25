import React from 'react';
import {render, screen} from '@testing-library/react';
import Start from './Start';

it('should render snapshot', () => {
  const {asFragment} = render(<Start/>);
  expect(asFragment().firstChild).toMatchSnapshot();
});

it('should render start', () => {
  render(<Start/>);

  const icon = screen.getByAltText('start');
  expect(icon).toBeInTheDocument();
  expect(icon).toBeVisible();
  expect(icon).toHaveAttribute('src', 'logo-start-white.png');
});
