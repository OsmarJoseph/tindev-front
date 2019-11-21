import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import './Main.css';
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import api from '../services/api'
import io from 'socket.io-client';
import dislike from '../assets/dislike.svg'

export default function Main({match}){
    const [users,setUsers] = useState([]);
    // execute this function every time the variables in the array change
    useEffect(()=>{
        async function loadUsers(){
            const usersResponse = await api.get('/devs/',{headers:{user:match.params.id}})
            setUsers(usersResponse.data)
        }
        loadUsers()
        // param from the route
    },[match.params.id])

    useEffect(() => {
        const socket = io('http://192.168.42.68:3333')
    }, [match.params.id])
    async function handleRating(id,typeOfRating){
        // the second paramater for post is the body , for this is null
        await api.post(`/devs/${id}/${typeOfRating}`,null,{headers:{user:match.params.id}})
        // always use set function instead of using methods on the user array
        // remove the user that have the id, id
        setUsers(users.filter(user=>user._id !== id))
    }
    return (
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="TinDev"/>
            </Link>
            { users.length > 0 ?  (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name}/>
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>
                            <div className="buttons">
                                {/* handleRating(user._id) executaria a função automaticamente */}
                                <button type="button" onClick={() => handleRating(user._id,'likes')}>
                                    <img  src={like} alt="like"></img>
                                </button>
                                <button type="button" onClick={() => handleRating(user._id,'dislikes')}>
                                    <img  src={dislike} alt="dislike"></img>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                ) : (<div className="empty">Acabou :(</div>) }
        </div>
    )
}

