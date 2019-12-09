import React from 'react';
import { NavLink } from 'react-router-dom';
import { userConsumer, UserConsumer } from '../components/contexs/user-contex';

const Header = ({ isLoggedIn, username }) => {
    return (
        <header>
            <nav className="navbar-menu">
                <NavLink to="/" activeclassName="active" aria-current="page">Home</NavLink>
                <NavLink to="/" activeclassName="active">Book Store</NavLink>
                <NavLink to="/store" activeclassName="active">Store</NavLink>
                <NavLink to="/orders" activeclassName="active">My Orders</NavLink>
                <NavLink to="/cart" activeclassName="active">Cart</NavLink>
                {
                    isLoggedIn
                        ? <NavLink to="/logout">Logout</NavLink>
                        : <NavLink to="/login">Log in</NavLink>
                }
                {
                    isLoggedIn
                        ? <span>Hello, {username}</span>
                        : null
                }
            </nav>
        </header>
    );
};

const HeaderWithContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn, username }) => (
                    <Header {...props} isLoggedIn={isLoggedIn} username={username} />
                )
            }
        </UserConsumer>
    );
};

export default HeaderWithContext;