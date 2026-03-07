import React from 'react';
import Header from '../components/Header/Navbar';
import { Outlet } from 'react-router-dom';

const customStyle = {

    width: "100%",
    height: "100%"

}

function Rootlayouts() {
    
    return (

        <>
        
            {/** Navbar */}
            <Header />

            {/** Outlet */}
            <div style={customStyle}>

                <Outlet/>

            </div>
            
        </>

    );

}

export default Rootlayouts;