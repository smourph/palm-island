import React from 'react';
import {render, screen} from '@testing-library/react';
import ResourcesCost from './ResourcesCost';

describe('Display icon and quantity number', () => {
  it('should render one wood icon and quantity number', () => {
    render(<ResourcesCost wood={6}/>);

    const number = screen.getByText('6');
    expect(number).toBeInTheDocument();
    expect(number).toBeVisible();

    const wood = screen.getByAltText('wood');
    expect(wood).toBeInTheDocument();
    expect(wood).toBeVisible();
  });

  it('should render one fish icon and quantity number', () => {
    render(<ResourcesCost fish={7}/>);

    const number = screen.getByText('7');
    expect(number).toBeInTheDocument();
    expect(number).toBeVisible();

    const fish = screen.getByAltText('fish');
    expect(fish).toBeInTheDocument();
    expect(fish).toBeVisible();
  });

  it('should render one stone icon and quantity number', () => {
    render(<ResourcesCost stone={8}/>);

    const number = screen.getByText('8');
    expect(number).toBeInTheDocument();
    expect(number).toBeVisible();

    const stone = screen.getByAltText('stone');
    expect(stone).toBeInTheDocument();
    expect(stone).toBeVisible();
  });

  it('should render multiple icons and quantity numbers', () => {
    render(<ResourcesCost wood={5} fish={4} stone={3}/>);

    const numberWood = screen.getByText('5');
    expect(numberWood).toBeInTheDocument();
    expect(numberWood).toBeVisible();

    const wood = screen.getByAltText('wood');
    expect(wood).toBeInTheDocument();
    expect(wood).toBeVisible();

    const numberFish = screen.getByText('4');
    expect(numberFish).toBeInTheDocument();
    expect(numberFish).toBeVisible();

    const fish = screen.getByAltText('fish');
    expect(fish).toBeInTheDocument();
    expect(fish).toBeVisible();

    const numberStone = screen.getByText('3');
    expect(numberStone).toBeInTheDocument();
    expect(numberStone).toBeVisible();

    const stone = screen.getByAltText('stone');
    expect(stone).toBeInTheDocument();
    expect(stone).toBeVisible();
  });

  it('should render multiple icons and quantity numbers with an empty resource', () => {
    render(<ResourcesCost wood={3} fish={0} stone={4}/>);

    const numberWood = screen.getByText('3');
    expect(numberWood).toBeInTheDocument();
    expect(numberWood).toBeVisible();

    const wood = screen.getByAltText('wood');
    expect(wood).toBeInTheDocument();
    expect(wood).toBeVisible();

    const numberFish = screen.queryByText('0');
    expect(numberFish).toBeNull();

    const fish = screen.queryByAltText('fish');
    expect(fish).toBeNull();

    const numberStone = screen.getByText('4');
    expect(numberStone).toBeInTheDocument();
    expect(numberStone).toBeVisible();

    const stone = screen.getByAltText('stone');
    expect(stone).toBeInTheDocument();
    expect(stone).toBeVisible();
  });
});
