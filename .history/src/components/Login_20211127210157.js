import React, {useState} from 'react'
import LoginForm from './LoginForm'

function Login() {
const adminUser = {
    email: "konexio@konexio.com",
    password: "12345678"
}


const [user, setUser] =   useState({name: "", email: ""})
const [error, setUrror] =  useState("")


const Login = details => {
    console.log(details)  


    if (details.email === adminUser.email && details.password === adminUser.password){
        console.log("Loggedin")
        setUser({
            name:
        })
    } else {
        console.log("Details do not match!");
    }
}


const Logout = () => {
    console.log("Logout");
}


    return (
        <div>
       {(user.email != "") ? (
          <div className="welcome">
              <h2>Welcome, <span>{user.name} </span></h2>
              <button>Logout</button>
          </div>
       ) : (
           <LoginForm Login={Login} error={error} />
       )}

        </div>
    )
}

export default Login
