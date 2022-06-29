import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

export const Login = (props) => {
  const [userName,setUserName] = useState("");
  const [userPassword,setUserPassword] = useState("");

  let navigate= useNavigate();

// onSubmit localStorage Part
const onSubmit = (event) => {
  event.preventDefault();


  let lsData = localStorage.getItem("iGameUserDataList");
  let parseData;
    if(lsData){
        parseData = JSON.parse(lsData);
    }else{
        parseData = [];
    }
    if(parseData!== null && !parseData.length>0){
 
      // if no accunt found below error code will execute 
      document.getElementById("errorParaForLogin").innerHTML = "No account found with these details!";
      document.getElementsByClassName("errMessage")[0].style.visibility ="visible";
      setTimeout(()=>{
          document.getElementsByClassName("errMessage")[0].style.visibility ="hidden";
      },2500);
      
    }else{
      let i = 0;
      let userUniqueID = "";
        try{
          while(i <= parseData.length){
            // console.log(parseData[i].email);
              if(parseData[i].email === userName && parseData[i].password === userPassword){
                parseData[i].loginStatus = true;
                localStorage.setItem("iGameUserDataList",JSON.stringify(parseData));
    
                // props.history.push('/home');
                props.setLoginStauts(true);
                props.signInHandler(userName);
                navigate('/');

                break;
              }else{
                // console.log("Login credential not matched");
              }
            i += 1;
          }
        }catch(err){
          document.getElementsByClassName("errMessage")[0].style.visibility ="visible";
          setTimeout(()=>{
              document.getElementsByClassName("errMessage")[0].style.visibility ="hidden";
          },2500);
        }
    }
};

  return (
    <div className="container " style={{marginTop:"140px",marginLeft:"70px",marginRight:"70px"}}>
      <h2 className="text-3xl text-blue-700" style={{borderBottom:"1px solid",width:"32%"}}>Sign in</h2>
      <br />
      <div className="flex items-center justify-center mb-2 errMessage">
        <p id="errorParaForLogin" className="w-full">Incorrect credentials, Please check and try again!</p>
      </div>
      <form onSubmit={onSubmit}>
        <label className="block" htmlFor="userName">Username/Email</label>
        <input type="text" name="userName" id="userName" style={{border:"1px solid",height:"50px",width:"400px",textIndent:"20px"}} className="text-white bg-black border-blue-400 rounded-md bottom-2" onChange={(e)=>{setUserName(e.target.value);}} autoFocus placeholder="enter your name"/>
        <div className="text-red-500">
        </div>
        <br/>
        <br />
        <label className="block">Password</label>
        <input type="password" style={{border:"1px solid",height:"50px",width:"400px",textIndent:"20px"}} className="text-white bg-black rounded-md form-input outline-blue-400" placeholder="Enter Your Password" onChange={(e)=>setUserPassword(e.target.value)} />
        <br/>
        <br/>
        <button  style={{marginLeft:"2rem 0px 0px 0rem !important",letterSpacing:"2px", width:"100px",height:"40px"}} type="submit" className="font-bold text-white duration-300 bg-blue-600 rounded-md text-2">Login</button>
      </form>
      <br />
      <p style={{marginBottom:"7rem"}} className="text-1xl">If You Don't Have An Account&nbsp;<Link className="text-blue-500" to="/signup"><b>Signup</b></Link> here</p>
    </div>
  );
};
export default Login;
