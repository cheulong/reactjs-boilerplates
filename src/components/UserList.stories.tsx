/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserContents from '../contents/Users.content';
import UserList from './UserList';

export default {
  title: 'components/Users',
  component: UserList,
} as ComponentMeta<typeof UserList>;

const Template: ComponentStory<typeof UserList> = (args) => (
  <UserList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  users: UserContents,
};
