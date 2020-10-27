import React from 'react';
import Status from './Status'
import Checkpayment from './Checkpayment'
import Edit from './Edit'
import Signout from './Signout'
import reactLogo from '../../images/head.png'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function MainContent() {

    return (
        <main class="page-content">
          <img src={reactLogo} alt="React logo" width="100%" />
            <Router>
        <Switch>
          <Route path='/Status' component={Status} />
          <Route path='/Checkpayment' exact component={Checkpayment } />
          <Route path='/Edit' exact component={Edit } />
          <Route path='/Signout' exact component={Signout } />
          
        </Switch>
      </Router>
        </main>

    )
}

export default MainContent;

