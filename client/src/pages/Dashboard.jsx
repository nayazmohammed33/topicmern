import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:5000/api/topic/addtopic").then((response) => {
      setPosts(response.data);
      console.log(posts);
    });
  }, []);
  return (
    <div>
      <h2>Dashboard</h2>

      <button
        onClick={() => {
          navigate("/addtopic");
        }}
      >
        ADD TOPIC
      </button>
      <div>
        <div className="p-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Percentage</th>
                <th>Show</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                return (
                  <tr key={post._id}>
                  
                    <td>{post.topic}</td>
                    <td>{post._id}</td>
                    <td><Link to={`/showdesc/${post._id}`}>SHOW</Link></td>
                    
                  </tr>

                  // <tr>
                  //   <td key={post._id}>{post.topic} <Link to={`/show/${post._id}`}>SHOW</Link></td>
                  //   <td>{post._id}</td>
                  // </tr>
                );
              })}

             
            </tbody>
          </Table>
        </div>

       
      </div>
    </div>
  );
}

export default Dashboard;
