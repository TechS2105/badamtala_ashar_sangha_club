import React from 'react';

function Aboutcontent({HomeStyle, arrowIcon, homeAboutContent}) {
    
    return (

        <>
        
            {/** About Content */}
            {homeAboutContent.map((content, idx) => {

                return (

                    <div className={HomeStyle.innerContentSection}>
                    
                        <span>{content.content_details[0].span_title}</span>
                        <h2>|| {content.content_details[0].main_title} || </h2>

                        {content.content_details[0].description.map((descriptionObj) => {

                            return (

                                <p>{ descriptionObj }</p>
                        
                            );

                        })}
                    
                        <a href="#">{content.content_details[0].button_text} {arrowIcon} </a>
                    
                    </div> 

                );

            })}
            

        </>

    );

}

export default Aboutcontent;