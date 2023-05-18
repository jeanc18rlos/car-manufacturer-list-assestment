import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('calls loadMore with the current page when button is clicked', () => {
    const loadMore = jest.fn();
    const currentPage = 2;

    const { getByText } = render(
      <Pagination currentPage={currentPage} loadMore={loadMore} />
    );

    fireEvent.click(getByText('Load More'));
    expect(loadMore).toHaveBeenCalledWith(currentPage);
  });
});
