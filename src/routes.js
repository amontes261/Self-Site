import React from 'react'
import { Route } from "react-router-dom";

import HomePage from "./pages/home/home"
import comingSoonPage from "./pages/comingSoon/comingSoon"

const BaseRouter = () => (
    <div>
        <Route exact path="/homeTemp" component={HomePage}/>
        <Route exact path="/" component={comingSoonPage}/>
        
    </div>
)

export default BaseRouter