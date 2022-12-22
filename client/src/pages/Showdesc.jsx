import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css";
import { Button, Modal } from "antd";
function Showdesc() {
  const [description, setdescription] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [style, setStyle] = useState("");
  const [temp, settemp] = useState();
  const [showTooltip, setShowTooltip] = useState(false);
  const changestyle = (e) => {
    setStyle("cont");
    console.log("clicked", e.target);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [arrstr, setarrstr] = useState([]);
  let { id } = useParams();
  const splitstr = (str) => {
    let modstr = str.split(",");
    // const array = Object(modstr);
    setarrstr(modstr);
  };
  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:5000/api/topic/addtopic/${id}`)
      .then((res) => {
        setdescription(res.data.desc);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);
    // 👇️ or set to true
    setIsActive(true);
  };
  const [showHoverWindow, setShowHoverWindow] = useState(false);
  const changeColor = (event) => {
    //console.log(.innerText)
    var target = event.target;
    var parent = target.parentElement; //parent of "target"
    var grandPArent = parent.parentElement;
    grandPArent.style.color = "red";
    // setArr([...arr,{key:grandPArent.innerText, score:[]}]);
  };
  const changeGreeen = (event) => {
    //console.log(.innerText)
    var target = event.target;
    var parent = target.parentElement; //parent of "target"
    var grandPArent = parent.parentElement;
    grandPArent.style.color = "green";
  };
  const changeBlue = (event) => {
    //console.log(.innerText)
    var target = event.target;
    var parent = target.parentElement; //parent of "target"
    var grandPArent = parent.parentElement;
    grandPArent.style.color = "blue";
  };
  return (
    <div>
      <button
        onClick={() => {
          console.log(typeof description);
          splitstr(description);
        }}
      >
        SPLIT
      </button>
      {/* {description} */}
      {arrstr.map((ele) => (
        <>
          <div onMouseOver={() => setShowTooltip(true)} onMouseOut={()=>setShowTooltip(false)}>
            {`${ele},`}
            {ele}
            <span className={showTooltip ? "show" : "hide"}>
              <button onClick={changeColor}>Red Color</button>
              <button onClick={changeGreeen}>Green Color</button>
              <button onClick={changeBlue}>Blue Color</button>
            </span>
          </div>
        </>
      )
      )}
    </div>
  );
}
export default Showdesc;