import {useState} from "react"

interface AuthUser {
    name: string
    email: string
}

export const User = () => {
    const [user , setUser] = useState<null | AuthUser >(null)
    const handleLogin = () => {
        setUser({
            name: 'SAddie' ,
            email: 'saddie14@GMAIL.COM'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (<div>
            <button onClick={handleLogin}> Login </button>
            <button onClick={handleLogout}> Logout </button>
            {user != null ? (
  // 🟢 Wrapper Fragment satisfies the "one parent element" rule!
            <>
                <div>Username is {user.name}</div>
                <div>User email is {user.email}</div>
            </>
            ) 
            : (
                <div>Not logged in</div>
            )}
            
    </div>)




}