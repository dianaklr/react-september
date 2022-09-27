import {useState,useEffect} from "react";
import Launch from "../launch/Launch";

export default function Launches(){
    const[launches, setLaunches] = useState([])


    useEffect(()=>{
    fetch('https://api.spacexdata.com/v3/launches/')
        .then(value => value.json())
        .then(value => {
            setLaunches(value);
        })
     }, []);

    return(
        <div>
            {
                launches.map(launch => <Launch key = {launch.flight_number}
                                               launch = {launch}
                />)
            }
        </div>
    )
}
