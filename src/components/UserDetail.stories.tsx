/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter, Route } from 'react-router-dom';
import UserDetail from './UserDetail';

export default {
  title: 'components/UserDetail',
  component: UserDetail,
  parameters: {
    actions: {
      handles: ['click', 'button'],
    },
  },
} as ComponentMeta<typeof UserDetail>;

const Template: ComponentStory<any> = (args: any) => {
  const { path } = args;
  return (
    <MemoryRouter initialEntries={path}>
      <Route
        component={(routerProps: any) => <UserDetail {...routerProps} />}
        path='/users/:id'
      />
    </MemoryRouter>
  );
};
// @param arg
export const Normal = Template.bind({});
Normal.args = { path: ['/users/1'] };
