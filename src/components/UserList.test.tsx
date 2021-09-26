import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserContents from '../contents/Users.content';
import { Normal } from './UserList.stories';

const users = UserContents;

describe('Users', () => {
  it('renders users', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Normal users={users} />
      </MemoryRouter>
    );
    const usersId = getByTestId('users');
    expect(usersId.childElementCount).toBe(3);
  });
});
