import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import Router from './route';
import { store } from './store/store';

const queryCLient = new QueryClient();

const App: FC = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryCLient}>
      <Router />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </Provider>
);
export default App;
