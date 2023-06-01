import React from 'react'

import {Routes, Route} from 'react-router-dom';
import ShoppingPage from 'pages/ShoppingPage';
import MainPage from 'pages/MainPage';
import ShoppingCartPage from 'pages/ShoppingCartPage';
import AppBar from './AppBar';

const App = () => {
  return (
    <><AppBar  />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
      <Route path="/shop" element={<ShoppingPage />} />
    </Routes>
    </>
  );
}

export default App