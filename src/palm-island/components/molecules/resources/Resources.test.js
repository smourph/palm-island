import React from 'react';
import {render, screen} from '@testing-library/react';
import Resources from './Resources';

describe('Display a bunch of resources', () => {
  it('should render a bunch of woods', () => {
    render(<Resources wood={5}/>);

    const woods = screen.getAllByRole('img', {hidden: true});
    expect(woods).toHaveLength(5);

    for (const wood of woods) {
      expect(wood).toBeInTheDocument();
      expect(wood).toBeVisible();
      expect(wood).toHaveAttribute('data-icon', 'tree');
    }
  });

  it('should render a bunch of fish', () => {
    render(<Resources fish={4}/>);

    const fish = screen.getAllByRole('img', {hidden: true});
    expect(fish).toHaveLength(4);

    for (const aFish of fish) {
      expect(aFish).toBeInTheDocument();
      expect(aFish).toBeVisible();
      expect(aFish).toHaveAttribute('data-icon', 'fish');
    }
  });

  it('should render a bunch of stones', () => {
    render(<Resources stone={3}/>);

    const stones = screen.getAllByRole('img', {hidden: true});
    expect(stones).toHaveLength(3);

    for (const stone of stones) {
      expect(stone).toBeInTheDocument();
      expect(stone).toBeVisible();
      expect(stone).toHaveAttribute('data-icon', 'gem');
    }
  });

  it('should render a bunch of resources', () => {
    render(<Resources
      wood={2}
      fish={3}
      stone={4}/>);

    const icons = screen.getAllByRole('img', {hidden: true});
    expect(icons).toHaveLength(9);

    for (const icon of icons) {
      expect(icon).toBeInTheDocument();
      expect(icon).toBeVisible();
    }

    for (let i = 0; i < 2; i++) {
      expect(icons[0]).toHaveAttribute('data-icon', 'tree');
    }

    for (let i = 2; i < 5; i++) {
      expect(icons[i]).toHaveAttribute('data-icon', 'fish');
    }

    for (let i = 5; i < 9; i++) {
      expect(icons[i]).toHaveAttribute('data-icon', 'gem');
    }
  });

  it('should render a bunch of resources with an empty resource', () => {
    render(<Resources
      wood={5}
      fish={0}
      stone={2}/>);

    const icons = screen.getAllByRole('img', {hidden: true});
    expect(icons).toHaveLength(7);

    for (const icon of icons) {
      expect(icon).toBeInTheDocument();
      expect(icon).toBeVisible();
    }

    for (let i = 0; i < 5; i++) {
      expect(icons[0]).toHaveAttribute('data-icon', 'tree');
    }

    for (let i = 5; i < 7; i++) {
      expect(icons[i]).toHaveAttribute('data-icon', 'gem');
    }
  });
});

describe('Display resource and quantity number', () => {
  it('should render one wood icon and quantity number', () => {
    render(<Resources
      wood={6}
      showQuantityNumber={true}/>);

    const number = screen.getByText('6');
    expect(number).toBeInTheDocument();
    expect(number).toBeVisible();

    const wood = screen.getByRole('img', {hidden: true});
    expect(wood).toBeInTheDocument();
    expect(wood).toBeVisible();
    expect(wood).toHaveAttribute('data-icon', 'tree');
  });

  it('should render one fish icon and quantity number', () => {
    render(<Resources
      fish={7}
      showQuantityNumber={true}/>);

    const number = screen.getByText('7');
    expect(number).toBeInTheDocument();
    expect(number).toBeVisible();

    const fish = screen.getByRole('img', {hidden: true});
    expect(fish).toBeInTheDocument();
    expect(fish).toBeVisible();
    expect(fish).toHaveAttribute('data-icon', 'fish');
  });

  it('should render one stone icon and quantity number', () => {
    render(<Resources
      stone={8}
      showQuantityNumber={true}/>);

    const number = screen.getByText('8');
    expect(number).toBeInTheDocument();
    expect(number).toBeVisible();

    const stone = screen.getByRole('img', {hidden: true});
    expect(stone).toBeInTheDocument();
    expect(stone).toBeVisible();
    expect(stone).toHaveAttribute('data-icon', 'gem');
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

    const numberFish = screen.getByText('4');
    expect(numberFish).toBeInTheDocument();
    expect(numberFish).toBeVisible();

    const numberStone = screen.getByText('3');
    expect(numberStone).toBeInTheDocument();
    expect(numberStone).toBeVisible();

    const icons = screen.getAllByRole('img', {hidden: true});
    expect(icons).toHaveLength(3);

    for (const icon of icons) {
      expect(icon).toBeInTheDocument();
      expect(icon).toBeVisible();
    }

    expect(icons[0]).toHaveAttribute('data-icon', 'tree');
    expect(icons[1]).toHaveAttribute('data-icon', 'fish');
    expect(icons[2]).toHaveAttribute('data-icon', 'gem');
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

    const numberFish = screen.queryByText('0');
    expect(numberFish).toBeNull();

    const numberStone = screen.getByText('4');
    expect(numberStone).toBeInTheDocument();
    expect(numberStone).toBeVisible();

    const icons = screen.getAllByRole('img', {hidden: true});
    expect(icons).toHaveLength(2);

    for (const icon of icons) {
      expect(icon).toBeInTheDocument();
      expect(icon).toBeVisible();
    }

    expect(icons[0]).toHaveAttribute('data-icon', 'tree');
    expect(icons[1]).toHaveAttribute('data-icon', 'gem');
  });
});
