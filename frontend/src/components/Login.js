import {useState} from "react";
import api from "../services/api";

export default function Login(){
  const [email,setE]=useState("");
  const [password,setP]=useState("");

  const login=async()=>{
    const r=await api.post("/auth/login",{email,password});
    localStorage.setItem("token",r.data.token);
    window.location="/dashboard";
  };

  return(
    <div className="card">
      <h2>Welcome Back</h2>
      <input placeholder="Email" onChange={e=>setE(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={e=>setP(e.target.value)}/>
      <button onClick={login}>Login</button>
      <span onClick={()=>window.location="/register"}>Create account</span>
    </div>
  );
}