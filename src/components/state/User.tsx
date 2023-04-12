import React  , {useState} from 'react'

type AuthUser ={
    name : string
    email : string
}

export const User = () => {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    // const handleLogout = () => {
    //     setUser(null)
    // }
    const handleLogin = () => {
        setUser({
            name : "Anurag",
            email : "anurag@gmail"
        })
    }
  return (
    <div>
        <button onClick  = {handleLogin}>Loginin</button>
        {/* <button onClick = {handleLogout}>Loginout</button> */}
        <div>User name is {user.name}</div>
        <div>User email is {user.email}</div>
    </div>
  )
}
