import React from 'react';
import {render, screen} from '@testing-library/react';
import Flip from './Flip';

it('should render snapshot', () => {
  const {asFragment} = render(<Flip/>);
  expect(asFragment().firstChild).toMatchSnapshot();
});

it('should render flip', () => {
  render(<Flip/>);

  const icon = screen.getByAltText('flip');
  expect(icon).toBeInTheDocument();
  expect(icon).toBeVisible();
  expect(icon).toHaveAttribute('src', 'logo-flip.png');
});
