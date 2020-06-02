import styled from "styled-components";
import React, {useState} from "react";


const Wrapper = styled.section`
display: flex;
flex-direction: column;
  > .output{
    background:#FFFFFF;
    font-size: 36px;
    line-height: 64px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset  0 -5px 5px -5px rgba(0,0,0,0.25),
                inset  0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    >button{
    font-size: 18px;
    float: left;
    width: 25%;
    height: 64px;
    border: 1px solid #999;
    background:#fff;
    opacity: 0.7;
    transition: all 0.3s;
     &.ok{
      height: 128px;
      float: right;
     }
     &.zero{
      width: 50%;
     }
     &:hover{
     opacity: 1;
     background:#e0e0e0;
     }
     
    }
  }
`

type Props={
    value:number,
    onChange:(value:number)=>void
    ok?:()=>void
}
const NumberPadSection: React.FC<Props> = (props) => {
    const [output,_setOutput]=useState(props.value.toString())
    const setOutput = (output: string) => {
        let newOutput:string
        if (output.length > 16) {
            newOutput=output.slice(0, 16)
        }else{
            newOutput=output
        }
        _setOutput(newOutput)
        props.onChange(parseFloat(newOutput))
    }
    const buttonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent
        if (text === null) {
            return
        }
        switch (text) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                if (output === '0') {
                    setOutput(text)
                } else {
                    setOutput(output + text)
                }
                break;
            case '删除':
                if (output.length === 1) {
                    setOutput('0')
                } else {
                    setOutput(output.slice(0, -1))
                }
                break;
            case '清空':
                setOutput('0')
                break;
            case '.':
                if (output.includes('.')) {
                    return;
                } else {
                    setOutput(output + '.')
                }
                break;
            case 'OK':
                if(props.ok){
                props.ok()}
                break;
        }
    }
    return (
        <Wrapper>
            <div className={"output"}>
                {output}
            </div>
            <div className={"pad clearfix"} onClick={buttonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className={"ok"}>OK</button>
                <button className="zero">0</button>
                <button>.</button>

            </div>
        </Wrapper>
    )
}
export default NumberPadSection