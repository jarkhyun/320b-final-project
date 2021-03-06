import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Wordle/Home';
import Wordle from './Wordle/Wordle';
import Quordle from './Wordle/Quordle';
import Nav from './Wordle/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/quordle" element={<Quordle />} />
      </Routes>
    </div>
  );
}

export default App;
