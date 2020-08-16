import React from 'react';
import {render} from '@testing-library/react';
import Board from './Board';

test('should render Board', () => {
  const {container} = render(<Board G={{}} ctx={{}} moves={{}} events={{}}/>);

  const board = container.firstChild;
  expect(board).toBeInTheDocument();
  expect(board).toBeVisible();
  expect(board).toHaveClass('board');
});
