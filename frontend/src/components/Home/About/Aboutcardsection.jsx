import React, {useState, useEffect} from 'react';
import AboutCard from '../About/Aboutcard';

function Aboutcardsection({HomeStyle, maskSVG, culturalSVG, diyaSVG, devotionSVG, comunitySVG}) {
    
    const [ getHomeAboutCard, setGetHomeAboutCard ] = useState([]);

    useEffect(() => { 

        const fetchHomeAboutCardApi = async () => {
            
            try {
                
                const response = await fetch('http://localhost:3000/api/home/about/card');

                if (!response.ok) {
                    
                    throw new Error(`Server response status is ${response.status}`);

                }

                let data = await response.json();
                setGetHomeAboutCard(data);

            } catch (error) {
                
                console.log(error);

            }

        }

        fetchHomeAboutCardApi();

    }, []);

    return (

        <>
        
            {/** About Card Section */}
            <div className={HomeStyle.cardHighlightSection}>

                {/** Swiper Section */}
                <AboutCard
                
                    HomeStyle={HomeStyle}
                    maskSVG={maskSVG}
                    culturalSVG={culturalSVG}
                    diyaSVG={diyaSVG}
                    devotionSVG={devotionSVG}
                    comunitySVG={comunitySVG}
                    homeAboutCard={getHomeAboutCard}
                    
                />

            </div>
            
        </>

    );

}

export default Aboutcardsection;