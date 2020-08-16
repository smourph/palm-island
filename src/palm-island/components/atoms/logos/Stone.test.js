import React from 'react';
import {render, screen} from '@testing-library/react';
import Stone from './Stone';

it('should render snapshot', () => {
  const {asFragment} = render(<Stone/>);
  expect(asFragment().firstChild).toMatchSnapshot();
});

it('should render stone', () => {
  render(<Stone/>);

  const icon = screen.getByRole('img', {hidden: true});
  expect(icon).toBeInTheDocument();
  expect(icon).toBeVisible();
  expect(icon).toHaveAttribute('data-icon', 'gem');
});
