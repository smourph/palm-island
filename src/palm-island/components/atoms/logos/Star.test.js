import React from 'react';
import {render, screen} from '@testing-library/react';
import Star from './Star';

it('should render snapshot', () => {
  const {asFragment} = render(<Star/>);
  expect(asFragment().firstChild).toMatchSnapshot();
});

it('should render star', () => {
  render(<Star/>);

  const icon = screen.getByAltText('star');
  expect(icon).toBeInTheDocument();
  expect(icon).toBeVisible();
  expect(icon).toHaveAttribute('src', 'logo-star.png');
});
