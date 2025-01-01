import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Top from './components/Top';
import Houjin from './components/Houjin';
import Syain from './components/Syain';

import HRegister from './components/houjin_comp/HRegister';
import HLogin from './components/houjin_comp/HLogin';
import SRegister from './components/houjin_comp/h_login_comp/SRegister';

import SLogin from './components/syain_comp/SLogin';

import ShiftRegister from './components/syain_comp/s_login_comp/ShiftRegister';
import ShiftView from './components/syain_comp/s_login_comp/ShiftView';

function App() {
  return (
    <BrowserRouter>
      <h1>route</h1>
      <Routes>
        <Route path="/">

          {/* トップページ */}
          <Route index element={<Top />} />

          {/* 法人セクション */}
          <Route path="houjin"> 
            <Route index element={<Houjin />} />
            <Route path="h_register" element={<HRegister />} />

            {/* 法人ログインセクション */}
            <Route path="h_login">
              <Route index element={<HLogin />} />
              <Route path="s_register/:companyId" element={<SRegister />} />
            </Route>
          </Route>

          {/* 社員セクション */}
          <Route path="syain">
            <Route index element={<Syain />} />

            {/* 社員ログインセクション */}
            <Route path="s_login">
              <Route index element={<SLogin />} />
              <Route path="shift_register" element={<ShiftRegister />} />
              <Route path="shift_view" element={<ShiftView />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
