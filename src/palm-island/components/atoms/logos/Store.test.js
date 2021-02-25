import React from 'react';
import {render, screen} from '@testing-library/react';
import Store from './Store';

it('should render snapshot', () => {
  const {asFragment} = render(<Store/>);
  expect(asFragment().firstChild).toMatchSnapshot();
});

it('should render store', () => {
  render(<Store/>);

  const icon = screen.getByAltText('store');
  expect(icon).toBeInTheDocument();
  expect(icon).toBeVisible();
  expect(icon).toHaveAttribute('src', 'logo-store.png');
});
