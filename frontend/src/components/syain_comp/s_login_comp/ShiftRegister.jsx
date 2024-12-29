import React, { useState, useEffect } from 'react';

function ShiftRegister(){
    const [employeeId,setEmployeeId] = useState();
    const [date,setDate] = useState();
    const [startTime,setStartTime] = useState();
    const [endTime,setEndTime] = useState();

    const [message,setMessage] = useState('');
    const handleClick = async (e) => {
        }
    return (
        <div>
            <h2>ShiftRegister</h2>
            <div>
                <form>
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
                    <button onSubmit={handleClick}>register</button>
                </form>
                {message ? <p>{message}</p> : <p>nonono</p>}
            </div>
        </div>
    )
}

export default ShiftRegister;