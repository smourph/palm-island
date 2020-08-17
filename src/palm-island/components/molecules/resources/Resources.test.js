import React from 'react';
import {render, screen} from '@testing-library/react';
import Resources from './Resources';

describe('Display a bunch of resources', () => {
  it('should render a bunch of woods', () => {
    render(<Resources wood={5}/>);

    const woods = screen.getAllByAltText('wood');
    expect(woods).toHaveLength(5);

    for (const wood of woods) {
      expect(wood).toBeInTheDocument();
      expect(wood).toBeVisible();
    }
  });

  it('should render a bunch of fish', () => {
    render(<Resources fish={4}/>);

    const fish = screen.getAllByAltText('fish');
    expect(fish).toHaveLength(4);

    for (const aFish of fish) {
      expect(aFish).toBeInTheDocument();
      expect(aFish).toBeVisible();
    }
  });

  it('should render a bunch of stones', () => {
    render(<Resources stone={3}/>);

    const stones = screen.getAllByAltText('stone');
    expect(stones).toHaveLength(3);

    for (const stone of stones) {
      expect(stone).toBeInTheDocument();
      expect(stone).toBeVisible();
    }
  });

  it('should render a bunch of resources', () => {
    render(<Resources
      wood={2}
      fish={3}
      stone={4}/>);

    const woods = screen.getAllByAltText('wood');
    expect(woods).toHaveLength(2);

    const fish = screen.getAllByAltText('fish');
    expect(fish).toHaveLength(3);

    const stones = screen.getAllByAltText('stone');
    expect(stones).toHaveLength(4);
  });

  it('should render a bunch of resources with an empty resource', () => {
    render(<Resources
      wood={5}
      fish={0}
      stone={2}/>);

    const woods = screen.getAllByAltText('wood');
    expect(woods).toHaveLength(5);

    const fish = screen.queryAllByText('fish');
    expect(fish).toHaveLength(0);

    const stones = screen.getAllByAltText('stone');
    expect(stones).toHaveLength(2);
  });
});

describe('Display icon and quantity number', () => {
  it('should render one wood icon and quantity number', () => {
    render(<Resources
      wood={6}
      showQuantityNumber={true}/>);

    const number = screen.getByText('6');
    expect(number).toBeInTheDocument();
    expect(number).toBeVisible();

    const wood = screen.getByAltText('wood');
    expect(wood).toBeInTheDocument();
    expect(wood).toBeVisible();
  });

  it('should render one fish icon and quantity number', () => {
    render(<Resources
      fish={7}
      showQuantityNumber={true}/>);

    const number = screen.getByText('7');
    expect(number).toBeInTheDocument();
    expect(number).toBeVisible();

    const fish = screen.getByAltText('fish');
    expect(fish).toBeInTheDocument();
    expect(fish).toBeVisible();
  });

  it('should render one stone icon and quantity number', () => {
    render(<Resources
      stone={8}
      showQuantityNumber={true}/>);

    const number = screen.getByText('8');
    expect(number).toBeInTheDocument();
    expect(number).toBeVisible();

    const stone = screen.getByAltText('stone');
    expect(stone).toBeInTheDocument();
    expect(stone).toBeVisible();
  });

  it('should render multiple icons and quantity numbers', () => {
    render(<Resources
      wood={5}
      fish={4}
      stone={3}
      showQuantityNumber={true}/>);

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
    render(<Resources
      wood={3}
      fish={0}
      stone={4}
      showQuantityNumber={true}/>);

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
