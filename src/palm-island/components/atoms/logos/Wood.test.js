import React from 'react';
import {render, screen} from '@testing-library/react';
import Wood from './Wood';

it('should render snapshot', () => {
  const {asFragment} = render(<Wood/>);
  expect(asFragment().firstChild).toMatchSnapshot();
});

it('should render wood', () => {
  render(<Wood/>);

  const icon = screen.getByAltText('wood');
  expect(icon).toBeInTheDocument();
  expect(icon).toBeVisible();
  expect(icon).toHaveAttribute('src', 'logo-wood.png');
});
