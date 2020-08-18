import React from 'react';
import {render, screen} from '@testing-library/react';
import ResourceStack from './ResourceStack';
import Wood from '../logos/Wood';
import Fish from '../logos/Fish';
import Stone from '../logos/Stone';

describe('Display a stack of a resource', () => {
  it('should render a stack of woods', () => {
    render(<ResourceStack Resource={Wood} quantity={4}/>);

    const woods = screen.getAllByAltText('wood');
    expect(woods).toHaveLength(4);

    for (const wood of woods) {
      expect(wood).toBeInTheDocument();
      expect(wood).toBeVisible();
    }
  });

  it('should render a stack of fish', () => {
    render(<ResourceStack Resource={Fish} quantity={3}/>);

    const fish = screen.getAllByAltText('fish');
    expect(fish).toHaveLength(3);

    for (const aFish of fish) {
      expect(aFish).toBeInTheDocument();
      expect(aFish).toBeVisible();
    }
  });

  it('should render a stack of stone', () => {
    render(<ResourceStack Resource={Stone} quantity={5}/>);

    const stones = screen.getAllByAltText('stone');
    expect(stones).toHaveLength(5);

    for (const stone of stones) {
      expect(stone).toBeInTheDocument();
      expect(stone).toBeVisible();
    }
  });
});
