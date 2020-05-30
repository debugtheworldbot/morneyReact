import React from "react";
import styled from "styled-components";

const Label=styled.label`

  display: flex;
  align-items: center;
   >span{
    margin-right: 16px;
   }
   >input{
    border: none;
    background:none;
    flex-grow: 1;
    height: 72px;
   }
`
const Input:React.FC=()=>{
    return(
        <Label>
            <span>备注</span>
            <input type="text" placeholder={"添加备注"} />
        </Label>
    )
}

export {Input}
