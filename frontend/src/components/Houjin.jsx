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
            <h2>houjin</h2>
            <button onClick={goToHRegister}>Go to SRegister</button>
            <button onClick={goToHLogin}>Go to HLogin</button>
        </div>
    )
}

export default Houjin;