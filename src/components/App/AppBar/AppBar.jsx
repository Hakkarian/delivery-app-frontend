import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBarSheet } from './AppBar.styled';

const AppBar = () => {
  return (
    <AppBarSheet>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </AppBarSheet>
  );
}

export default AppBar