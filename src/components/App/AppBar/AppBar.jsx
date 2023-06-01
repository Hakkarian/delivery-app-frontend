import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBarSheet } from './AppBar.styled';
import jepetto from 'images/boot-wings-logo.png'

const AppBar = () => {
  return (
    <AppBarSheet>
      <NavLink to="/" className='logo'>
        <img src={jepetto} alt="logo" width={60} height={64} />
      </NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </AppBarSheet>
  );
}

export default AppBar