import React from 'react';
import { useNavigate } from 'react-router-dom';

function Houjin(){
    const navigate = useNavigate();

    const goToHRegister = () => {
        navigate('/houjin/h_register');
    }
    const goToHLogin = () => {
        navigate('/houjin/h_login');
    }
    return (
        <div>
            <h2>管理者ページ</h2>
            <button onClick={goToHRegister}>会社登録フォーム</button>
            <button onClick={goToHLogin}>社員登録フォーム</button>
        </div>
    )
}

export default Houjin;