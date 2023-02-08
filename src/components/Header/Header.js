import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='top'>
            {/* <NavLink to='/friends'>Friends</NavLink>
                <NavLink to="/posts">Posts</NavLink> */}
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/orders'>Orders</NavLink>
        </div>
    );
};

export default Header;