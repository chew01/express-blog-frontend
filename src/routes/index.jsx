import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '../views/Home';
import DetailedPost from '../views/DetailedPost';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:postLink" element={<DetailedPost />} />
        <Route path="/tags/:tagName" element="" />
        <Route path="/users/:userName" element="" />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
