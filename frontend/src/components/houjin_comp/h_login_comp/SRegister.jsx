import React, { useState, useEffect } from 'react';

function SRegister(){
    const [companyId,setCompanyId] = useState('');
    const [employeeName,setEmployeeName] = useState('');

    // 削除すること
    // useEffect(() => {
    //     console.log(companyId);
    //     console.log(employeeName);
    // },[companyId,employeeName])
    return (
        <div>
            <h2>SRegister</h2>
            <div>
                <form>
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
            </div>
        </div>

    )
}

export default SRegister;