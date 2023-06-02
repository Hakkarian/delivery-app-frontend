import React, { Suspense, lazy } from 'react'
import { Toaster } from "react-hot-toast";
import { Routes, Route } from 'react-router-dom';
import AppBar from "./AppBar";
import Loader from 'components/Loader/Loader';

const MainPage = lazy(() => import('pages/MainPage'));
const ShoppingPage = lazy(() => import("pages/ShoppingPage"));
const ShoppingCartPage = lazy(() => import("pages/ShoppingCartPage"));
const ErrorPage = lazy(() => import("pages/ErrorPage"));
const HistoryPage = lazy(() => import("pages/HistoryPage"));

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
          <Route path="/history" element={<HistoryPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App