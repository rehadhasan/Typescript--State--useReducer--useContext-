import {useState} from "react";

export default function Login() {
    const [login, setLogin] = useState(false);
    console.log(login)

    const handleLogin = () => {
        setLogin(true);
    }

    const handleLogout = () => {
        setLogin(false);
    }
    return(
        <div>
            <h1>
                {login?"Welcome Guest!":"Please Login to continue..."}
            </h1>
            {
                login ?(
                    <button onClick={handleLogout}>Logout</button>
                ):(
                    <button onClick={handleLogin}>Login</button>
                )
            }
        </div>
    )
}