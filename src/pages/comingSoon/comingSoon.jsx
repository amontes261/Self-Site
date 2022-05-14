// ================================== //
// comingSoon.jsx - ReactJS HTML File //
// ----- Created by Alex Montes ----- //
// ================================== //

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
                <div> This webpage is still under development. </div>
                  <div className= "completionAndCreatedByText divSpacer"> Expected completion: Fall 2022 </div>
                  <div>
                    In the meantime, you can check out the&nbsp;
                    <a className= "repoLink" href="https://github.com/amontes261/amontes261.github.io">repository</a>
                    &nbsp;for updates
                    <Link to="/home" className="secretPeriod">
                      <span>. </span>
                    </Link>
                  </div>
                  <div> Thanks for coming & see you soon!</div>
                  <div className= "completionAndCreatedByText divSpacer"> Created by Alex Montes </div>
                </div>
              </div>
          </Card>
        </header>
      </div>
    )
}


export default comingSoonPage;