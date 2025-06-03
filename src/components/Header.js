import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from '../assets/img-logo.png';

import '../styles/header.css';

export default function Header(){
    
    const [showSearch, setShowSearch] = useState(false);
    const [userSearch, setUserSearch] = useState('');

    const navigate = useNavigate();

    function Search(){
        setShowSearch(prev => !prev)
    }

    function searchKeydown(e){
        if (e.key === 'Enter' && userSearch.trim() != ''){
            navigate(`/search?q=${encodeURIComponent(userSearch.trim())}`);
        }
    }

    return(
            <header className="header">
                <div className="logo-container">
                    <Link to='/'><img src={logo} className="logo" /></Link>
                </div>

                <div className="menu-container">
                    <Link to='/tecidos'>Tecidos<span class="material-symbols-outlined">arrow_drop_down</span></Link>
                    <Link to='/fabricacao'>Fabricação<span class="material-symbols-outlined">arrow_drop_down</span></Link>
                    <Link to='/design'>Design<span class="material-symbols-outlined">arrow_drop_down</span></Link>
                </div>

                <div className='search-and-partners'>

                    {showSearch && (
                        <input 
                            id="searchInput"
                            type="text"
                            placeholder="Buscar..."
                            className="seach-input"
                            value={userSearch}
                            onChange={(e) => setUserSearch(e.target.value)}
                            onKeyDown={searchKeydown}
                        />
                    )}

                    <span className="material-symbols-outlined search" id="search-btn" onClick={Search}>search</span>


                    <div className='partners-container'>
                        <span className='partners'>Parceiros</span>
                        <span class="material-symbols-outlined" id="partnersArrow">arrow_drop_down</span>
                    </div>
                </div>
            </header>
    );
}