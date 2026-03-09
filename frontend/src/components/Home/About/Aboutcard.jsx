import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function Aboutcard({HomeStyle, maskSVG, culturalSVG, diyaSVG, devotionSVG, comunitySVG, homeAboutCard}) {

    const svgIconArr = [

        {

            id: 1,
            icon: maskSVG

        },

        {

            id: 2,
            icon: diyaSVG

        },

        {

            id: 3,
            icon: devotionSVG

        },

        {

            id: 4,
            icon: culturalSVG

        },

        {

            id: 5,
            icon: comunitySVG

        }

    ];
    
    return (

        <>
        
           {/** Swiper Section */} 
            <Swiper
                    
                slidesPerView={3}
                spaceBetween={50}
                loop={true}
                speed={2000}
                autoplay={{

                    delay: 2500,
                    pauseOnMouseEnter: true

                }}

                modules={[Autoplay]}
                className={HomeStyle.aboutswiperSection}
                    
            >

                {/** Swiper Slide */}
                {homeAboutCard.map((cardItem) => {

                    const matchingSVG = svgIconArr.find((svgItem) => svgItem.id === cardItem.id);

                    return (

                        <SwiperSlide className={HomeStyle.aboutswiperSlideSection} key={cardItem.id}>

                            {/** SVG Icon Div */}
                            <div className={HomeStyle.svgIconDiv}>

                                {/** Inner SVG Icon Div */}
                                <div className={HomeStyle.innerSvgIconDiv}>

                                    {matchingSVG ? matchingSVG.icon : null}

                                </div>

                            </div>

                            {/** Title Div */}
                            <div className={HomeStyle.titleDiv}>

                                <h3>{ cardItem.card_title }</h3>

                            </div>

                            {/** Para Div */}
                            <div className={HomeStyle.paraDiv}>

                                <p>{ cardItem.card_para }</p>

                            </div>

                        </SwiperSlide>

                    );

                })}
                

            </Swiper>
            
        </>

    );

}

export default Aboutcard;