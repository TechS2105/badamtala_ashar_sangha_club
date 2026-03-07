import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import BannerImage from '../Banner/Bannerimage';
import BannerContent from '../Banner/Bannercontent';

function Banner({ HomeStyle }) {

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
                                <BannerImage
                                
                                    HomeStyle={HomeStyle}
                                    bannerItem={bannerItem}
                                    
                                />

                                {/** Image Details Section */}
                                <BannerContent
                                
                                    HomeStyle={HomeStyle}
                                    bannerItem={bannerItem}
                                    
                                />

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