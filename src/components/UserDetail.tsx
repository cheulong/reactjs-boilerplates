import React, { FC } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import UserContents from '../contents/Users.content';
import { UserType } from '../types/User.type';
import './UserDetail.css';

const UserDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const userDetail = UserContents.filter(
    (user: UserType) => user.id.toString() === id
  );

  const handleClick = () => {
    history.push('/');
  };

  return (
    <>
      <button type='button' onClick={handleClick}>
        Go home
      </button>
      <div className='userDetail-container'>
        <p>{userDetail[0].id}</p>
        <p>First Name: {userDetail[0].firstName}</p>
        <p>Last Name: {userDetail[0].lastName}</p>
        <p>Age: {userDetail[0].age}</p>
      </div>
    </>
  );
};

export default UserDetail;
