import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import AuthPage from './pages/auth/auth-page.component'

import Header from './components/header/header.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

const App = () => {
  const [ currentUser, setCurrentUser ] = useState(null)

  let unsubscribeFromAuth = null

  // on mount
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async user => createUserProfileDocument(user))
  }, [])

  // on dismount
  useLayoutEffect(() => {
    if (unsubscribeFromAuth) {
      unsubscribeFromAuth()
    }
  }, [])

  return (
   <div>
     <Header 
      currentUser={currentUser}
     />
     <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={AuthPage} />
      </Switch>
   </div>
  )
}

export default App;

