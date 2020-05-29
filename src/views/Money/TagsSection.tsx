import styled from "styled-components";
import React from "react";
import {useTags} from "../../components/useTags";

const Wrapper = styled.section`background:#FFFFFF;padding: 12px 16px;flex-grow: 1;
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

type Props = {
    value: string[],
    onChange:(value:string[])=>void
}
const TagSection: React.FC<Props> = (props) => {
    const {tags,setTags} = useTags()
    const selectedTags=props.value
    const onAddTag = () => {
        const tagName = window.prompt("请输入新标签的名称")
        if (tagName !== null) {
            setTags([...tags, tagName])
        }
    }
    const onToggleTag = (tag: string) => {
        const index = selectedTags.indexOf(tag)
        if (index >= 0) {
            props.onChange(selectedTags.filter(t => t !== tag))
        } else {
            props.onChange([...selectedTags, tag])
        }
    }
    const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? "selected" : ""

    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li onClick={() => onToggleTag(tag)} key={tag}
                        className={getClass(tag)}>{tag}</li>)}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}


export default TagSection