import React, { useState } from 'react';
import './App.css';
import Practice from './component/website/Practice/Practice';
import User from './component/website/Practice/User';
function App() {
  function parentAlret(data){
    alert(data);
  }
  return (
    <div className='App'>
      <h1>Lifting state up</h1>
      <User alert={parentAlret}/>
    </div>
  );
}

export default App;
