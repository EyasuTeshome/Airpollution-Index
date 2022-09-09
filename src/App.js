import React from 'react';

import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import TopBar from './components/TopBar';
import DetailsPage from './components/DetailsPage';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="pageContainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:countryName" element={<DetailsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
