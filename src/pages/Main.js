import React, {useEffect,useState} from 'react';
import './Main.css';
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import api from '../services/api'
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
    },[match.params.id])
    async function handleLike(id){

    }
    async function handleDislike(id){
        await api.post(`/devs/${id}/dislikes`,null,{headers:{user:match.params.id}})
        // always use set function instead of using methods on the user array
        setUsers(users.filter(user=>user._id !== id))
    }
    return (
        <div className="main-container">
            <img src={logo} alt="TinDev"/>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <img src={user.avatar} alt={user.name}/>
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="buttons">
                                                {/* handleLike(user._id) executaria a função automaticamente */}
                            <button type="button" onClick={() => handleLike(user._id)}>
                                <img  src={like} alt="like"></img>
                            </button>
                            <button type="button" onClick={() => handleDislike(user._id)}>
                                <img  src={dislike} alt="dislike"></img>
                            </button>
                        </div>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

