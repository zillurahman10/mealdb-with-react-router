import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                {/* <div className='inside-navbar'> */}
                <h3 className='logo'>Logo</h3>
                <div className='links'>
                    <Link className='link logo' to="/">Home</Link>
                    <Link className='link logo' to="restaurant">Foods</Link>
                    <Link className='link logo' to="about">About</Link>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;