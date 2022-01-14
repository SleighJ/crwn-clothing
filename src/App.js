import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import {AuthContext} from './pages/auth/auth.context'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import AuthPage from './pages/auth/auth-page.component'

import Header from './components/header/header.component'


function App() {
  return (
   <div>
     <Header />
     <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        {/* <AuthContext.Consumer> */}
        <Route path='/signin' component={AuthPage} />
        {/* </AuthContext.Consumer> */}
      </Switch>
   </div>
  )
}

export default App;

