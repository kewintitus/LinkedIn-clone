import React from 'react';

import './App.css';
import Feed from './components/body/feed/Feed';
import Sidebar from './components/body/sidebar/Sidebar';
import Header from './components/header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
