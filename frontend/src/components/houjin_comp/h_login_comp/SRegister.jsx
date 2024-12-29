import React, { useState, useEffect } from 'react';

function SRegister(){

    const [companyId,setCompanyId] = useState();
    const [employeeName,setEmployeeName] = useState('');
    const [employeeId,setEmployeeId] = useState('');
    const [message,setMessage] = useState('');
    const [message2,setMessage2] = useState('');

    const getEmployeeId = async () => {
        try {
            const res = await fetch(`http://localhost:8080/api/employee/${employeeName}`,{
                method: 'GET',
                headers:{'Content-Type': 'application/json'}
            });

            if(!res.ok){
                throw new Error('Failed to fetch employeeId');
            }

            const json = await res.json();

            setEmployeeId(json.employeeId);

        }catch{
            console.log(err);
            setMessage2('Fetching employeeId failed')
        }
    }

    // 中身の処理を書きやすいのでuseEffectで書き直した
    useEffect(() => {
        employeeId === '' ? setMessage2(`Employee ID will be displayed here.`) : setMessage2(`your employee id is ${employeeId}.`) 
    },[employeeId])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            employeeName,
            companyId
        }
        
        try {
            const res = await fetch('http://localhost:8080/api/employee',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
        
            if(!res.ok){
                throw new Error('Failed to register employee');
            }

            const json = await res.json();
            
            setMessage(`Registration is successful: employeeName=${json.employeeName}`);
            
            getEmployeeId();
        }catch(err){
            console.log(err);
            setMessage('Registration failed.')
        }
    }
    
    // 削除すること
    // useEffect(() => {
    //     console.log(companyId);
    //     console.log(employeeName);
    // },[companyId,employeeName])
    return (
        <div>
            <h2>SRegister</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label>会社ID: </label>
                    <input
                        type="number"
                        value={companyId}
                        onChange={e => setCompanyId(e.target.value)}
                    />
                    </div>
                    <div>
                    <label>社員名: </label>
                    <input
                        type="text"
                        value={employeeName}
                        onChange={e => setEmployeeName(e.target.value)}
                    />
                    </div>
                    <button type="submit">register</button>
                </form>
                {message ? <p>{message}</p> : <p>nonono</p>}
            </div>
            <div>
                <p>{message2}</p>
            </div>
        </div>

    )
}

export default SRegister;