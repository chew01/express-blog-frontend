import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../views/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
