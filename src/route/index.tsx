import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/nav/Navbar';
import UserDetail from '../components/UserDetail';
import About from '../pages/About';
import Home from '../pages/Home';
import Users from '../pages/Users';

const GlobalRouter: FC = () => (
  <Router>
    <div>
      <Navbar />
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/users' exact component={Users} />
      <Route path='/users/:id' exact component={UserDetail} />
    </div>
  </Router>
);

export default GlobalRouter;
