/** @jsxImportSource @emotion/react */

import { useState, useContext } from 'react';
import HeaderContainer from './HeaderContainer'
import { MemoContext } from '../App'
import { css, jsx } from '@emotion/react'

type Props = {
    addMemo : (title: string, list: any) => any
}

function Header(props:Props) {
    const [memo, setMemo] = useContext(MemoContext)
    const [title, setTitle] = useState("");

    const handleClick = (event:any) => {
        event.preventDefault();
        if(title != "") {
            // console.log(props.addMemo(title, []));
            setMemo(props.addMemo(title, memo))
            setTitle("");
        }
    }

    return (
        <HeaderContainer>
        <input type="text" css={input} value={title} onChange={(e)=> {setTitle(e.target.value)}} placeholder="メモのタイトルを入力してください" />
        <button onClick={(e)=> handleClick(e)}>＋</button>
        </HeaderContainer>
    );
}

const input = css`
    width:30%;
    height:5vh;
    margin-bottom:1vh;
    margin-right:1vh;
`

export default Header;
