import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Top from './components/Top';
import Houjin from './components/Houjin';
import Syain from './components/Syain';

import HRegister from './components/houjin_comp/HRegister';
import HLogin from './components/houjin_comp/HLogin';
import SRegister from './components/houjin_comp/h_login_comp/SRegister';

import SLogin from './components/syain_comp/SLogin';

function App() {
  return (
    <Router>
      <h1>route</h1>
      <Routes>
        <Route path="/">

          {/* トップページ */}
          <Route index element={<Top />} />

          {/* Houjinセクション */}
          <Route path="houjin"> 
            <Route index element={<Houjin />} />
            <Route path="h_register" element={<HRegister />} />

            {/* h_loginセクション */}
            <Route path="h_login">
              <Route index element={<HLogin />} />
              <Route path="s_register" element={<SRegister/>} />
            </Route>

          </Route>

          {/* 社員セクション */}
          <Route path="syain">
            <Route index element={<Syain />} />
            <Route path="s_login" element={<SLogin />} />
          </Route>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
