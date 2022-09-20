import {simpsons} from "../userList/list";
import User from "../userList/User";

export default function Users(){
    return(
        <div>
            {simpsons.map(simpson=>( <User item = {simpson} />))}
        </div>
    )
}

