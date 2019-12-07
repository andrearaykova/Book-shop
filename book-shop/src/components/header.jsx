import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="navbar-menu">
                <navLink href="/">Book Store</navLink>
                <navLink href="/" className="active" aria-current="page">Home</navLink>
                <navLink href="/store">Store</navLink>
                <navLink href="/orders">My Orders</navLink>
                <navLink href="/cart">Cart</navLink>
                <navLink href="javascript:void(0)">Logout</navLink></nav>
        </header>
    );
};

export default Header;