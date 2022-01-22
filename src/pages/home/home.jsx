
import React from "react";
import "./home.css"

import { Card } from '@material-ui/core';

// IMPORT TOP NAVBAR COMPONENT //
import NavBar from "../../components/navbar/navbar";

var cardDivStyle = {
    flex:1,
    backgroundColor:'white',
    color: 'black',
    fontSize: '40px'
};

function homePage (props) {
    return(
        <div className="homeCSS">
            <NavBar />
            <header className="homeHeader homeContainer">
                <div className= "cardContainer">
                    <Card className= "homeCard">
                        <div className= "textContainer" style={cardDivStyle}>
                                
                            This is a test

                        </div>
                    </Card> 
                </div>
            </header>
        </div>
    )
}


export default homePage;