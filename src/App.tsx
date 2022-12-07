import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css'
import { Landing } from './view/landing';

function App() {
  return (
    <Routes>
      <Route path='/'  element={<Landing/>}/>
      <Route path='/login' element={<div>Login</div>}/>
      
      <Route path='*' element={<div>Not Found and Navigating previous screen features here </div>} />
    </Routes>
  );
}

export default App;
