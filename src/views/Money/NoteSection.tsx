import styled from "styled-components";
import React, {useState} from "react";

const Wrapper=styled.section`
  background:#f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
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
  }
`
const NoteSection:React.FC = ()=>{
    const [note,setNote]=useState('')
    return(
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder={"添加备注"} value={note}
                onChange={(e)=>{setNote(e.target.value)}}/>
            </label>
        </Wrapper>)
}
export default NoteSection