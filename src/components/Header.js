import React from "react";

import logo from '../assets/img-logo.png';

import '../styles/header.css';

export default function Header(){
    return(
            <header className="header">
                <div className="logo-container">
                        <img src={logo} className="logo" />
                    </div>

                    <div className="menu-container">
                        <span>Tecidos</span>
                        <span>Fabricacao</span>
                        <span>Design</span>
                    </div>

                    <div className='search-and-partners'>
                        <span className="material-symbols-outlined search">search</span>

                        <div className='partners-container'>
                            <span className='partners'>Parceiros</span>
                            <span class="material-symbols-outlined">arrow_drop_down</span>
                    </div>
                </div>
            </header>
    );
}