import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Status from './pages/Status';
import Payment from './pages/Payment';
import Edit from './pages/Edit';
import Signout from './pages/Signout';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Status} />
          <Route path='/payment' component={Payment} />
          <Route path='/edit' component={Edit} />
          <Route path='/signout' component={Signout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;