import React from "react";
import {useTags} from "../components/useTags";
import {useParams} from 'react-router-dom'
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
const TagEdit: React.FC = (props) => {
    const {findTag} = useTags()
    let {id} = useParams<Params>()
    const tag = findTag(parseInt(id))
    return (
        <Layout>
            <Topbar>
                <Icon name={'left'}/>
                <span>编辑标签</span>
                <Icon />
            </Topbar>
            <div>
                <Label>
                        <span>标签名</span>
                        <input type="text" placeholder={"标签名"} value={tag.name}/>
                </Label>
                <Center>
                    <Button>删除标签</Button>
                </Center>
            </div>
        </Layout>
    )
}
export {TagEdit}