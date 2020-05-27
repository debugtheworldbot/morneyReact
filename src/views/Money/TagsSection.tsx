import styled from "styled-components";

const TagsSection=styled.section`background:#FFFFFF;padding: 12px 16px;flex-grow: 1;
display: flex;flex-direction: column;justify-content: flex-end;align-items: flex-start;
  >ol{margin: 0 -12px;
      >li{
        background:#d9d9d9;
        border-radius:18px;
        display: inline-block;
        padding: 2px 18px;
        font-size: 14px;
        margin: 8px 12px;
     }
  }
  >button{
  color: #666;
  background:none;
  border: none;
  padding: 2px 4px;
  border-bottom: 1px solid #666;
  margin-top: 7px;
  }
`
export default TagsSection