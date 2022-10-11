import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Feed from './components/body/feed/Feed';
import Login from './components/body/login/Login';
import SidebarNews from './components/body/sidebar-news/SidebarNews';
import Sidebar from './components/body/sidebar/Sidebar';
import Header from './components/header/Header';
import {
  login,
  logout,
  selectData,
  selectUser,
  updateDisplayData,
} from './features/userSlice';
import { auth } from './firebase/firebase';

function App() {
  const user = useSelector(selectUser);
  const userData = useSelector(selectData);
  const dispatch = useDispatch();
  console.log(user);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch(
  //         login({
  //           email: user.email,
  //           uid: user.uid,
  //         })
  //       );
  //       dispatch(
  //         updateDisplayData({
  //           name: userData.name || 'userName',
  //           photoUrl: userData.photoUrl || '',
  //           title: userData.title,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // }, []);

  return (
    <div className={`app ${!user && 'login'}`}>
      {!user ? '' : <Header />}
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <SidebarNews />
        </div>
      )}
    </div>
  );
}

export default App;
