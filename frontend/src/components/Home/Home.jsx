import React from 'react';
import Banner from '../Home/Banner';
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

            </main>
            
        </>

    );

}

export default Home;