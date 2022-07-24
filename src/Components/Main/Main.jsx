import React from 'react';
import bgVideo from './video/bg.mp4'
import SideBar from "../SideBar/SideBar";
import s from './main.module.scss'


const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.wrapper}>
                <div className={s.video}>
                    <video className={s.videoTag} autoPlay loop muted>
                        <source src={bgVideo} type='video/mp4' />
                    </video>
                </div>
                <SideBar/>
            </div>
        </main>
    );
};

export default Main;