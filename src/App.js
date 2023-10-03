import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import GovernoratePage from './components/GovernoratePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/governorate/:id" element={<GovernoratePage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
