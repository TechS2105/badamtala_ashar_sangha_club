import React, {useEffect, useState} from 'react';
import MarqueeTextStyle from '../../../public/styles/reuseable style folder/Marqueetext.module.css';
import MarqueeTextContentSection from '../Reuseable Component/Marqueetextcontentsection';

function Marqueetext() {

    const [getMarqueeText, setGetMarqueeText] = useState([]);

    useEffect(() => { 

        const fetchMarqueeText = async () => {

            try {
                
                const response = await fetch('http://localhost:3000/api/marquee');

                if(!response.ok){

                    throw new Error(`Server response status is ${response.status}`);

                }

                let data = await response.json();
                setGetMarqueeText(data);

            } catch (error) {
                
                console.log(error);

            }

        }

        fetchMarqueeText();

    }, []);
    
    return (

        <>
        
            {/** Marquee Text */}
            <div className={MarqueeTextStyle.marqueeTextSection}>

                {/** Inner Marquee Text */}
                <MarqueeTextContentSection
                
                    MarqueeTextStyle={MarqueeTextStyle}
                    marqueeText={getMarqueeText}
                    
                />

            </div>
            
        </>

    );

}

export default Marqueetext;