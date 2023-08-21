import logo from './logo.svg';
import './App.css';
import { Reset } from 'styled-reset';
import MainLayout from './components/MainLayout/MainLayout';
import { Global } from '@emotion/react';
import * as S from './styles/common';
import { Route, Routes } from 'react-router-dom';
import Today from './pages/Today/Today';
import { useState } from 'react';
import Calendar from './pages/Calendar/Calendar';

function App() {
  const [ isShow, setIsShow ] = useState(false);

    const handleMenuToggleClick = () => {
        setIsShow(!isShow); // 클릭이 될 때마다 상태가 토글
    }

  return (
    <>
      <Reset/>
      {/* Global : 전역 */}
      <Global styles={S.GSCommon}></Global>
      <MainLayout>
        <Routes>
          {/* 경로엔 소문자만 쓸 수 있음 */}
          <Route path="/today" element={ <Today /> }/>
          <Route path="/upcoming" />
          <Route path="/calendar" element={ <Calendar/> } />
          <Route path="/stickywall" />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
