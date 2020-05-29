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
        tags:[] as string[],
        notes:'',
        category: '-' as ('-'|'+'),
        amount:0
    })
    return (
        <MyLayout>
            {selected.tags.join(',')};
            {selected.notes}
            {selected.category}
            {selected.amount}
            <TagsSection value={selected.tags} onChange={(tags)=>setSelected({
                ...selected,
                tags:tags})}/>
            <NoteSection  value={selected.notes}
                            onChange={(note:string)=>{setSelected({
                                ...selected,
                                notes:note
                            })}}/>
            <CategorySection value={selected.category}
                                onChange={(category:('-'|'+'))=>setSelected({
                                    ...selected,
                                    category: category
                                })}/>
            <NumberPadSection value={selected.amount}
                                onChange={(amount:number)=>setSelected({
                                    ...selected,
                                    amount: amount
                                })}
                                ok={()=>{}}/>
        </MyLayout>);
}

export default Money;