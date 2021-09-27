import React, { FC } from 'react';
import { Provider } from 'react-redux';
import Router from './route';
import { store } from './store/store';

const App: FC = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
export default App;
