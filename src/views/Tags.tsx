import Layout from "../components/Layout";
import React from "react";
import {useTags} from "../components/useTags";
import styled from "styled-components";
import Icon from "../components/icon";

const Taglist=styled.ol`
    font-size: 16px;
    background:white;
  >li {
   border-bottom:1px solid #d5d5d9;
   line-height: 20px;
   padding: 12px 0;
   margin: 0 16px;
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
  `
const Button=styled.button`
  font-size: 18px;border: none;padding: 10px 29px;background:#767676;border-radius: 4px;color: white;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 52px;
`
function Tags() {
    const {tags,setTags} = useTags()
    return (
        <Layout>
            <Taglist>
                {tags.map(tag=>
                    <li key={tag}>
                        <span className={'oneLine'}>{tag}13222222222222222222222222222222221111222</span>
                        <Icon name={"right"} />
                    </li>
                    )}
            </Taglist>
            <Center>
                <Button>NEW</Button>
            </Center>

        </Layout>

    );
}

export default Tags;