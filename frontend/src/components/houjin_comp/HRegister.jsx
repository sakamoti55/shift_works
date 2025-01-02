import React, { useState, useEffect } from 'react';

function HRegister(){

    const [companyName,setCompanyName] = useState('');
    const [companyPassword,setCompanyPassword] = useState('');
    const [message,setMessage] = useState('');
    const [companyId,setCompanyId] = useState('');
    const [message2,setMessage2] = useState('');

    const getCompanyId = async() => {

        try {
            // 非同期
            const res = await fetch(`https://localhost:8443/api/company/${companyName}`,{
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

        }catch(err){
            console.log(err);
            setMessage2('Fetching companyId failed');
        }
    }

    // 中身の処理を書きやすいのでuseEffectで書き直した
    useEffect(() => {
        companyId === '' ? setMessage2(`会社IDはこちらに表示されます。`) : setMessage2(`会社IDは ${companyId}です。`) 
    },[companyId])

    // form送信時の挙動
    const handelSubmit = async(e) => {
        e.preventDefault();
        const data = {
            companyName,
            companyPassword
            
        };
        
        try {
            // 非同期
            const res = await fetch('https://localhost:8443/api/company', {
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
            setMessage(`登録が完了しました: 会社名は=${json.companyName}です。`);
            // getCompanyId関数の呼び出し
            getCompanyId();
        }catch(err){
            console.log(err);
            setMessage('登録に失敗しました')
        }
        
    };
    
    return (
        <div>
            <h2>会社登録フォーム</h2>
            <div>
                <form onSubmit={handelSubmit}>
                    <div>
                        <label>会社名: </label>
                        <input
                            type="text"
                            value={companyName}
                            onChange={e => setCompanyName(e.target.value)}
                        />
                        </div>
                        <div>
                        <label>パスワード: </label>
                        <input
                            type="password"
                            value={companyPassword}
                            onChange={e => setCompanyPassword(e.target.value)}
                        />
                    </div>                    
                    <button type="submit">登録</button>
                </form>
                {message ? <p>{message}</p> : <p></p>}
            </div>
            <div>
                <p>{message2}</p>
            </div>
        </div>
    )
}

export default HRegister;