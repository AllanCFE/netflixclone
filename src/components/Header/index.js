import React from 'react';
import './Header.css'

export default ({black}) => {
    return(
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00106-3D-company-logo-design-free-logo-online-Template-03.png" alt="logo"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://www.dictionary.com/e/wp-content/uploads/2018/04/Nicolas-Cage-300x300.jpg" alt="user"></img>
                </a>
            </div>
        </header>
    );
}