import styled from "styled-components";
import React from "react";
import {useTags} from "../../hooks/useTags";


const Wrapper = styled.section`background:whitesmoke;padding: 12px 16px;flex-grow: 1;
display: flex;flex-direction: column;justify-content: flex-end;align-items: flex-start;
  >ol{margin: 0 -12px;
      >li{
        background:#d9d9d9;
        border-radius:18px;
        display: inline-block;
        padding: 2px 18px;
        font-size: 14px;
        margin: 8px 12px;
        transition: all 0.3s ;
        &.selected{
        background:#81ed8d;
        }
        &:hover{
        cursor: pointer;
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

type Props = {
    value: number[],
    onChange:(selected:number[])=>void
}
const TagSection: React.FC<Props> = (props) => {
    const {tags,addTag} = useTags()
    const selectedTagIds=props.value

    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId)
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t !== tagId))
        } else {
            props.onChange([...selectedTagIds, tagId])
        }
    }
    const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? "selected" : ""

    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li onClick={() => onToggleTag(tag.id)} key={tag.id}
                        className={getClass(tag.id)}>{tag.name}</li>)}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}


export default TagSection