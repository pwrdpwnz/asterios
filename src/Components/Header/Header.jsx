import React from 'react';
import s from './header.module.scss'

import Nav from './Nav/Nav'

const Header = () => {
    return (
            <header className={s.header} >
                <div className="container">
                    <Nav />
                </div>
            </header>
    );
};

export default Header;