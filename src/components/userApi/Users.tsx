import React, { FC } from 'react';
import { useQuery } from 'react-query';
import * as api from '../../api/usersApi';

const Users: FC = () => {
  const { data, isLoading, isError, error } = useQuery('users', api.getUsers);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>error {error}</div>;
  }
  return (
    <div>
      <ul>
        {data?.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
