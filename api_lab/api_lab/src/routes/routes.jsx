import React from 'react';
import { BrowserRouter, Routes,Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';


import Homepage from '../pages/home/home';
import LogIn from '../pages/log in/logIn';
// const NotfoundPage = lazy(() => import("../pages/NotfoundPage/NotfoundPage"));

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" Component={Homepage}/>
          <Route path="/login" Component={LogIn}/>

          {/* Uncomment and use these routes as needed */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="*" element={<NotfoundPage />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
