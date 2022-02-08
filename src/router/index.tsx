import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Favorites } from '../pages/Favorites';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}
