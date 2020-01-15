import React from "react";
import {Link, BrowserRouter, Route, Switch} from "react-router-dom";
//import App from "./App";
import CityToZip from "./CityToZip";
import ZipToCity from "./ZipToCity";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <ul>
          <li><Link to="/">CityToZip</Link></li>
          <li><Link to="/ZipToCity">ZipToCity</Link></li>
        </ul>
        <Switch>
            <Route exact path="/" component={CityToZip}/>
            <Route exact path="/ZipToCity" component={ZipToCity}/>
            <Route exact component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default Router;
