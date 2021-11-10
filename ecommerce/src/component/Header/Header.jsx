import React from 'react'
import HeaderSearch from './HeaderSearch';
import Navbar from './Navbar';

const Header=()=> {
    return (
        <div className="header">
            <HeaderSearch/>
            <Navbar/>
        </div>
    )
}
export default Header;
