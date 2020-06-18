import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Homepage from './pages/Homepage'
import Header from './pages/Header'
import Comment from './pages/Comment'
import Login from './pages/Login'
import Register from './pages/Register'
import { isLogin } from './redux/User/action'

const App = () => {
  const realDispatch = useDispatch()
  const data = useSelector((state) => state);
  const { userData: { loggedInUser, isAuthenticated } } = data


  useEffect(() => {
    
    realDispatch(isLogin())

  }, [])

  return (


    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/comments/:id" exact component={Comment} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        {/* <ProtectedRoute path='/home' exact><SearchScreen /></ProtectedRoute> */}
       

      </Switch>
    </Router>
  );
}

export default App;
