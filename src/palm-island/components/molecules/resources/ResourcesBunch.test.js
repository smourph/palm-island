import React from 'react';
import {render, screen} from '@testing-library/react';
import ResourcesBunch from './ResourcesBunch';

describe('Display a bunch of resources', () => {
  it('should render a bunch of woods', () => {
    render(<ResourcesBunch wood={5}/>);

    const woods = screen.getAllByAltText('wood');
    expect(woods).toHaveLength(5);
  });

  it('should render a bunch of fish', () => {
    render(<ResourcesBunch fish={4}/>);

    const fish = screen.getAllByAltText('fish');
    expect(fish).toHaveLength(4);
  });

  it('should render a bunch of stones', () => {
    render(<ResourcesBunch stone={3}/>);

    const stones = screen.getAllByAltText('stone');
    expect(stones).toHaveLength(3);
  });

  it('should render a bunch of multiple resources', () => {
    render(<ResourcesBunch wood={2} fish={3} stone={4}/>);

    const woods = screen.getAllByAltText('wood');
    expect(woods).toHaveLength(2);

    const fish = screen.getAllByAltText('fish');
    expect(fish).toHaveLength(3);

    const stones = screen.getAllByAltText('stone');
    expect(stones).toHaveLength(4);
  });

  it('should render a bunch of multiple resources with an empty one', () => {
    render(<ResourcesBunch wood={5} fish={0} stone={2}/>);

    const woods = screen.getAllByAltText('wood');
    expect(woods).toHaveLength(5);

    const fish = screen.queryAllByText('fish');
    expect(fish).toHaveLength(0);

    const stones = screen.getAllByAltText('stone');
    expect(stones).toHaveLength(2);
  });
});

