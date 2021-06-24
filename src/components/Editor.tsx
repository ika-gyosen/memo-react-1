/** @jsxImportSource @emotion/react */
import { useContext, useState, useEffect } from 'react'
import { MemoContext, SelectContext } from '../App'
import { css, jsx } from '@emotion/react'

import { modMemo } from '../memo'

function Editor() {
    const [memo, setMemo] = useContext(MemoContext)
    const [select, setSelect] = useContext(SelectContext)

    const [textareaValue, setTextareaValue] = useState() //不要？
    console.log("selected", select)

    useEffect(()=>{
        // メモが存在し、かつ選択されている場合エディターに文字を出す selectは左で選択されたmemoのidを持つ
        if(memo.length !== 0 && select !== -1){
            const selectedMemo = memo.find((item:any) =>{return item.id === select})
            setTextareaValue(selectedMemo.memo);
        }
    })

    const handleChange = (event:any) => {
        setTextareaValue(event.target.value)
        setMemo(modMemo(select, memo, 'memo', event.target.value))
    }
    return (
        <div css={css`width:100%;padding-top:3%;`}>
            {memo.length !== 0 && select !== -1 ? // 汚い 何も選択されていないときエディタを出さず説明文を出す
                <textarea rows={400} value={textareaValue} placeholder={"メモを入力してください"} css={textStyle} onChange={(e)=>{handleChange(e)}}></textarea>
                :<div css={css`width:100%;padding:5%;font-size:3vh;`}>メモを選択してください</div>
            }
        </div>
    )
}

const textStyle = css`
    &:focus {
        outline:0;
    }
    width:100%;
    border:none;
    font-size:5vh;
    padding:3%;
    overflow-y:scroll;
    overflow-x:scroll;
`;

export default Editor;
