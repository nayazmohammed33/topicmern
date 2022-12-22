import React from "react";
import { useState } from "react";
import axios from "axios";
import '../App.css'
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [username, setName] = useState("");
  const navigate=useNavigate();


  
  const onFinish =  (e) => {
    e.preventDefault();
    const register={
        username:username
    }
    axios.post('http://localhost:5000/api/add', register)
            .then(res => {
                console.log(res.data);
                localStorage.setItem("topicmern", JSON.stringify(res.data._id));
            }).then(data => {
                 alert('ADDED SuccessFully');
                 
                
                })
            
            navigate("/dashboard");

  
  };

  return (
    <div>
     <h1>LANDING PAGE</h1>
      <form onSubmit={onFinish}>
        <label>
          <h3>Enter your name:</h3>
          <input
            type="text"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Home;
