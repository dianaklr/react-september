
export default function User(props){
    const {user, showUser} = props;



    return(
        <div>

            <div className={`main`}>
                        <h2>{user.id}</h2>
                        <h2>{user.name}</h2>
                <button onClick={() =>
                {
                    showUser(user)
                }
                }>Click</button>
                </div>
            </div>
    )
}
