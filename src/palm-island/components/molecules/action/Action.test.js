import React from 'react';
import {render, screen} from '@testing-library/react';
import Action from './Action';
import {aBunchOfResources, anAction} from '@internal/library/fixtures';
import {ACTION} from '@internal/library/constants';

it('should render a store action', () => {
  render(<Action {...anAction(ACTION.STORE)}/>);

  const store = screen.getByAltText('store');
  expect(store).toBeInTheDocument();
  expect(store).toBeVisible();

  const actionSeparator = screen.getByText(':');
  expect(actionSeparator).toBeInTheDocument();
  expect(actionSeparator).toBeVisible();
  expect(actionSeparator).toHaveClass('action-separator');
});

it('should render a rotate action', () => {
  render(<Action {...anAction(ACTION.ROTATE)}/>);

  const rotate = screen.getByAltText('rotate');
  expect(rotate).toBeInTheDocument();
  expect(rotate).toBeVisible();

  const actionSeparator = screen.getByText(':');
  expect(actionSeparator).toBeInTheDocument();
  expect(actionSeparator).toBeVisible();
  expect(actionSeparator).toHaveClass('action-separator');
});

it('should render a flip action', () => {
  render(<Action {...anAction(ACTION.FLIP)}/>);

  const flip = screen.getByAltText('flip');
  expect(flip).toBeInTheDocument();
  expect(flip).toBeVisible();

  const actionSeparator = screen.getByText(':');
  expect(actionSeparator).toBeInTheDocument();
  expect(actionSeparator).toBeVisible();
  expect(actionSeparator).toHaveClass('action-separator');
});

it('should render one bunch of resources', () => {
  render(<Action {...anAction(ACTION.STORE, [aBunchOfResources(1, 2, 3)])}/>);

  const wood = screen.getByAltText('wood');
  expect(wood).toBeInTheDocument();
  expect(wood).toBeVisible();

  const fish = screen.getByAltText('fish');
  expect(fish).toBeInTheDocument();
  expect(fish).toBeVisible();

  const stone = screen.getByAltText('stone');
  expect(stone).toBeInTheDocument();
  expect(stone).toBeVisible();

  const resourceSeparator = screen.queryByText('/');
  expect(resourceSeparator).toBeNull();
});

it('should render multiple bunches of resources', () => {
  render(<Action {...anAction(ACTION.STORE, [
    aBunchOfResources(3, 2, 1),
    aBunchOfResources(1, 2, 3),
    aBunchOfResources(2, 4, 2)
  ])}/>);

  const woods = screen.getAllByAltText('wood');
  expect(woods).toHaveLength(3);

  const fishes = screen.getAllByAltText('fish');
  expect(fishes).toHaveLength(3);

  const stones = screen.getAllByAltText('stone');
  expect(stones).toHaveLength(3);

  const resourceSeparators = screen.queryAllByText('/');
  expect(resourceSeparators).toHaveLength(2);
  for (const resourceSeparator of resourceSeparators) {
    expect(resourceSeparator).toBeInTheDocument();
    expect(resourceSeparator).toBeVisible();
    expect(resourceSeparator).toHaveClass('resources-separator');
  }
});
