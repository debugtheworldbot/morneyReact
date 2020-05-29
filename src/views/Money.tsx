import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import CategorySection from "./Money/CategorySection";
import NoteSection from "./Money/NoteSection";
import NumberPadSection from "./Money/NumberpadSection";
import TagsSection from "./Money/TagsSection";


const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`
function Money() {
    const [selected,setSelected]=useState({
        tagIds:[] as number[],
        note:'',
        category: '-' as ('-'|'+'),
        amount:0
    })
    const onChange=(obj:Partial<typeof selected>)=>{
        setSelected({...selected, ...obj})
    }
    return (
        <MyLayout>
            <TagsSection value={selected.tagIds} onChange={(tagIds)=>onChange({tagIds})}/>
            <NoteSection value={selected.note} onChange={(note)=>{onChange({note})}}/>
            <CategorySection value={selected.category} onChange={(category)=>onChange({category})}/>
            <NumberPadSection value={selected.amount} onChange={(amount)=>onChange({amount})} ok={()=>{}}/>
        </MyLayout>);
}

export default Money;