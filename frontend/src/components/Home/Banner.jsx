import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

function Banner({ HomeStyle }) {

    const pagination = {

        clickable: true,

    }

    const [getBannerApi, setGetBannerApi] = useState([]);
    
    useEffect(() => { 

        const bannerApi = async () => {
            
            try { 

                const response = await axios.get('http://localhost:3000/api/home/banner');
                setGetBannerApi(response.data);

            } catch (error) {
                
                console.log(error);

            }

        }

        bannerApi();

    }, []);
    
    return (

        <>
        
            {/** Banner */}
            <div className={HomeStyle.bannerSection}>

                {/** Swiper Section */}
                <Swiper
                    
                    slidesPerView={1}
                    direction={"vertical"}
                    loop={true}
                    pagination={{
                        
                        clickable: true,
                        el: `.${HomeStyle.swiper_pagination}`
                    
                    }}
                    speed={3000}
                    autoplay={{

                        delay: 4000

                    }}

                    modules={[Autoplay, Pagination]}
                    className={HomeStyle.swiperSection}
                
                >

                    {/** Swiper Slide Section */}
                    {getBannerApi.map((bannerItem, idx) => { 

                        return (

                            <SwiperSlide className={HomeStyle.swiperSlideSection} key={idx}>

                                {/** Image Section */}
                                <div className={HomeStyle.imageSection}>

                                    {/** Color Overlay */}
                                    <div className={HomeStyle.colorOverlay}></div>
                                    <img src={bannerItem.banner_image} alt={bannerItem.banner_image_altText} />

                                </div>

                                {/** Image Details Section */}
                                <div className={HomeStyle.imageDetailsSection}>

                                    {/** Image Inner Details Section */}
                                    <div className={HomeStyle.imageInnerDetailsSection}>

                                        <span> {bannerItem.banner_details[0].spanTitle} </span>
                                        <h3> {bannerItem.banner_details[0].mainTitle} </h3>
                                        <p> {bannerItem.banner_details[0].description} </p>

                                    </div>

                                </div>

                            </SwiperSlide> 

                        );

                    })}

                    {/** Swiper Pagination */}
                    <div className={HomeStyle.swiper_pagination}></div>

                </Swiper>

            </div>

            
        </>

    );

}

export default Banner;