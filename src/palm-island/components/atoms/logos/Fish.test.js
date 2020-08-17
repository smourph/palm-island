import React from 'react';
import {render, screen} from '@testing-library/react';
import Fish from './Fish';

it('should render snapshot', () => {
  const {asFragment} = render(<Fish/>);
  expect(asFragment().firstChild).toMatchSnapshot();
});

it('should render fish', () => {
  render(<Fish/>);

  const icon = screen.getByAltText('fish');
  expect(icon).toBeInTheDocument();
  expect(icon).toBeVisible();
  expect(icon).toHaveAttribute('src', 'logo-fish.png');
});
