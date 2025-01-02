import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SRegister() {
  // ログイン後に /shain_register/:companyId へ遷移していると仮定
  const { companyId } = useParams();

  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const res = await fetch(`https://localhost:8443/api/employee/company/${companyId}`);
      if (!res.ok) {
        throw new Error('Failed to fetch employees');
      }
      const data = await res.json();
      setEmployees(data);
    } catch (err) {
      console.error(err);
      setMessage('社員一覧の取得に失敗しました');
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://localhost:8443/api/employee/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete employee');
      }
      // 削除成功したらメッセージをセット
      setMessage(`社員ID ${id} を削除しました`);
      // 再度社員一覧を取得
      fetchEmployees();
    } catch (err) {
      console.error(err);
      setMessage(`社員削除に失敗しました: ${err.message}`);
    }
  };

  useEffect(() => {
    if (companyId) {
      fetchEmployees();
    }
  }, [companyId]);

  useEffect(() => {
    if (employeeId === '') {
      setMessage2('社員IDはこちらに表示されます。');
    } else {
      setMessage2(`あなたの社員IDは ${employeeId}です。`);
    }
  }, [employeeId]);

  // 社員登録
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      employeeName,
      companyId: Number(companyId), // 文字列ならNumber()で変換
    };

    try {
      const res = await fetch('https://localhost:8443/api/employee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to register employee');
      }

      const json = await res.json();
      setMessage(`登録が完了しました: 社員名は=${json.employeeName}です。`);

      fetchEmployees();
      setEmployeeId(json.employeeId)

    } catch (err) {
      console.log(err);
      setMessage('登録に失敗しました。');
    }
  };

  return (
    <div>
      <h2>社員登録フォーム</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>会社ID:</label>
          <span style={{ marginLeft: '8px' }}>{companyId}</span>
        </div>
        <div>
          <label>社員名: </label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>
        <button type="submit">登録
        </button>
      </form>
      {message ? <p>{message}</p> : <p></p>}
      <p>{message2}</p>

      <h3>社員一覧</h3>
      <ul>
        {employees.length > 0 ? (
          employees.map((emp) => (
            <li key={emp.employeeId}>
              [ID: {emp.employeeId}] {emp.employeeName}{' '}
              <button onClick={() => handleDelete(emp.employeeId)}>削除</button>
            </li>
          ))
        ) : (
          <li>社員がいません</li>
        )}
      </ul>
    </div>
  );
}

export default SRegister;