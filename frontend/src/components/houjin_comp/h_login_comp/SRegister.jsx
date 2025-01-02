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
      setMessage2('Employee ID will be displayed here.');
    } else {
      setMessage2(`Your employee id is ${employeeId}.`);
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
      setMessage(`Registration is successful: employeeName=${json.employeeName}`);

      // 社員登録が成功したら一覧を再取得
      fetchEmployees();

      // employeeIdを取得する処理を実行したければ↓
      // getEmployeeId();
    } catch (err) {
      console.log(err);
      setMessage('Registration failed.');
    }
  };

  return (
    <div>
      <h2>SRegister</h2>

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
        <button type="submit">register</button>
      </form>
      {message ? <p>{message}</p> : <p>nonono</p>}
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