import React ,{useState} from 'react'

export const LoggedIn = () => {
    const [isLoggedIn , setisLoggedIn ]   = useState(false)

    const handleLogin = () => {
        setisLoggedIn(true)
    } 

    const handleLogout = () => {
        setisLoggedIn(false)
    }


  return (
    <div>
        <button onClick  = {handleLogin}>Loginin</button>
        <button onClick = {handleLogout}>Loginout</button>
        <div>User is { isLoggedIn ? 'logged in' : 'logged Out'}</div>
    </div>
  )
}
