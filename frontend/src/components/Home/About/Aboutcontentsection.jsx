import React, {useState, useEffect} from 'react';
import AboutContent from '../About/Aboutcontent';
import axios from 'axios';

function Aboutcontentsection({HomeStyle, arrowIcon}) {
    
    const [getAboutContent, setGetAboutContent] = useState([]);

    useEffect(() => { 

        const fetchAboutContent = async () => {

            const reaponse = await axios.get('http://localhost:3000/api/home/about/content');
            setGetAboutContent(reaponse.data);

        }

        fetchAboutContent();

    }, []);

    return (

        <>
        
            {/** About Content Section */}
            <div className={HomeStyle.contentSection}>
            
                {/** Inner Content Section */}
                <AboutContent
                
                    HomeStyle={HomeStyle}
                    arrowIcon={arrowIcon}
                    homeAboutContent={getAboutContent}
                    
                />
            
            </div>

            
        </>

    );

}

export default Aboutcontentsection;