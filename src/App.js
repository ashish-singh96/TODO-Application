import React, { useState } from 'react';
import './App.css';
import Practice from './component/website/Practice/Practice';
import User from './component/website/Practice/User';

function App() {
  function HOCRed(props) {
    return <h2 style={{ backgroundColor: "red", width: "500px" }}><props.cmp></props.cmp></h2>
  }

  function HOCGreen(props) {
    return <h2 style={{ backgroundColor: "Green", width: "500px" }}><props.cmp></props.cmp></h2>
  }
  return (
    <div className='App'>
      < HOCRed cmp={Practice} />
      < HOCGreen cmp={Practice} />
    </div>
  );
}

export default App;
