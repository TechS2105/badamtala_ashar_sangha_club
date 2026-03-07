import React from 'react';
import Banner from '../Home/Banner/Banner';
import MarqueeText from '../Reuseable Component/Marqueetext';
import HomeStyle from '../../../public/styles/home style folder/Home.module.css'

function Home() {
    
    return (

        <>
        
            {/** Home */}
            <main>

                {/** Banner */}
                <Banner
                
                    HomeStyle={HomeStyle}
                    
                />

                {/** Maruqee Text */}
                <MarqueeText/>

            </main>
            
        </>

    );

}

export default Home;