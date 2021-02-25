import React from 'react';
import {render, screen} from '@testing-library/react';
import Rotate from './Rotate';

it('should render snapshot', () => {
  const {asFragment} = render(<Rotate/>);
  expect(asFragment().firstChild).toMatchSnapshot();
});

it('should render rotate', () => {
  render(<Rotate/>);

  const icon = screen.getByAltText('rotate');
  expect(icon).toBeInTheDocument();
  expect(icon).toBeVisible();
  expect(icon).toHaveAttribute('src', 'logo-rotate.png');
});
