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
      <h1>Top Page</h1>
      <button onClick={goToHoujin}>Go to houjin</button>
      <button onClick={goToSyain}>Go to syain</button>
    </div>
  );
}

export default Top;
