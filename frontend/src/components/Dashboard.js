import {useEffect,useState} from "react";
import api from "../services/api";

export default function Dashboard(){
  const [courses,setC]=useState([]);
  const [name,setN]=useState("");
  const [desc,setD]=useState("");
  const [inst,setI]=useState("");

  const load=async()=>{
    const r=await api.get("/courses");
    setC(r.data);
  };

  useEffect(()=>{load();},[]);

  const add=async()=>{
    await api.post("/courses",{name,description:desc,instructor:inst});
    load();
  };

  const del=async(id)=>{
    await api.delete(`/course/${id}`);
    load();
  };

  const logout=()=>{
    localStorage.removeItem("token");
    window.location="/";
  };

  return(
    <div className="dash">
      <header>
        <h1>📚 Course Dashboard</h1>
        <button onClick={logout}>Logout</button>
      </header>

      <div className="form">
        <input placeholder="Course Name" onChange={e=>setN(e.target.value)}/>
        <input placeholder="Description" onChange={e=>setD(e.target.value)}/>
        <input placeholder="Instructor" onChange={e=>setI(e.target.value)}/>
        <button onClick={add}>Add Course</button>
      </div>

      <div className="grid">
        {courses.map(c=>(
          <div className="course" key={c.id}>
            <h3>{c.name}</h3>
            <p>{c.description}</p>
            <span>{c.instructor}</span>
            <button onClick={()=>del(c.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}