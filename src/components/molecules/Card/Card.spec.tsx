import React from 'react';
import { render, screen } from '@testing-library/react';
import Card, { CardItem } from './Card';

describe('Card', () => {
  it('renders with title, description and children', () => {
    render(
      <Card title="Test Card" description="Test Description">
        <CardItem title="Item 1">Item Value</CardItem>
      </Card>
    );

    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item Value')).toBeInTheDocument();
  });

  it('renders without description', () => {
    render(
      <Card title="Test Card">
        <CardItem title="Item 1">Item Value</CardItem>
      </Card>
    );

    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.queryByText('Test Description')).toBeNull();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item Value')).toBeInTheDocument();
  });

  it('renders with additional className', () => {
    render(
      <Card title="Test Card" className="extra-class">
        <CardItem title="Item 1">Item Value</CardItem>
      </Card>
    );

    const card = screen.getByText('Test Card').closest('.assignment-card');
    expect(card).toHaveClass('extra-class');
  });
});

describe('CardItem', () => {
  it('renders with title and children', () => {
    render(<CardItem title="Item 1">Item Value</CardItem>);

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item Value')).toBeInTheDocument();
  });
});