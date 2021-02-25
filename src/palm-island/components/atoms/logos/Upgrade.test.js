import React from 'react';
import {render, screen} from '@testing-library/react';
import Upgrade from './Upgrade';

it('should render snapshot', () => {
  const {asFragment} = render(<Upgrade/>);
  expect(asFragment().firstChild).toMatchSnapshot();
});

it('should render upgrade', () => {
  render(<Upgrade/>);

  const icon = screen.getByAltText('upgrade');
  expect(icon).toBeInTheDocument();
  expect(icon).toBeVisible();
  expect(icon).toHaveAttribute('src', 'logo-upgrade.png');
});
