import {users} from "./list";

export default function User(props){
   let  {item:user} = props;
    return(
        <div>
            <p>name - {user.name}, age - {user.email}</p>
        </div>
    )
}

