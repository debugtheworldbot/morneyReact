import styled from "styled-components";
import React, {useState} from "react";

const Wrapper=styled.section`background:#FFFFFF;padding: 12px 16px;flex-grow: 1;
display: flex;flex-direction: column;justify-content: flex-end;align-items: flex-start;
  >ol{margin: 0 -12px;
      >li{
        background:#d9d9d9;
        border-radius:18px;
        display: inline-block;
        padding: 2px 18px;
        font-size: 14px;
        margin: 8px 12px;
        &.selected{
        background:#f60;
        }
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
const TagSection:React.FC = ()=>{
    const [tags,setTags]=useState<string[]>(['衣','食','住','行','1'])
    const [selectedTags,setSelectedTags]=useState<string[]>([])
    const onAddTag=()=>{
       const tagName= window.prompt("请输入新标签的名称")
       if(tagName!==null){
           setTags([...tags,tagName])
       }
    }
    const onToggleTag=(tag:string)=>{
        const index=selectedTags.indexOf(tag)
        if(index>=0){
           setSelectedTags(selectedTags.filter(t=>t!==tag))
        }else {
            setSelectedTags([...selectedTags,tag])
        }
    }
    const getClass =(tag:string)=>selectedTags.indexOf(tag) >=0? "selected":""

    return(
        <Wrapper>
            <ol>
                {tags.map(tag=>
                    <li onClick={()=>onToggleTag(tag)} key={tag}
                    className={getClass(tag)}>{tag}</li>)}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}


export default TagSection