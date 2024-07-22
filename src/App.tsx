import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Error from './pages/Error';
import './assets/css/reset.css';
import './assets/css/main.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<Restaurant />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default App;
