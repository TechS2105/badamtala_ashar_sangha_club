import React from 'react';
import Banner from '../Home/Banner/Banner';
import MarqueeText from '../Reuseable Component/Marqueetext';
import HomeAbout from '../Home/About/Aboutsection';
import HomePujaHightlightCounter from '../Reuseable Component/Puja Highlight Conter/Pujahighlightcounter';
import HomeStyle from '../../../public/styles/home style folder/Home.module.css';

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
                <MarqueeText />
                
                {/** About Section */}
                <HomeAbout
                
                    HomeStyle={HomeStyle}
                    
                />

                {/** Puja Highlight Counter */}
                <HomePujaHightlightCounter/>

            </main>
            
        </>

    );

}

export default Home;