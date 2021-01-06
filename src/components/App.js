// To start this application run "npm start" on the main directory
// To start the GraphQL server, cd into server and run "npm start"

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';


import '../styles/App.css';

import MenuBar from "./MenuBar.js";
import Gallery from "../pages/Gallery.js";
import SearchRecipe from "../pages/SearchRecipe.js";
import AllRecipes from "../pages/AllRecipes.js";
import AboutUs from "../pages/AboutUs.js";

export default function App() {

    return (
        <div className="App">
            <div className="searchRecipe">
                <MenuBar />
                <br/>

                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={AllRecipes}
                        />
                        <Route
                            exact
                            path="/gallery"
                            component={Gallery}
                        />
                        <Route
                            exact
                            path="/searchRecipes"
                            component={SearchRecipe}
                        />
                        <Route
                            exact
                            path="/aboutUs"
                            component={AboutUs}
                        />
                    </Switch>
            </div>

        </div>
    );
}

