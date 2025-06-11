import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from '../assets/img-logo.png';

import '../styles/header.css';

export default function Header(){
    
    const [showSearch, setShowSearch] = useState(false);
    const [userSearch, setUserSearch] = useState('');
    const [showPartners, setShowPartners] = useState(false);

    const navigate = useNavigate();

    function Search(){
        setShowSearch(prev => !prev);
    }

    function searchKeydown(e){
        if (e.key === 'Enter' && userSearch.trim() != ''){
            navigate(`/search?q=${encodeURIComponent(userSearch.trim())}`);
            setUserSearch('');
        }
    }

    function showPartnersBtn(){
        setShowPartners(prev => !prev);
    }

    return(
            <header className="header">
                <div className="logo-container">
                    <Link to='/'><img src={logo} className="logo" /></Link>
                </div>

                <div className="menu-container">
                    <Link to='/tecidos'>Tecidos<span className="material-symbols-outlined">arrow_drop_down</span></Link>
                    <Link to='/fabricacao'>Fabricação<span className="material-symbols-outlined">arrow_drop_down</span></Link>
                    <Link to='/design'>Design<span className="material-symbols-outlined">arrow_drop_down</span></Link>
                </div>

                <div className='search-and-partners'>

                    {showSearch && (
                        <input 
                            id="searchInput"
                            type="text"
                            placeholder="Buscar..."
                            className="search-input"
                            value={userSearch}
                            onChange={(e) => setUserSearch(e.target.value)}
                            onKeyDown={searchKeydown}
                        />
                    )}

                    {showSearch ? (
                        <span className="material-symbols-outlined close" id="search-btn" onClick={Search}>close</span>
                    ) : (
                        <span className="material-symbols-outlined search" id="search-btn" onClick={Search}>search</span>
                    )}

                    <div className='partners-container'>
                        <div className='partners-btn' onClick={showPartnersBtn}>
                            <span className='partners'>Parceiros</span>
                            <span className="material-symbols-outlined" id="partnersArrow">arrow_drop_down</span>
                        </div>

                        {showPartners && (
                                <div className="partners-list">
                                    <Link to="/adef" className="partners-item">ADEF</Link>
                                    <Link to="/cbfs" className="partners-item">CBFS</Link>
                                    <Link to="/sub17" className="partners-item">SUB 17</Link>
                                    <Link to="/lff" className="partners-lastitem">LFF</Link>
                                </div>
                            )}
                    </div>

                </div>

            </header>
    );
}