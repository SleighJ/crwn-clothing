import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import AuthPage from './pages/auth/authentication-page.component'

import Header from './components/header/header.component'

const App = () => {
  const [ currentUser, setCurrentUser ] = useState(null)

  return (
   <div>
     <Header 
      currentUser={currentUser}
     />
     {/* <div className='content'> */}
       <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/auth' component={AuthPage} />
        </Switch>
     {/* </div> */}
   </div>
  )
}

export default App;

