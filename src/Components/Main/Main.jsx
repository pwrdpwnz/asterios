import React from 'react';
import s from './main.module.scss'
import videoBG from './videos/bg.mp4'
import logoTitle from './image/lineage-2-essence-logo.png'
import arrow from './image/sep.png'
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <main className={s.main}>
            <div className="container">
                <div className={s.wrapper}>
                    <img src={logoTitle} alt="logo Title"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate maiores quo ullam. Culpa
                        perspiciatis quas repellendus repudiandae. Dolores, ducimus ullam!</p>
                    <img className={s.centerImg} src={arrow} alt=""/>
                    <span className={s.btn}>
                        <Link className={s.link} to='/files'>Start the game</Link>
                    </span>
                </div>
            </div>

            <video className={s.video} autoPlay muted loop>
                <source src={videoBG}/>
            </video>
        </main>
    );
};

export default Main;