import React from 'react';

function Bannercontent({HomeStyle, bannerItem}){

    return (

        <>
        
            {/** Banner Content Section */}
            <div className={HomeStyle.imageDetailsSection}>

                {/** Image Inner Details Section */}
                <div className={HomeStyle.imageInnerDetailsSection}>

                    <span> {bannerItem.banner_details[0].spanTitle} </span>
                    <h3> {bannerItem.banner_details[0].mainTitle} </h3>
                    <p> {bannerItem.banner_details[0].description} </p>

                </div>

            </div>
            
        </>

    );

}

export default Bannercontent;