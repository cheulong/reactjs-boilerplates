import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { UserType } from '../types/User.type';
import './User.css';

interface UserProps {
  user: UserType;
}
const User: FC<UserProps> = ({ user }: UserProps) => (
  <Link to={`/users/${user.id}`}>
    <div className='user-container '>
      <p data-testid='firstName'>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Age: {user.age}</p>
    </div>
  </Link>
);

export default User;
