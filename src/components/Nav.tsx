import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./icon";


const NavWrapper = styled.nav`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
background: #ffffff;
 >ul{
    display: flex;
   >li{
      width: 33.333333333%;
      text-align: center;
    >a{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
        .icon{
        width: 30px;
        height: 30px;
        margin: 1px 0;
        }
        &.selected{
        color: #57e767;
         .icon{
          fill:#57e767;
         }
        }
    }



 
    
   }
 }
`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>

                    <NavLink to="/tags" activeClassName={"selected"}>
                        <Icon name={'tag'}/>
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName={"selected"}>
                        <Icon name={'money'}/>
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName={"selected"}>
                        <Icon name={'chart'}/>
                        统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav;