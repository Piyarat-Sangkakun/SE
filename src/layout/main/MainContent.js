import React from 'react';
import Status from './Status'
import Payment from './Payment'
import Edit from './Edit'
import Login from './Login'
import Register from './Register'
import reactLogo from '../../images/head.png'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

function MainContent() {

    return (
        <main class="page-content">
          <img src={reactLogo} alt="React logo" width="100%" />
            <Router>
        <Switch>
          <Route path='/'exact component={Home} />

          <Route path='/Status' component={Status} />
          <Route path='/Payment'  component={Payment } />
          <Route path='/Edit'  component={Edit } />
          <Route path='/Signout'  component={Home } />


          <Route path='/Login'  component={Login } />
          <Route path='/Register'  component={Register } />

          
        </Switch>
      </Router>
        </main>

    )
}

export default MainContent;

