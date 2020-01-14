import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
//import App from "./App";
import ZipToCity from "./ZipToCity";
import CityToZip from "./CityToZip";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={CityToZip}/>
            <Route exact component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default Router;
