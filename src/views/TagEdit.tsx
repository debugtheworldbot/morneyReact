import React from "react";
import {useTags} from "../components/useTags";
import {NavLink, useParams} from 'react-router-dom'
import Layout from "../components/Layout";
import Icon from "../components/icon";
import {Button} from "../components/Button";
import styled from "styled-components";
import {Center} from "../components/Center";

type Params = {
    id: string
}
const Topbar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    background:#fff;
`
const Label=styled.label`
  background:#fff;
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-top: 8px;
   >span{
    margin-right: 16px;  align-items: center;

   }
   >input{
    border: none;
    background:none;
    flex-grow: 1;
    height: 44px;
   }
`

const TagEdit: React.FC = () => {
    const {findTag,updateTag,deleteTag} = useTags()
    let {id} = useParams<Params>()
    const tag = findTag(parseInt(id))
    if(tag) {
        return (
            <Layout>
                <Topbar>
                    <NavLink to="/tags">
                    <Icon name={'left'}/>
                    </NavLink>
                    <span>编辑标签</span>
                    <Icon/>
                </Topbar>
                <div>
                    <Label>
                        <span>标签名</span>
                        <input type="text" placeholder={"标签名"} value={tag.name}
                               onChange={(e) => {
                                   updateTag(tag.id, {name: e.target.value})
                               }}/>
                    </Label>
                    <Center>
                        <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
                    </Center>
                </div>
            </Layout>
        )
    }else{
        return (
            <Layout>
                <Center>tag不存在~</Center>
            </Layout>
        )
    }
}
export {TagEdit}