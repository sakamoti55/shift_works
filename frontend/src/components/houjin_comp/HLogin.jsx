import React from 'react';
import { useNavigate } from 'react-router-dom';

function HLogin(){
    const navigate = useNavigate();
    const goToSRegister = () => {
        navigate('/houjin/h_login/s_register')
    }

    return (
        <div>
            <h2>HLogin</h2>
            <button onClick={goToSRegister}>Go to SRegister</button>
        </div>
    )
}

export default HLogin;