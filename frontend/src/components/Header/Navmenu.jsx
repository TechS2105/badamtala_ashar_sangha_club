import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navmenu({ NavbarStyle, navMenuIconAnime }) {

    const [isActiveNavMenu, setIsActiveNavMenu] = useState(false);
    const [isActiveSpanIcon, setIsActiveSpanIcon] = useState(false);
    
    function handleNavMenuBox() {
        
        setIsActiveNavMenu(prev => !prev);
        setIsActiveSpanIcon(prev => !prev);

    }

    const animateNavMenu = isActiveNavMenu ? {
        
        transform: "scaleY(1)",
        transition: "all 0.8s ease",
        filter: "blur(0px)",
        opacity: "1"

    } : {

        transform: "scaleY(0)",
        transition: "all 0.8s ease",
        filter: "blur(30px)",
        opacity: "0"

    }

    const firstSpanIcon = isActiveSpanIcon ? {

        transform: "rotate(45deg) translateY(5px) translateX(5px)",
        transition: "all 0.8s ease",
        width: "50px"

    } : {

        transform: "rotate(0deg) translateY(0px) translateX(0px)",
        transition: "all 0.8s ease",
        width: "30px"

    }

    const secondSpanIcon = isActiveSpanIcon ? {

        transform: "rotate(-45deg) translateX(5px)",
        transition: "all 0.8s ease",

    } : {

        transform: "rotate(0deg)",
        transition: "all 0.5s ease"

    };

    return (

        <>
        
            {/** Nav Menu Section */}
            <div className={NavbarStyle.navMenuSection}>

                {/** Logo Icon Box */}
                <div className={NavbarStyle.logoIconBox} style={navMenuIconAnime}>

                    {/** Inner Logo Icon Box */}
                    <div className={NavbarStyle.innerLogoIconBox} onClick={handleNavMenuBox}>

                        <span style={firstSpanIcon}></span>
                        <span style={secondSpanIcon}></span>

                    </div>

                </div>

                {/** Nav Menu Section */}
                <div className={NavbarStyle.navMenuBox} style={animateNavMenu}>
                    
                    <ul>

                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Club</NavLink></li>
                        <li><NavLink to="/committee">Committee Members</NavLink></li>
                        <li><NavLink to="/sponsors">Sponsors</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/events">Events </NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>

                    </ul>

                </div>

            </div>
            
        </>

    );

}

export default Navmenu;