import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { news } from './../jsons/news';

const Header = ({title}) => {
    const navigate = useNavigate();
    let count = 0;
    for (let i = 0; i < news.length; i++) {
        if (news[i].importance){
            count++;
        }
    }
    const [number, setNumber] = useState(count);
    return (
        <header className='header'>
            <div className="container">
                <div className="header-wrapper">
                {title !== null
                ?
                    <div className='header-title'>
                        <button onClick={() => navigate(-1)}>
                            <img src="./img/arrow.svg" alt="back" />
                        </button>
                    <div className="header-txt">{title}</div>
                </div> 
                : <img src="./img/logo.svg" alt="logo" className="logo" />} 
                    <div className="header-info">
                        <Link to='/cfrek/notifications' data-count={number} className="notifications">
                            <img src="./img/notifications.svg" alt="notifications" />
                        </Link>
                        <button className="profile">OP</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;