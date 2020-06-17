import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Homepage from './pages/Homepage'
import Header from './pages/Header'

const App = () => {
  return (


    <Router>
      {/* <Header isAuthenticated={isAuthenticated} /> */}
      {/* <Header isAuthenticated={false} /> */}
      <Switch>
        <Route path="/" exact component={Homepage} />
        {/* <Route path="/" exact component={Login} /> */}
        {/* <Route path="/register" exact component={Register} /> */}
        {/* <ProtectedRoute path='/home' exact><SearchScreen /></ProtectedRoute> */}
       

      </Switch>
    </Router>
  );
}

export default App;
