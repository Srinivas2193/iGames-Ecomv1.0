import React from "react";
import { useState } from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  
  let navigate = useNavigate();

  const onformSubmit =(e)=>{
      e.preventDefault();    

        document.getElementById("name").oninvalid = (e)=>{
          e.target.setCustomValidity("Incorrect name, please Enter a valid name!");
        }

        // alert("Your message has been submitted succesfully !");
        navigate("/thanksForContacting");
      const data = {
        name: name,
        email: email,
        mobile: mobile,
        address: address,
        message: message,
        uniqueId:Math.round(Math.random()*100)+"_"+Math.round(Math.random()*100)
      }

      let lsData = localStorage.getItem("iGamesContactUsDataList");
      let parseData;
        if(lsData){
            parseData = JSON.parse(lsData);
        }else{
            parseData = [];
        }
      localStorage.setItem("iGamesContactUsDataList", JSON.stringify([data,...parseData]));

    //   document.getElementById("name").value = "";
        // console.log(document.forms[0]);
        let formTag = document.forms[0];
        formTag.name.value = "";
        formTag.email.value = "";
        formTag.mobile.value = "";
        formTag.address.value = "";
        formTag.message.value = "";
}
  return (
    <>
      <div className="container mb-5 ml-20" style={{marginTop:"6rem"}}>
        <h2 className="w-full my-6 text-3xl text-blue-600 border-b hover:text-orange-500 border-orange-500" style={{paddingBottom:"10px"}}>Contact Us</h2>
        <form onSubmit={onformSubmit}>
          <label className="block" htmlFor="name">Name</label>
          <input style={{height:"40px",width:"400px",textIndent:"15px"}} pattern="[A-Za-z]{3,10}" id="name" name="name"className="text-white bg-black border rounded-md form-input outline-blue-400" type="text" autoFocus placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
          <br />
          <br />
          <label className="block" htmlFor="email">Email</label>
          <input style={{height:"40px",width:"400px",textIndent:"15px"}} id="email" name="email" className="text-white bg-black border rounded-md form-input outline-blue-400" type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} required/>
          <br />
          <br />
          <label className="block" htmlFor="mobile">Mobile</label>
          <input style={{height:"40px",width:"400px",textIndent:"15px"}}  id="mobile" name="mobile" className="text-white bg-black border rounded-md form-input outline-blue-400" type="number" placeholder="Enter your mobile number" onChange={(e)=>setMobile(e.target.value)} required/>
          {/* <br />
          <label className="block" htmlFor="address"> Address </label>
          <textarea id="address" name="address" className="border border-2 form-input outline-blue-400" type="text" placeholder="Enter your Address" onChange={(e)=>setAddress(e.target.value)} required/> */}
          <br />
          <br />
          {/* <textarea id="message" name="message"  style={{textIndent:"20px",width:"49%",overflowY:"scroll"}} className="py-3 text-white bg-black border rounded-xl form-input outline-blue-400" type="text" rows="4" cols="50" placeholder="Enter your message" onChange={(e)=>setMessage(e.target.value)} required/> */}
          <label className="block" htmlFor="message"> Message </label>
          <textarea id="message" style={{textIndent:"20px", maxWidth:"49%"}} rows="3" cols="48" className="py-3 text-white bg-black border rounded-xl form-input outline-blue-400" type="text" placeholder="Enter your message" onChange={(e)=>setMessage(e.target.value)} required/>
          <br />
          <button className="px-4 py-1 mt-6 mb-5 text-2xl font-bold text-white duration-300 bg-blue-600 rounded-md hover:ease-in"> Submit </button>
          <br />

          {/* <span className="mt-5 text-2xl text-blue-500 text-Eenter">
            Thanks for contacting us ...{" "}
          </span> */}
        </form>
      </div>
    </>
  );
}
