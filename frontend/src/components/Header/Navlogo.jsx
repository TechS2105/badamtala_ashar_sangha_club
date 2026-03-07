import React from 'react';

function Navlogo({ NavbarStyle, animateHeaderLogoSection, logoImage, logoAltText, animateHeaderLogoImageBox, navigate }) {

    return (

        <>
        
            {/** Nav Logo */}
            <div className={NavbarStyle.navLogoSection} style={animateHeaderLogoSection}>

                {/** Inner Logo Section */}
                <div className={NavbarStyle.innerLogoSection} style={animateHeaderLogoImageBox}>

                    <img src={logoImage} alt={logoAltText} onClick={ navigate } />

                </div>

            </div>
            
        </>

    );

}

export default Navlogo;