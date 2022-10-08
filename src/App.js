import React from 'react';

import './App.css';
import Sidebar from './components/body/sidebar/Sidebar';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
