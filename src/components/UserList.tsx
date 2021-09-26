import React, { FC } from 'react';
import { UserType } from '../types/User.type';
import User from './User';

interface UsersProps {
  users: UserType[];
}

const UserList: FC<UsersProps> = ({ users }: UsersProps) => (
  <div data-testid='users'>
    {users.map((item) => (
      <User user={item} key={item.id} />
    ))}
  </div>
);

export default UserList;
