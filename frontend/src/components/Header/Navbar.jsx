import React, {useState, useEffect} from 'react';
import NavbarStyle from '../../../public/styles/header style folder/Navbar.module.css';
import NavLogoSection from '../Header/Navlogo';
import NavMenuSection from '../Header/Navmenu';
import { useNavigate } from 'react-router-dom';

const logoImage = "../../../public/images/logo/BAS_logo.jpg"

function Navbar() {
    
    const [animateHeaderLogoSection, setAnimateHeaderLogoSection] = useState();
    const [animateHeaderLogoImageBox, setAnimateHeaderLogoImageBox] = useState();
    const [navMenuIconAnime, setNavMenuIconAnime] = useState();

    const navigate = useNavigate();

    const animateOnScroll = () => {

        if (window.scrollY > 0) {
            
            setAnimateHeaderLogoSection({

                transform: "translateY(-200px)",
                transition: "all 0.8s ease 0.5s",

            });

            setAnimateHeaderLogoImageBox({

                transform: "translateY(-200px) rotateY(0deg)",
                transition: "all 1s ease",
                opacity: "0"

            });

            // Nav Menu Icon 
            setNavMenuIconAnime({

                transform: "translateX(0px)",
                transition: "all 1s ease",

            });

        } else {
        
            setAnimateHeaderLogoSection({

                transform: "translateY(0px)",
                transition: "all 0.8s ease",

            });

            setAnimateHeaderLogoImageBox({

                transform: "translateY(0px) rotateY(360deg)",
                transition: "all 1s ease",
                opacity: "1"

            });

            // Nav Menu Icon
            setNavMenuIconAnime({

                transform: "translateX(500px)",
                transition: "all 1s ease"

            });

        }

    }

    useEffect(() => { 

        window.addEventListener('scroll', animateOnScroll);

    }, []);

    return (

        <>
        
            {/** Header */}
            <header onScroll={animateOnScroll}>

                {/** Nav Logo Section */}
                <NavLogoSection
                
                    NavbarStyle={NavbarStyle}
                    animateHeaderLogoSection={animateHeaderLogoSection}
                    logoImage={logoImage}
                    animateHeaderLogoImageBox={animateHeaderLogoImageBox}
                    logoAltText="BAS Logo"
                    navigate = {() => navigate('/')}
                    
                />

                {/** Nav Menu Section */}
                <NavMenuSection
                
                    NavbarStyle={NavbarStyle}
                    navMenuIconAnime={navMenuIconAnime}
                    
                />

            </header>
            
        </>

    );

}

export default Navbar;