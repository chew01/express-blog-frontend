import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '../views/Home';
import DetailedPost from '../views/DetailedPost';
import Tag from '../views/Tag';
import User from '../views/User';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:postLink" element={<DetailedPost />} />
        <Route path="/tags/:tagName" element={<Tag />} />
        <Route path="/users/:userName" element={<User />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
