import React, {useState} from 'react'

function LoginForm({ Login, errror}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""})

      const submitHandler = e => {
          e.preventDefault()

          Login(details)
      }

    return (
       <form onSubmit={submitHandler}>
           <div className="form_inner">
               <h2>Login</h2>
               {/*ERROR*/}
               <div className="form-group">
               <label htmlFor="name">Name</label>
               <input type="text" name="name" id="name"/> 
            </div>
            <div className="form-group">
               <label htmlFor="email">Email</label>
               <input type="text" email="email" id="email" onChange={e => setDetails({...details, name: e.target.})} /> 
               
           </div>
           <div className="form-group">
               <label htmlFor="passxord">Password</label>
               <input type="text" password="password" id="password"/> 
               
           </div>
           <input type="submit" value="LOGIN" /> 

           </div>
       </form>
    )
}

export default LoginForm
