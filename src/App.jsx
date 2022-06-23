import React from 'react';
import './App.css'; 
import { HashRouter } from 'react-router-dom';
import Router from './routes/index';

function App() {
  return (
    <HashRouter>
      <Router/>
    </HashRouter>
  );
}

export default App;
