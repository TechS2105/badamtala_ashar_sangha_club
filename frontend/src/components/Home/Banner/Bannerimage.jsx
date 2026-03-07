import React from 'react';

function Bannerimage({HomeStyle, bannerItem}) {
    
    return (

        <>
        
            {/** Banner Image Section */}
            <div className={HomeStyle.imageSection}>

                {/** Color Overlay */}
                <div className={HomeStyle.colorOverlay}></div>
                <img src={bannerItem.banner_image} alt={bannerItem.banner_image_altText} />

            </div>
            
        </>

    );

}

export default Bannerimage;