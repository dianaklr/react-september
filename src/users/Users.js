import {useState} from "react";
import User from "../user/User";
import Details from "../details/Details";


export default function Users(){

    const[users, setUsers] = useState([])
    const[user, setUser] = useState(null)
    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setUsers(value);
        })

    const showUser = (obj) => {
        setUser(obj)
    }

    return(
        <div>
            {
                users.map(user => <User key = {user.id}
                user = {user}
                />)
            }
            {
                user && <Details key={user.id} user={user} />
            }
        </div>
    )
}