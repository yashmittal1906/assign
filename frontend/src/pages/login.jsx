import React, {useState} from 'react'
import axios from 'axios';
export const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const clickHandler = async () => {
       const data = {
           password,
           email,
       };

       const result = await axios.post("http://localhost:3000/auth/login",data);
       localStorage.setItem("jwt", result.data.token);
       console.log(result);
    }


  return (
    <div>
        <input 
        type = "text"
        value={email}
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
        />
        <input 
        type = "text"
        value={password}
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick = {clickHandler} > Login </button>
    </div>
  )
}

export default Login