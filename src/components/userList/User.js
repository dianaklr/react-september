import {simpsons} from "./list";


export default function User(props){
   let  {item:simpson} = props;
    return(
        <div>
            <div >
            <h2>name - {simpson.name}</h2>
            <h3>surname - {simpson.surname}</h3>
             <p>age - {simpson.age}</p>
             <p>Info: {simpson.info} </p>
             <img src={simpson.photo}/>
            </div>
        </div>
    )
}

