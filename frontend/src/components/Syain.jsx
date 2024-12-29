import React from "react";
import { useNavigate } from "react-router-dom";

function Syain(){
    const navigate = useNavigate();
    const goToSLogin = () => {
        navigate('/syain/s_login');
    }
    return (
        <div>
            <h2>syain</h2>
            <button onClick={goToSLogin}>Go To SLogin</button>
        </div>
    )
}

export default Syain;