import React from "react";
import { useNavigate } from "react-router-dom";

function SLogin(){
    const navigate = useNavigate();
    const goToShift = () => {
        navigate('/syain/s_login/shift_register');
    }

    return (
        <div>
            <h2>社員ログインフォーム</h2>
            <button onClick={goToShift}>シフトフォームへ</button>
        </div>
 
    )
}

export default SLogin;