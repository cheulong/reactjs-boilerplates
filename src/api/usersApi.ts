/* eslint-disable @typescript-eslint/no-shadow */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getUsers = () => api.get('/users').then((res) => res.data);

export const getUser = (id: number) =>
  api.get(`/users/${id}`).then((res) => res.data);

export const updateUser = <T extends { id: number }>({
  id,
  ...updateUser
}: T) => api.put(`/users/${id}`, updateUser).then((res) => res.data);
