import React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/img-logo.png';

import '../styles/header.css';

export default function Header(){
    return(
            <header className="header">
                <div className="logo-container">
                    <Link to='/'><img src={logo} className="logo" /></Link>
                </div>

                <div className="menu-container">
                    <Link to='#'>Tecidos<span class="material-symbols-outlined">arrow_drop_down</span></Link>
                    <Link to='/fabricacao'>Fabricação<span class="material-symbols-outlined">arrow_drop_down</span></Link>
                    <Link to='/design'>Design<span class="material-symbols-outlined">arrow_drop_down</span></Link>
                </div>

                <div className='search-and-partners'>
                    <span className="material-symbols-outlined search">search</span>

                    <div className='partners-container'>
                        <span className='partners'>Parceiros</span>
                        <span class="material-symbols-outlined" id="partnersArrow">arrow_drop_down</span>
                    </div>
                </div>
            </header>
    );
}