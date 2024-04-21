import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Coin from '../components/Coin';


const App = () => {
  return (
    <div>

      <Router>
          <Routes>
          
          <Route path="/" element={<Coin/>} />
          
          
          
          </Routes>
        
      </Router>
    </div>
  );
};

export default App;

