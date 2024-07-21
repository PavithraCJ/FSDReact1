import { useEffect, useState } from "react"

function Login()
{
    let[loggedin,setLoggedin]=useState('false')

    function toggleLogin()
    {
        if(loggedin)
            {
                setLoggedin(false)
            }
        else
        {
            setLoggedin(true)
        }
    }
    useEffect(()=>{
        setLoggedin(true)
    },[])
    return(
        <div>
            {loggedin && 'Welcome User'}
            {!loggedin && 'Please Login'}

            <button onClick={toggleLogin}>{loggedin?'Logout':'Login'}</button>
        </div>
    )
}
export default Login;