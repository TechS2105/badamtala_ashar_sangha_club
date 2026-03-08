import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTheaterMasks } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function Aboutsection({HomeStyle}) {
    
    return (

        <>
        
            {/** About Section */}
            <div className={HomeStyle.aboutSection}>

                {/** Image Overlay */}
                <div className={HomeStyle.imageOverlay}></div>

                {/** Content Section */}
                <div className={HomeStyle.contentSection}>

                    {/** Inner Content Section */}
                    <div className={HomeStyle.innerContentSection}>

                        <span>Sharod Utsav Celebration</span>
                        <h2>|| About Badamtala Ashar Sangha || </h2>
                        <p>Badamtala Ashar Sangha proudly stands as one of the most respected community Durga Puja organizers in Kolkata, celebrated for its creative theme pandals, artistic craftsmanship, and vibrant cultural celebrations.</p>
                        <p>Every year the club transforms the neighborhood into a spectacular festival space where tradition, art, and devotion come together. Thousands of visitors, devotees, and art enthusiasts gather to witness the divine presence of Maa Durga and experience the spirit of Sharod Utsav.</p>
                        <p>With a deep commitment to cultural heritage and community unity, Badamtala Ashar Sangha continues to create unforgettable Durga Puja experiences that inspire devotion and celebrate creativity.</p>

                        <a href="#">Discover Our Journey <FaArrowRightLong /> </a>

                    </div>

                </div>

                {/** Card Highlights */}
                <div className={HomeStyle.cardHighlightSection}>

                    {/** Swiper Section */}
                    <Swiper
                    
                        slidesPerView={3}
                        spaceBetween={50}
                        loop={true}
                        speed={2000}
                        autoplay={{

                            delay: 2500

                        }}

                        modules={[Autoplay]}
                        className={HomeStyle.aboutswiperSection}
                    
                    >

                        {/** Swiper Slide */}
                        <SwiperSlide className={HomeStyle.aboutswiperSlideSection}>

                            {/** SVG Icon Div */}
                            <div className={HomeStyle.svgIconDiv}>

                                <FaTheaterMasks />

                            </div>

                            {/** Title Div */}
                            <div className={HomeStyle.titleDiv}>

                                <h3>Creative Theme Pandal</h3>

                            </div>

                            {/** Para Div */}
                            <div className={HomeStyle.paraDiv}>

                                <p>Every year Badamtala Ashar Sangha presents a unique theme-based pandal that blends artistic imagination with cultural storytelling. The creative installations transform the entire neighborhood into a captivating visual experience for thousands of visitors.</p>

                            </div>

                        </SwiperSlide>

                         {/** Swiper Slide */}
                        <SwiperSlide className={HomeStyle.aboutswiperSlideSection}>

                            {/** SVG Icon Div */}
                            <div className={HomeStyle.svgIconDiv}>

                                <FaTheaterMasks />

                            </div>

                            {/** Title Div */}
                            <div className={HomeStyle.titleDiv}>

                                <h3>Creative Theme Pandal</h3>

                            </div>

                            {/** Para Div */}
                            <div className={HomeStyle.paraDiv}>

                                <p>Every year Badamtala Ashar Sangha presents a unique theme-based pandal that blends artistic imagination with cultural storytelling. The creative installations transform the entire neighborhood into a captivating visual experience for thousands of visitors.</p>

                            </div>

                        </SwiperSlide>

                        {/** Swiper Slide */}
                        <SwiperSlide className={HomeStyle.aboutswiperSlideSection}>

                            {/** SVG Icon Div */}
                            <div className={HomeStyle.svgIconDiv}>

                                <FaTheaterMasks />

                            </div>

                            {/** Title Div */}
                            <div className={HomeStyle.titleDiv}>

                                <h3>Creative Theme Pandal</h3>

                            </div>

                            {/** Para Div */}
                            <div className={HomeStyle.paraDiv}>

                                <p>Every year Badamtala Ashar Sangha presents a unique theme-based pandal that blends artistic imagination with cultural storytelling. The creative installations transform the entire neighborhood into a captivating visual experience for thousands of visitors.</p>

                            </div>

                        </SwiperSlide>

                        {/** Swiper Slide */}
                        <SwiperSlide className={HomeStyle.aboutswiperSlideSection}>

                            {/** SVG Icon Div */}
                            <div className={HomeStyle.svgIconDiv}>

                                <FaTheaterMasks />

                            </div>

                            {/** Title Div */}
                            <div className={HomeStyle.titleDiv}>

                                <h3>Creative Theme Pandal</h3>

                            </div>

                            {/** Para Div */}
                            <div className={HomeStyle.paraDiv}>

                                <p>Every year Badamtala Ashar Sangha presents a unique theme-based pandal that blends artistic imagination with cultural storytelling. The creative installations transform the entire neighborhood into a captivating visual experience for thousands of visitors.</p>

                            </div>

                        </SwiperSlide>

                    </Swiper>

                </div>

            </div>
            
        </>

    );

}

export default Aboutsection;