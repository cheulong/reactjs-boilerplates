import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/nav/Navbar';
import UserDetail from '../components/UserDetail';
import About from '../pages/About';
import Home from '../pages/Home';
import UserApi from '../pages/UserApi';
import Users from '../pages/Users';

const GlobalRouter: FC = () => (
  <Router>
    <div>
      <Navbar />
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/users' exact component={Users} />
      <Route path='/users/:id' exact component={UserDetail} />
      <Route path='/userApi' exact component={UserApi} />
    </div>
  </Router>
);

export default GlobalRouter;
