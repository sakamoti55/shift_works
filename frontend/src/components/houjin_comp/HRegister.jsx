import React, { useState, useEffect } from 'react';

function HRegister(){

    const [companyName,setCompanyName] = useState('');
    const [message,setMessage] = useState('');
    const [companyId,setCompanyId] = useState('');
    const [message2,setMessage2] = useState('');

    const getCompanyId = async() => {

        try {
            // 非同期
            const res = await fetch(`http://localhost:8080/api/company/${companyName}`,{
                method: 'GET',
                headers:{'Content-Type': 'application/json'}
            });

            if(!res.ok){
                throw new Error('Failed to fetch companyId');
            }

            // 非同期
            const json = await res.json();
            
            // setMessage2(`your company id is ${json.companyId}.`);

            setCompanyId(json.companyId);

        }catch{
            console.log(err);
            setMessage2('Fetching companyId failed');
        }
    }

    // 中身の処理を書きやすいのでuseEffectで書き直した
    useEffect(() => {
        companyId === '' ? setMessage2(`Company ID will be displayed here.`) : setMessage2(`your company id is ${companyId}.`) 
    },[companyId])

    // form送信時の挙動
    const handelSubmit = async(e) => {
        e.preventDefault();
        const data = {
            companyName
        };
        
        try {
            // 非同期
            const res = await fetch('http://localhost:8080/api/company', {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(data)
            });

            if(!res.ok){
                throw new Error('Failed to create company');
            }

            // 非同期
            const json = await res.json();

            // テンプレートリテラル
            setMessage(`Registration is successful: companyName=${json.companyName}`);

        }catch(err){
            console.log(err);
            setMessage('Registration failed.')
        }
        
    };
    
    return (
        <div>
            <h2>HRegister</h2>
            <form onSubmit={handelSubmit}>
                <label>会社名: </label>
                <input
                    type="text"
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                />
                <button type="submit">register</button>
            </form>
            {message ? <p>{message}</p> : <p>aaa</p>}
        </div>
    )
}

export default HRegister;