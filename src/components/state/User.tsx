import {useState} from "react";

type AuthUser = {
    name: string,
    email: string,
}

export default function User() {
    const [user, setUser] = useState<AuthUser | null>(null);
    console.log(user)

    const handleLogin = () => {
        setUser({
            name: "Rehad",
            email: "engr.rehad@gmail.com"
        })
    }

    const handleLogout = () => {
      setUser(null)
    }
    return(
        <div>
            <h1>
                {
                    user !== null?`Welcome ${user.name}!`:"Welcome Guest!"
                }
            </h1>
            {
                user === null?(
                    <button onClick={handleLogin}>Login</button>
                ):(
                    <button onClick={handleLogout}>Logout</button>
                )
            }
        </div>
    )
}