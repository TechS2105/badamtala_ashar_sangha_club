import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import MaskSVG from '../../SVG/Masksvg';
import DiyaSVG from '../../SVG/Diyasvg';
import CulturalSVG from '../../SVG/Culturalsvg';
import DevotionSVG from '../../SVG/Devotionsvg';
import ComunitySVG from '../../SVG/Comunitysvg';
import AboutContentSection from '../About/Aboutcontentsection';
import AboutCardSection from '../About/Aboutcardsection';

function Aboutsection({HomeStyle}) {
    
    return (

        <>
        
            {/** About Section */}
            <div className={HomeStyle.aboutSection}>

                {/** Image Overlay */}
                <div className={HomeStyle.imageOverlay}></div>

                {/** Content Section */}
                <AboutContentSection
                
                    HomeStyle={HomeStyle}
                    arrowIcon={<FaArrowRightLong/>}
                    
                />

                {/** Card Highlights */}
                <AboutCardSection
                
                    HomeStyle={HomeStyle}
                    maskSVG={<MaskSVG/>}
                    culturalSVG={<CulturalSVG/>}
                    diyaSVG={<DiyaSVG/>}
                    devotionSVG={<DevotionSVG/>}
                    comunitySVG={<ComunitySVG/>}
                    
                />

            </div>
            
        </>

    );

}

export default Aboutsection;