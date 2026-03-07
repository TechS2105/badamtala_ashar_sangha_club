import React from 'react';

function Marqueetextcontent({marqueeText}) {
    
    return (

        <>
        
            {/** Marquee Text Content */}
            <ul>

                {marqueeText.map((marqueeObj) => {

                    return (

                        <>
                        
                            <li>{ marqueeObj.marquee_text[0] }</li>
                            <span></span>
                            <li>{ marqueeObj.marquee_text[1] }</li>
                            <span></span>
                            <li>{ marqueeObj.marquee_text[2] }</li>
                            <span></span>
                            <li>{ marqueeObj.marquee_text[3] }</li>
                            <span></span>
                            <li>{ marqueeObj.marquee_text[4] }</li>
                            <span></span>
                            <li>{ marqueeObj.marquee_text[5] }</li>
                            <span></span>
                            
                        </>

                    );

                })}

            </ul>

            
        </>

    );

}

export default Marqueetextcontent;