import {useEffect, useState} from "react";
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";

const useTags = () => { //封装一个自定义hook，必须以use开头
    const [tags, setTags] = useState<{ id: number; name: string }[]>([])
    useEffect(()=>{
        let localTags = JSON.parse(window.localStorage.getItem('tags')||'[]')
        if(localTags.length===0){
            localTags=[
                {id: createId(), name: '衣'},
                {id: createId(), name: '食'},
                {id: createId(), name: '住'},
                {id: createId() ,name: '行'},]
        }
        setTags(localTags)
    },[]) //run when component hooking
    useUpdate(()=>{window.localStorage.setItem('tags', JSON.stringify(tags))},[tags])
    const findTag=(id:number)=>tags.filter(tags=>tags.id===id)[0]
    const findIndex=(id:number)=>{
        let result=-1
        for(let i=0;i<tags.length;i++){
            if(tags[i].id===id){
                result=i
                break
            }
        }
        return  result
    }
    const updateTag=(id:number,obj:{name:string})=>{
        setTags(tags.map(tag=>tag.id===id?{id,name:obj.name}:tag))
    }
    const deleteTag=(id:number)=>{
        alert("删除成功")
        setTags(tags.filter(tag=>tag.id!==id))
    }
    const addTag = () => {
        const tagName = window.prompt("请输入新标签的名称")
        if (tagName !== null && tagName!=='') {
            setTags([...tags, {id:createId(),name:tagName}])
        }
    }
    const getName=(id:number)=>{
        const i =tags.filter(t=>t.id===id)[0]
        return i ? i.name:''
    }
    return {tags, setTags,findTag,updateTag,findIndex,deleteTag,addTag,getName}
}
export {useTags}
