import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import styled from "styled-components";
const Wrapper=styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main=styled.div`
 flex-grow: 1;
 overflow: auto;
`

const Nav=styled.div`
border:1px solid blue;
 >ul{
    display: flex;
   >li{
   width: 33.333333333%;
   text-align: center;
   padding: 16px;
   }
 }
`

function App() {
  return (
      <Router>
        <Wrapper>
          <Main>
            <Switch>
              <Route path="/tags">
                <Tags />
              </Route>
              <Route path="/money">
                <Money />
              </Route>
              <Route path="/statistics">
                <Statistics />
              </Route>
              <Route path={'*'}>
                <NoMatch />
              </Route>
              <Redirect exact from="/" to="/money" />
            </Switch>
          </Main>

          <Nav>
            <ul>
              <li>
                <Link to="/tags">标签页</Link>
              </li>
              <li>
                <Link to="/money">记账页</Link>
              </li>
              <li>
                <Link to="/statistics">统计页</Link>
              </li>
            </ul>
          </Nav>
        </Wrapper>
      </Router>
  );
}
function NoMatch() {
  return <div>页面不存在~</div>
}
function Statistics() {
  return <h2>统计</h2>;
}

function Tags() {
  return <h2>标签</h2>;
}

function Money() {
  return <h2>记账</h2>;
}

export default App;
