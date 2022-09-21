import './Character.css'

export default function Character(props){
    const { character} = props;


    return(
        <div>

        <div className={`main`}>
            <div className={`gray`}>

                <div className={`personImg`}>
                    <img src={character.image}/>
                </div>

                <div className={`person`}>
            <h2>{character.id}</h2>
            <h3>{character.name}</h3>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.type}</p>
                </div>
            </div>
        </div>

        </div>
    )
}

