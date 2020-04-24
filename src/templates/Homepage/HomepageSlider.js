import React, {useEffect} from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

const HomepageSlider = () => {
    useEffect(() => {
        let swiper = new Swiper(".homepage-slider .swiper-container", {
            navigation: {
                nextEl: '.homepage-slider .swiper-button-next',
                prevEl: '.homepage-slider .swiper-button-prev',
            },
            pagination: {
                el: ".homepage-slider .swiper-pagination"
            },
            paginationType: "bullets",
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            lazy: {
                loadPrevNext: true
            }
        });
    });

    return (
        <div className={"container-fluid homepage-slider"}>
            <div className={"swiper-container"}>
                <div className={"swiper-wrapper"}>
                    <div className={"swiper-slide"}>Slide 1</div>
                    <div className={"swiper-slide"}>Slide 2</div>
                    <div className={"swiper-slide"}>Slide 3</div>
                </div>
                <div className={"swiper-button-prev"}/>
                <div className={"swiper-button-next"}/>
                <div className={"swiper-pagination"}/>
            </div>
        </div>
    );
}

export default HomepageSlider;