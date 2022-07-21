import React from 'react';
import bgVideo from './video/bg.mp4'
import SideBar from "../SideBar/SideBar";
import s from './Main.module.scss'


const Main = () => {
    return (
        <main className="main">
            <div className={s.wrapper}>
                <SideBar/>
                <div className={s.video}>
                    <video className={s.videoTag} autoPlay loop muted>
                        <source src={bgVideo} type='video/mp4'/>
                    </video>
                </div>
            </div>
        </main>
    );
};

export default Main;