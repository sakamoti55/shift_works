import React from "react";
import { useNavigate } from "react-router-dom";

function SLogin(){
    const navigate = useNavigate();
    const goToShift = () => {
        navigate('/syain/s_login/shift_register');
    }
    const goToView = () => {
        navigate('/syain/s_login/shift_view');
    }

    return (
        <div>
            <h2>SLogin</h2>
            <button onClick={goToShift}>goToShift</button>
            <button onClick={goToView}>goToView</button>
        </div>
 
    )
}

export default SLogin;