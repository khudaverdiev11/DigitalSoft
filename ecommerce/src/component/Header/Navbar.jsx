import React from 'react'
import HeaderSearch from './HeaderSearch';

const Navbar=()=> {
    return (
        <div className="navbar">
            <div className="nav">
                <ul>
                    <li>
                        <p className="nav-item">Home</p>
                        </li>
                    <li>
                        <p className="nav-item">Megamenu</p>
                        </li>
                    <li>
                        <p className="nav-item">Shop</p>
                        </li>
                    <li>
                        <p className="nav-item">Blog</p>
                        </li>
                    <li>
                        <p className="nav-item">Account</p>
                        </li>
                    <li>
                        <p className="nav-item">Pages</p>
                        </li>
                    <li>
                        <p className="nav-item">But Theme</p>
                        </li>
                </ul>

            </div>
            <div className="contact">
                <p><span>Call Us:</span> 800 060-0730 </p>
            </div>

        </div>
    )
}
export default Navbar;
