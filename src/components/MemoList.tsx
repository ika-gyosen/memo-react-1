/** @jsxImportSource @emotion/react */

import MemoListContainer from './MemoListContainer'
import MemoUl from './MemoUl'
import MemoLi from './MemoLi'
import MemoTitle from './MemoTitle'
import { useContext } from 'react'
import { css, jsx } from '@emotion/react'
import { MemoContext, SelectContext } from '../App'


function MemoList() {
    const [memo, setMemo] = useContext(MemoContext)
    const [select, setSelect] = useContext(SelectContext)


    const handleClick = (event:any,id:number) => {
        event.preventDefault();
        setSelect(id);
    }

  return (
    <MemoListContainer>
        {memo.length === 0 && <p>＋ボタンを押してメモを追加してください</p>}
        <MemoUl>
            {memo.map((item:any) => {
                return(
                    <MemoLi 
                        key={`item-${item.title}`}
                        onClick={(e)=>handleClick(e,item.id)}
                        css={css`${item.id === select ? 'background:#b3f5c4': 'background:#e1e3e1'}`}
                    >
                        <div>{item.id}  {item.date}</div>
                        <MemoTitle>{item.title}</MemoTitle>
                    </MemoLi>
                )
            })
            }
    </MemoUl>
    </MemoListContainer>

  );
}

export default MemoList;
