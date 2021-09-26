/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import User from './User';
import UserContents from '../contents/Users.content';

export default {
  title: 'components/User',
  component: User,
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args) => <User {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  user: UserContents[0],
};
