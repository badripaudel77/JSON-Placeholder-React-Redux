import React from 'react';
import './App.css';

import Posts from './components/Posts';

function App() {
  return (
      <div className="app">
          <h1 style={{textAlign : 'center', marginBottom : '15px', borderBottom : '5px solid orange'}}>Reduxify Your React Application with redux and redux-thunk.</h1>
          <Posts />
      </div>
  );
}

export default App;
