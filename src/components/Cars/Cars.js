import CarForm from "../CarForm/CarForm";
import {useState, useEffect} from "react";
import {carService} from "../../servises";
import {Car} from "../Car/Car";

const Cars = () => {
   const [cars, setCars] =  useState([])
     useEffect(()=>{
            carService.getAll().then(({data})=>setCars(data))

         }, []);
    return (
        <div>
            <CarForm/>
            <hr/>
            {cars.map(car=><Car key={car.id} car={car}/>)}

        </div>
    );
};

export {Cars};