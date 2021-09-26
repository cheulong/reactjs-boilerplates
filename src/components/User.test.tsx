import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserContents from '../contents/Users.content';
import { Normal } from './User.stories';

const user = UserContents[0];

describe('User', () => {
  it('renders a user', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Normal user={user} />
      </MemoryRouter>
    );
    const firstName = getByTestId('firstName');
    expect(firstName.textContent).toBe('First Name: Alex');
  });
});
