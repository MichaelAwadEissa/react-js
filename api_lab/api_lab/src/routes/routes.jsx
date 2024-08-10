import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../pages/register/register';
import NotfoundPage from '../pages/notfound/notfound';
import NavBar from '../components/navbar/navbar';
import ProdDetalies from '../components/Products/productDetailes';
import Homepage from '../pages/home/home';
import LogIn from '../pages/log in/logIn';
import Cart from '../components/ShoppingCart/shopping Cart';

export default function AppRoute() {
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detailes/:id" element={<ProdDetalies />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
