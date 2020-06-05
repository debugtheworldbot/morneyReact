import Nav from "./Nav";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media(min-width: 400px){
    && ::-webkit-scrollbar{
  width: 0;
  }
  }

`
const Main = styled.div`
 flex-grow: 1;
 overflow: auto;
`

const Layout=(props:any)=>{
    return(
        <Wrapper>
            <Main className={props.className}>{props.children}</Main>
            <Nav/>
        </Wrapper>
    )
}
export default Layout;