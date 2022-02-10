import React, {useState,useEffect} from 'react'
import axios from 'axios';
export const Profile = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");

    useEffect(() => {

        const func = async () => { 
            const result = await axios.get("http://localhost:3000/auth/getDetails");
            const res=result.data;
            console.log(result);
            setFirstName(res.firstName);
            setLastName(res.lastName);
            setEmail(res.email);
            setPhone(res.phone);
            setAddress(res.address);
        }
        func();
    },[]);


  return (
    <div>
        <h1>User Details</h1>
        <h1>First Name: {firstName}</h1>
        <h1>Last Name: {lastName}</h1>
        <h1>Email: {email}</h1>
        <h1>Phone: {phone}</h1>
        <h1>Address: {address}</h1>
    </div>
  )
}

export default Profile