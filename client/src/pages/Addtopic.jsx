import React from "react";
import { useState } from "react";
import { Form, Input, message, Modal, Select } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addtopic() {
  const [topic, settopic] = useState("");
  const [desc, setdesc] = useState("");
  const navigate=useNavigate();

  const onFinish = async (values) => {
    
    try {
      const uid = JSON.parse(localStorage.getItem("topicmern"));
      await axios.post("http://localhost:5000/api/topic/addtopic", {
        ...values,
        // userid: uid,
      });

      message.success("Topic added successfully");
      navigate('/dashboard')
    } catch (error) {
      message.error("Something went wrong");
    }
  };
  return (
    <div>
      <div>
        <h1>ADD TOPIC PAGE</h1>
      </div>
      <Form onFinish={onFinish}>
        <Form.Item label="Topic" name="topic">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Desc" name="desc">
          <Input type="text" />
        </Form.Item>

        
        <button className="primary" type="submit" >
          SAVE
        </button>
      </Form>
    </div>
  );
}

export default Addtopic;
