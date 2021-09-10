import React from "react";
import "./comingSoon.css"

import { Card } from '@material-ui/core';

function comingSoonPage (props) {
    return(
        <div className="App">
        <header className="App-header container">
          <Card className= "cardContainer bg-dark">
            <div className="textContainer">
              <code className= "comingSoonHeader"> Coming Soon </code>
              <div className= "smallTextContainer">
                <div class= "pt-5"> Hi, I'm Alex's website. </div>
                <div> Thanks for coming, but you're a bit early. This webpage is still under development. </div>
                <div> Check back soon- renovations could be done by the next time you visit. </div>
              </div>
            </div>
          </Card>
        </header>
      </div>
    )
}


export default comingSoonPage;