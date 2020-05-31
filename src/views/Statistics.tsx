import Layout from "../components/Layout";
import React, {useState} from "react";
import CategorySection from "./Money/CategorySection";
import styled from "styled-components";
import {useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import day from 'dayjs'
const  CategoryWrapper=styled.div`
  background:white;
`
function Statistics() {
    const [category,setCategory]=useState<'-'|'+'>("-")
    const {records}=useRecords()
    const {getName}=useTags()
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category} onChange={value=>setCategory(value)}/>
            </CategoryWrapper>
            <div>
                {records.map(r=>{
                    return <div>
                        {r.tagIds.map(tagId=>getName(tagId))}
                        <hr/>
                        {r.amount}
                        <hr/>
                        {day(r.createdAt).format("YYYY年MM月DD日")}
                    </div>

                })}
            </div>

        </Layout>
    );
}
export default Statistics;