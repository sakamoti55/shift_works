import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HLogin() {
  const [companyId, setCompanyId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!companyId || !password) {
      setErrorMessage('会社IDとパスワードを入力してください');
      return;
    }

    try {
      const response = await fetch('https://localhost:8443/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            companyId, password 
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText);
      }

      // ログイン成功時、必要に応じてレスポンスからデータを取得
      // const data = await response.json();

      // エラー表示をクリアしてからルート遷移
      setErrorMessage('');
      navigate(`/houjin/h_login/s_register/${companyId}`);

    } catch (error) {
      // ログイン失敗時(パスワード違い・サーバエラーなど)
      console.error(error);
      setErrorMessage('ログインに失敗しました: ' + error.message);
    }
  };

  return (
    <div>
      <h2>HLogin</h2>
      <div>
        <label>会社ID: </label>
        <input
          type="text"
          value={companyId}
          onChange={(e) => setCompanyId(e.target.value)}
        />
      </div>
      <div>
        <label>パスワード：</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {errorMessage && (
        <div style={{ color: 'red', marginTop: '8px' }}>{errorMessage}</div>
      )}

      <button onClick={handleLogin} style={{ marginTop: '8px' }}>
        ログイン
      </button>
    </div>
  );
}

export default HLogin;