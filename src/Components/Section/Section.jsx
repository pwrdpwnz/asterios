import React, {useEffect} from 'react';
import s from "./section.module.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Section = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section className={s.section}>
            <div className="container">
                <div className={s.wrapper}>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        pagination={{clickable: true}}
                        scrollbar={{draggable: true}}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className={s.slideImg} data-aos="zoom-out-right">
                                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.slideImg} data-aos="zoom-out-center">
                                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.slideImg} data-aos="zoom-out-left">
                                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.slideImg}  data-aos="zoom-out-left">
                                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </section>
    );
};



export default Section;