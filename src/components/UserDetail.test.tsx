import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import UserDetail from './UserDetail';

jest.mock('react-router-dom', () => ({
  useParams: () => ({
    id: '1',
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('UserDetail', () => {
  afterEach(cleanup);
  it('renders user detail', () => {
    const { getByTestId } = render(<UserDetail />);
    const firstName = getByTestId('firstName');
    expect(firstName.textContent).toBe('First Name: Alex');
  });

  it('calls onClick prop when clicked', () => {
    render(<UserDetail />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button.textContent).toBe('Go home');
  });
});
