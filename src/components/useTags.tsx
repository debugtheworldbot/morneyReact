import {useState} from "react";
import {createId} from "../lib/createId";


const defaultTags=[
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId() ,name: '行'},]
const useTags = () => { //封装一个自定义hook，必须以use开头
    const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags)
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
        const index=findIndex(id)
        const tagsClone=JSON.parse(JSON.stringify(tags)) //deep clone
        tagsClone.splice(index,1,{id:id,name:obj.name}) //change content of deep clone
        setTags(tagsClone)
    }
    return {tags, setTags,findTag,updateTag,findIndex}
}
export {useTags}
