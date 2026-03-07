import React from 'react';
import MarqueeTextContent from '../Reuseable Component/Marqueetextcontent';

function Marqueetextcontentsection({MarqueeTextStyle, marqueeText}) {
    
    return (

        <>
        
            {/** Marquee Text Content Section */}
            <div className={MarqueeTextStyle.innerMarqueeTextSection}>

                {/** Marquee Text Content */}
                <MarqueeTextContent
                
                    marqueeText={marqueeText}
                    
                />

                {/** Marquee Text Content */}
                <MarqueeTextContent
                
                    marqueeText={marqueeText}
                    
                />
                
                {/** Marquee Text Content */}
                <MarqueeTextContent
                
                    marqueeText={marqueeText}
                    
                />
                
                {/** Marquee Text Content */}
                <MarqueeTextContent
                
                    marqueeText={marqueeText}
                    
                />

            </div>
            
        </>

    );

}

export default Marqueetextcontentsection;