// ============================ //
// men.jsx -- ReactJS HTML File //
// -- Created by Alex Montes -- //
// ============================ //

import React from "react";
import "./men.css"

// IMPORT TOP NAVBAR COMPONENT //
import menPhotoSolid from "../../assets/men_solid.png";

function menPage (props) {
    return(
        <div className="menContainer">
            <div className= "menTopSpacer" />
            <img className= "theMen" src={menPhotoSolid} alt="just imagine men kissing here" />;
        </div>
    )
}

export default menPage;