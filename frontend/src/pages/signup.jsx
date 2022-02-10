import React, {useState} from 'react'
import axios from 'axios';
export const Signup = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");

    const clickHandler = async () => {
       const data = {
           firstName,
           lastName,
           phone,
           password,
           email,
           address
       };

       const result = await axios.post("http://localhost:3000/auth/signup",data);
       console.log(result);
    }


  return (
    <div>
        <input 
        type = "text"
        placeholder='firstName'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
        <input 
        type = "text"
        placeholder='lastName'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
        <input 
        type = "text"
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input 
        type = "text"
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <input 
        type = "text"
        placeholder='phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        />
        <input 
        type = "text"
        placeholder='address'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick = {clickHandler} > Signup </button>
    </div>
  )
}

export default Signup