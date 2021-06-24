import { createContext, useState } from 'react';
import './App.css';

import Container from './components/Container';
import Header from './components/Header'
import MemoContainer from './components/MemoContainer'
import MemoList from './components/MemoList'
import Editor from './components/Editor'

import { addMemo } from './memo'

export const MemoContext = createContext<any>([])
export const SelectContext = createContext<any>(-1) // 初期化？


function App() {
  const [memo, setMemo] = useState<any>([])
  const [select, setSelect] = useState<any>(-1) //any 

  return (
    <SelectContext.Provider value={[select, setSelect]}>
    <MemoContext.Provider value={[memo, setMemo]}>
    <Container>
      <Header addMemo={addMemo} />
      
      <MemoContainer>
        <MemoList />
        <Editor />
      </MemoContainer>
      
      </Container>
    </MemoContext.Provider>
    </SelectContext.Provider>

  );
}

export default App;
