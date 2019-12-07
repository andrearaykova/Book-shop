import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar-menu">
                <NavLink to="/" activeclassName="active" aria-current="page">Home</NavLink>
                <NavLink to="/" activeclassName="active">Book Store</NavLink>
                <NavLink to="/store" activeclassName="active">Store</NavLink>
                <NavLink to="/orders" activeclassName="active">My Orders</NavLink>
                <NavLink to="/cart" activeclassName="active">Cart</NavLink>
                <NavLink to="/logout">Logout</NavLink>
                </nav>
        </header>
    );
};

export default Header;