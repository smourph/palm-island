import { render, screen } from '@testing-library/react';
import Index from './index';

describe('Index', () => {
  it('should render', () => {
    const { container } = render(<Index/>);

    expect(container).toMatchSnapshot();
  });

  it('should display board', () => {
    render(<Index/>);

    const board = screen.getByRole('table');
    expect(board).toBeInTheDocument();
    expect(board.id).toBe('board');

    const boardContent = screen.getByRole('rowgroup');
    expect(boardContent).toBeInTheDocument();

    const boardCells = screen.getAllByRole('cell');
    expect(boardCells).toHaveLength(9);
  });

  it('should display footer', () => {
    render(<Index/>);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer.textContent).toBe('Palm Island game');
  });
});
