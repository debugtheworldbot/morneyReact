import React from 'react';

import {HashRouter as Router, Switch, Route,Redirect,} from "react-router-dom";


import Tags from "./views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import NoMatch from "./views/NoMatch";
import styled from "styled-components";
import {TagEdit} from "./views/TagEdit";

const AppWrapper=styled.div`
color: #333;
`


function App() {
    return (
        <AppWrapper>
        <Router>
            <Switch>
                <Route path="/tags" exact>
                    <Tags/>
                </Route>
                <Route path="/tags/:id" exact>
                    <TagEdit/>
                </Route>
                <Route path="/money" exact>
                    <Money/>
                </Route>
                <Route path="/statistics" exact>
                    <Statistics/>
                </Route>
                <Redirect exact from="/" to="/money"/>
                <Route path={'*'}>
                    <NoMatch/>
                </Route>

            </Switch>

        </Router>
</AppWrapper>
    );
}








export default App;
