import styled from "styled-components";

const NotesSection=styled.section`
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
export default NotesSection