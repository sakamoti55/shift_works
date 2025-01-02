import React, { useState, useEffect } from 'react';

function ShiftRegister(){
    const [employeeId,setEmployeeId] = useState();
    const [date,setDate] = useState();
    const [startTime,setStartTime] = useState();
    const [endTime,setEndTime] = useState();

    const [message,setMessage] = useState('');
    const [shiftData, setShiftData] = useState([]); // シフトデータを管理するステート

    useEffect(() => {
        fetchShift();
    },[])
    const fetchShift = async () => {
        try {
            const res = await fetch('https://localhost:8443/api/shiftdata',{
                method:"GET",
                headers:{"Content-Type": "application/json"},
            });

            if(!res.ok){
                throw new Error('Failed to register');
            }

            const json = await res.json();
            setShiftData(json);

            setMessage('Registration is successful');

        }catch{
            console.log(err);
            setMessage('Registration failed')
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();

        const data = {
            employeeId:Number(employeeId),
            date,
            startTime:`${startTime}:00`,
            endTime:`${endTime}:00`
        }

        try {
            const res = await fetch('https://localhost:8443/api/shiftdata',{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(data),
            });

            if(!res.ok){
                throw new Error('Failed to register');
            }

            // const json = await res.json();

            setMessage('Registration is successful');

            fetchShift();

        }catch(err){
            console.log(err);
            setMessage('Registration failed')
        }

        
    }
    return (
        <div>
            <h2>シフト登録フォーム</h2>
            <div>
                <form onSubmit={handleClick}>
                    <div>
                    <label>社員ID: </label>
                    <input 
                        type="number"
                        value={employeeId}
                        onChange={e => setEmployeeId(e.target.value)} 
                    />
                    </div>
                    <div>
                    <label>日付: </label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                    </div>
                    <div>
                    <label>開始時刻: </label>
                    <input
                        type="time"
                        value={startTime}
                        onChange={e => setStartTime(e.target.value)}
                    />
                    </div>
                    <div>
                    <label>終了時刻: </label>
                    <input
                        type="time"
                        value={endTime}
                        onChange={e => setEndTime(e.target.value)}
                    />
                    </div>
                    <button type="submit">register</button>
                </form>
                {message ? <p>{message}</p> : <p>nonono</p>}
            </div>
            <div>
            <h2>登録されたシフト一覧</h2>
            {shiftData.length > 0 ? (
              <table border="1" cellPadding="10">
                <thead>
                  <tr>
                    <th>ShiftDataID</th>
                    <th>日付</th>
                    <th>開始時間</th>
                    <th>終了時間</th>
                  </tr>
                </thead>
                <tbody>
                  {shiftData.map(shift => (
                    <tr key={shift.id}>
                      <td>{shift.employee.employeeName}</td>
                      <td>{shift.date}</td>
                      <td>{shift.startTime}</td>
                      <td>{shift.endTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>シフトが登録されていません。</p>
            )}
            </div>
        </div>
    )
}

export default ShiftRegister;