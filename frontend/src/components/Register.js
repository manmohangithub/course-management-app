import {useState} from "react";
import api from "../services/api";

export default function Register(){
  const [name,setN]=useState("");
  const [email,setE]=useState("");
  const [password,setP]=useState("");

  const register=async()=>{
    await api.post("/auth/register",{name,email,password});
    window.location="/";
  };

  return(
    <div className="card">
      <h2>Create Account</h2>
      <input placeholder="Name" onChange={e=>setN(e.target.value)}/>
      <input placeholder="Email" onChange={e=>setE(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={e=>setP(e.target.value)}/>
      <button onClick={register}>Register</button>
    </div>
  );
}