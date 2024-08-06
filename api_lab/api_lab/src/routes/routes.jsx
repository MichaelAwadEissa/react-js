import { BrowserRouter, Routes, Route } from "react-router-dom";

import {lazy } from "react";

const Homepage = lazy(() => import('../pages/home'));
const NotfoundPage = lazy(() => import("../pages/NotfoundPage/NotfoundPage"));


export default function AppRoute() {
    return (
      <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />}>
              </Route>
              <Route path="/register" element={<register />} />
              <Route path="*" element={<NotfoundPage />} />
            </Routes>
          </BrowserRouter>
      </>
    );
  }