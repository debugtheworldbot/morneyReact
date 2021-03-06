import styled from "styled-components";
import React from "react";


const Wrapper=styled.section`
font-size:24px;
  >ul{
  display: flex;
    >li{
    width: 50%;
    text-align: center;
    padding: 10px 0 ;
    position: relative;
    transition: all 0.3s ;
    cursor: pointer;
    &:hover{
         background:#e0e0e0;
    }
    &.selected::after{
    content: '';
    display: block;
    height: 2px;
    background:#333;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    }
    }
  }
`

type Props={
    value:('-'|'+'),
    onChange:(value:('-'|'+'))=>void
}
const CategorySection:React.FC<Props> = (props)=>{
    const category=props.value
    return(
        <Wrapper>
            <ul>
                <li className={category==='-'?'selected':''}
                onClick={()=>{props.onChange('-')}}>支出</li>
                <li className={category==='+'?'selected':''}
                    onClick={()=>{props.onChange('+')}}>收入 </li>
            </ul>
        </Wrapper>)
}
export default CategorySection