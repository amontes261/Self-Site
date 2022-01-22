import React from "react";
import "./comingSoon.css"

import { Card } from '@material-ui/core';
import { Link } from "react-router-dom";

function comingSoonPage (props) {
    return(
        <div className="App">
        <header className="comingSoonPageHeader container">
          <Card className= "cardContainer bg-dark">
            <div className="textContainer">
              <code className= "comingSoonHeader"> Coming Soon </code>
              <div className= "smallTextContainer">
                <div className= "divSpacer"> Hey there, looks like you've made it to my website. This webpage is still under development. </div>
                <div className= "divSpacer"> This' a side-project, so it'll take some time before I'll be online
                <Link to="/about" className="secretPeriod">
                    <span>. </span>
                  </Link>
                </div>
                <div className= "divSpacer" />
                <div> Thanks for coming & see you soon!</div>
                <div className= "divSpacer"> Created by Alex Montes </div>
              </div>
              </div>
          </Card>
        </header>
      </div>
    )
}


export default comingSoonPage;