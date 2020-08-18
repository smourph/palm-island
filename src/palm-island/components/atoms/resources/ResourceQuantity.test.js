import React from 'react';
import {render, screen} from '@testing-library/react';
import ResourceQuantity from './ResourceQuantity';
import Wood from '../logos/Wood';
import Fish from '../logos/Fish';
import Stone from '../logos/Stone';

describe('Display resource icon and quantity number', () => {
  it('should render a wood icon and quantity number', () => {
    render(<ResourceQuantity Resource={Wood} quantity={4}/>);

    const number = screen.getByText('4');
    expect(number).toBeInTheDocument();
    expect(number).toBeVisible();

    const wood = screen.getByAltText('wood');
    expect(wood).toBeInTheDocument();
    expect(wood).toBeVisible();
  });

  it('should render a fish icon and quantity number', () => {
    render(<ResourceQuantity Resource={Fish} quantity={3}/>);

    const number = screen.getByText('3');
    expect(number).toBeInTheDocument();
    expect(number).toBeVisible();

    const fish = screen.getByAltText('fish');
    expect(fish).toBeInTheDocument();
    expect(fish).toBeVisible();
  });

  it('should render a stone icon and quantity number', () => {
    render(<ResourceQuantity Resource={Stone} quantity={5}/>);

    const number = screen.getByText('5');
    expect(number).toBeInTheDocument();
    expect(number).toBeVisible();

    const stone = screen.getByAltText('stone');
    expect(stone).toBeInTheDocument();
    expect(stone).toBeVisible();
  });
});
