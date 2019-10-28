import React, {useState} from 'react';
import './Login.css';
import api from '../services/api';
import logo from '../assets/logo.svg'


export default function Login({history}){
    const [userName, setUserName] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        // send username on req body
        const storeUserResponse = await api.post('/devs', {username:userName});
        const { _id:userId } = storeUserResponse.data 

        history.push(`/dev/${userId}`);
    }
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev"/>
                <input placeholder="Digite seu usuário no GitHub" value={userName} onChange={e => setUserName(e.target.value)}/>
                <button type="submit"><p>Enviar</p></button>
            </form>
        </div>
    )
}

