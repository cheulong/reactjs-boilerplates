import React, { FC } from 'react';
import UserList from '../components/UserList';
import UserContents from '../contents/Users.content';

const Users: FC = () => <UserList users={UserContents} />;

export default Users;
