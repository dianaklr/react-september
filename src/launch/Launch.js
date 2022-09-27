import '../launch/Launch.css';
export default function Launch({launch}){
    if(launch.launch_year!=2020){
    return(

        <div className={'flight'}>
            <p>{launch.mission_name}</p>
            <p>{launch.launch_year}</p>
            <img className={'flightImg'} src={launch.links.mission_patch_small}/>

        </div>
    )
    }
}

