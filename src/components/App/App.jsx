import React, { Suspense, lazy } from 'react'
import { Toaster } from "react-hot-toast";
import { Routes, Route } from 'react-router-dom';
import AppBar from "./AppBar";
import ErrorPage from 'pages/ErrorPage';
import Loader from 'components/Loader/Loader';

const MainPage = lazy(() => import('pages/MainPage'));
const ShoppingPage = lazy(() => import("pages/ShoppingPage"));
const ShoppingCartPage = lazy(() => import("pages/ShoppingCartPage"));

const App = () => {
  return (
    <>
      <Toaster />
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/shop" element={<ShoppingPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App