import React from 'react';
import s from './nav.module.scss'
import logo from './images/9136b3f37401477983bcd7ce150f4192.png'
import sing from './images/sign_in_icon.png'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.menu}>
                <li className={s.item}>
                    <Link to="/">
                        <img className={s.logo} src={logo} alt="logo"/>
                    </Link>
                </li>
                <li className={s.item}>
                    <Link className={s.link} to="/">Home</Link>
                </li>
                <li className={s.item}>
                    <Link className={s.link} to="/wiki">Wiki</Link>
                </li>
                <li className={s.item}>
                    <Link className={s.link} to="/Download">Download</Link>
                </li>
                <li className={s.item}>
                    <Link className={s.link} to="/discord">Discord</Link>
                </li>
            </ul>
            <span className={s.donateBtn}>
                <img src={sing} alt="" className={s.btnIcon}/>
                Donate
            </span>
        </nav>
    );
};

export default Nav;