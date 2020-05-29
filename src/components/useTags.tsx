import {useState} from "react";

const useTags=()=>{ //封装一个自定义hook，必须以use开头
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
    return {tags,setTags}
}
export {useTags}
