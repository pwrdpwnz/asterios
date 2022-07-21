import React from 'react';
import s from './Header.module.scss'
import logo from './../../Components/Header/Images/apple-touch-icon-76x76-removebg-preview.png'
import tg from './../../Components/Header/Images/tg_fill.svg'
import {Link, NavLink} from "react-router-dom";




const Header = () => {
    return (<header className={s.header}>
            <div className="container">
                <nav className={s.nav}>
                    <Link
                        to="/">
                        <img className={s.logo} src={logo} alt="Logo" title="back to home"/>
                    </Link>
                    <ul className={s.menu}>
                        <li className={s.list}>
                            <NavLink className={s.link} to='/news'>NEWS</NavLink>
                        </li>
                        <li className={s.list}>
                            <NavLink className={s.link} to='/play'>BEGIN TO PLAY</NavLink>
                        </li>
                        <li className={s.list}>
                            <NavLink className={s.link} to='/restore'>PASSWORD CHANGE</NavLink>
                        </li>
                        <li className={s.list}>
                            <NavLink className={s.link} to='/forums'>FORUMS</NavLink>
                        </li>
                        <li className={s.list}>
                            <NavLink className={s.link} to='/statistic'>STATISTICS</NavLink>
                        </li>
                        <li className={s.list}>
                            <NavLink className={s.link} to='/knowledge'>KNOWLEDGE BASE</NavLink>
                        </li>
                        <li className={s.list}>
                            <NavLink className={s.link} to='/radio'>RADIO ASTERIOS</NavLink>
                        </li>
                        <li className={s.list}>
                            <NavLink className={s.link} to='/score'>SCORE</NavLink>
                        </li>
                        <li className={s.list}>
                            <NavLink className={s.link} to='/bonus'>GET BONUS</NavLink>
                        </li>
                        <li className={s.list}>
                            <NavLink className={s.link} to='/about'>ABOUT THE SERVER</NavLink>
                        </li>
                    </ul>
                    <div className="social">
                       <Link to='https://t.me/asterios'>
                           <img className={s.tg} src={tg} alt="" />
                       </Link>
                    </div>
                </nav>
            </div>
        </header>);
};

export default Header;