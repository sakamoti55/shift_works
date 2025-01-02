import React from 'react';
import { useNavigate } from 'react-router-dom';

function Top() {
  const navigate = useNavigate();

  const goToHoujin = () => {
    navigate('/houjin');
  };

  const goToSyain = () => {
    navigate('/syain');
  };

  return (
    <div>
      <h1>TOP　PAGE</h1>
      <button onClick={goToHoujin}>管理者の方はこちら</button>
      <button onClick={goToSyain}>社員の方はこちら</button>
    </div>
  );
}

export default Top;
