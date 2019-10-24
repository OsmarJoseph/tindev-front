import React, {useEffect} from 'react';
import './Main.css';
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import api from '../services/api'
import dislike from '../assets/dislike.svg'

export default function Main({match}){
    // execute this function every time the variables in the array change
    useEffect(()=>{
        async function loadUsers(){
            const usersResponse = await api.get('/devs/',{headers:{user:match.params.id}})
        }
        loadUsers()
    },[match.params.id])
    return (
        <div className="main-container">
            <img src={logo} alt="TinDev"/>
            <ul>
                <li>
                    <img src={logo} alt="TinDev"/>
                    <footer>
                        <strong>Teste</strong>
                        <p>descurajfasjdfjasjhfs</p>

                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img  src={like} alt="like"></img>
                        </button>
                        <button type="button">
                            <img  src={dislike} alt="dislike"></img>
                        </button>
                    </div>
                </li>
                <li>
                    <img src={logo} alt="TinDev"/>
                    <footer>
                        <strong>Teste</strong>
                        <p>descurajfasjdfjasjhfs</p>

                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img  src={like} alt="like"></img>
                        </button>
                        <button type="button">
                            <img  src={dislike} alt="dislike"></img>
                        </button>
                    </div>
                </li>
                <li>
                    <img src={logo} alt="TinDev"/>
                    <footer>
                        <strong>Teste</strong>
                        <p>descurajfasjdfjasjhfs</p>

                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img  src={like} alt="like"></img>
                        </button>
                        <button type="button">
                            <img  src={dislike} alt="dislike"></img>
                        </button>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}

