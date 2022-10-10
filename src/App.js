import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import Feed from './components/body/feed/Feed';
import Login from './components/body/login/Login';
import Sidebar from './components/body/sidebar/Sidebar';
import Header from './components/header/Header';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div className={`app ${!user && 'login'}`}>
      {!user ? '' : <Header />}
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
