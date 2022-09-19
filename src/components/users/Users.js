import {users} from "../userList/list";
import User from "../userList/User";

export default function Users(){
    return(
        <div>
            {users.map(user=>( <User item = {user} key = {user.id}/>))}
        </div>
    )
}

