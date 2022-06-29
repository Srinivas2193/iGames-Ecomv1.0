import { useFormik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useState} from "react";
import "./signUp.css";

//style={formik.values.firstname === "" ? { border: "1px solid red" } : null }
// cnf password confirmation {formik.errors.cnfpassword ? <div className='text-red-600 text-1xl'>{formik.errors.cnfpassword}</div> : null}
export default function Signup(){
    const [address,setAddress] = useState("");

    let navigate= useNavigate();

    const formik= useFormik(
        {
            initialValues:{
                firstname:"",
                lastname:"",
                email:"",
                mobile:"",
                password:"",
                cnfpassword:""
            },
            onSubmit:(values)=>{
                values.preventDefault();
                console.log('Form values', values)
                // console.log("form is submitted");
                formik.values("")
                
            },
            validate:(values)=>
            {
                let errors={}

                if(!values.firstname)
                {
                    errors.firstname='Please enter firstname'
                }
                else if(!values.firstname.match(/^[a-zA-Z]+$/))
                {
                    errors.firstname='Name must be in alphabets only'

                }

                if(!values.lastname)
                {
                    errors.lastname='Please enter lastname'
                }
                else if(!values.lastname.match(/^[a-zA-Z]+$/))
                {
                    errors.lastname='Name must be in alphabets only'

                }

                if(!values.email)
                {
                    errors.email='Please enter email'
                }
                else if(!values.email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/))
                {
                    errors.email='email should be example@gmail.com format only'

                }
               
                if(!values.mobile)
                {
                    errors.mobile='Please enter mobile'
                }
                // else if(!values.mobile.match(/^(?=.*?[0-9]).{10,}$/))
                // {
                //     errors.mobile='please enter numbers(0-9)'
                // }

                if(!values.password)
                {
                    errors.password='Please enter password'
                }
                else if(!values.password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^$*-]).{8,}$/))
                {
                    errors.password='password should contain atleast min 8 Chars[abc..,ABC..,123..,@#$..]'
                }

                if(!values.cnfpassword)
                {
                    errors.cnfpassword='Please Re-enter password'
                }
                else if(values.password === values.cnfpassword)
                {
                    errors.cnfpassword = 'password Matched' 
                }
                else
                {
                    errors.cnfpassword="password and confirm password should be same"
                }
                return errors;

            }
        }
    );

    // console.log("Form Data", formik.values);
    // console.log(formik.values.firstname)

    let data = {
        fName:formik.values.firstname,
        Lname:formik.values.lastname,
        email:formik.values.email,
        mobile:formik.values.mobile,
        password:formik.values.password,
        uniqueId:Math.round(Math.random()*100)+"_"+Math.round(Math.random()*100),
        address:address,
        loginStatus:false
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if(formik.values.firstname && formik.values.lastname && formik.values.email && formik.values.password && formik.values.cnfpassword && (formik.values.password === formik.values.cnfpassword))
        {
            let lsData = localStorage.getItem("userDataList");
            let parseData;
              if(lsData){
                  parseData = JSON.parse(lsData);
              }else{
                  parseData = [];
              }

            // below code stores signup data into localStorage with the name iGameUserDataList
            localStorage.setItem("iGameUserDataList", JSON.stringify([data,...parseData]));
    
              let formTags = document.forms[0];
              formTags.firstname.value = "";
              formTags.lastname.value = "";
              formTags.email.value = "";
              formTags.mobile.value = "";
              formTags.password.value = "";  
              formTags.cnfpassword.value = "";
              formik.handleSubmit();
              navigate("/thankForSignUp");
        }
        else
        {
            alert("please fill out the fields")
        }
    };

    return(
        <>
        <div className='container-fluid'>
            <h2 className='pb-2 mt-5 text-4xl font-bold text-center text-blue-500' style={{borderBottom:"1px solid"}}>Signup</h2>
            <br/>
            <form autoComplete='off' onSubmit={onSubmit} className="flex flex-col items-center justify-center mt-5">
                <div className='columns-2 gap-28' style={{width:"1000px"}}>
                    <label className='block'>First name</label>
                    <input type='text' pattern='[A-Za-z]{3,20}' className='w-full text-white bg-black rounded-md form-input outline-blue-400' placeholder='enter your firstname'
                    values={formik.values.firstname}  onChange={formik.handleChange} name="firstname" id="firstname"
                     style={{height:"50px",textIndent:"25px",border:"1px solid"}} autoFocus
                     /> <br/>
                    <span>{formik.errors.firstname ? <div className='text-red-600 text-1xl'>{formik.errors.firstname}</div> : null}</span>
                    <br/>
                    <label>Last name</label>
                    <input type='text' pattern='[A-Za-z]{3,20}'  className='w-full text-white bg-black rounded-md form-input outline-blue-400' placeholder='enter your lastname'
                    values={formik.values.lastname}  onChange={formik.handleChange} name="lastname" id="lastname"
                     style={{height:"50px",textIndent:"25px",border:"1px solid"}}
                    /><br/>
                    <span>{formik.errors.lastname ? <div className='text-red-600 text-1xl'>{formik.errors.lastname}</div> : null}</span>
                </div>
                    <br/>
                <div className='columns-2 gap-28' style={{width:"1000px"}}>
                    <label className='block'>Email</label>
                    <input type='email' className='w-full text-white bg-black rounded-md form-input outline-blue-400' placeholder='enter your email'
                    values={formik.values.email}  onChange={formik.handleChange} name="email" id="email"
                    style={{height:"50px",textIndent:"25px",border:"1px solid"}}
                    /> <br/>
                    <span>{formik.errors.email ? <div className='text-red-600 text-1xl'>{formik.errors.email}</div> : null}</span>
                    <br/>
                    <label>Mobile</label>
                    <input type='number' className='w-full text-white bg-black rounded-md form-input outline-blue-400' placeholder='enter mobile number'
                    values={formik.values.mobile}  onChange={formik.handleChange} name="mobile" id="mobile"
                    style={{height:"50px",textIndent:"25px",border:"1px solid"}}
                    /> <br/>
                    <span>{formik.errors.mobile ? <div className='text-red-600 text-1xl'>{formik.errors.mobile}</div> : null}</span>
                </div>
                    <br/>
                <div className='columns-2 gap-28' style={{width:"1000px"}}>
                    <label className='block'>Password</label>
                    <input type='password' className='w-full text-white bg-black rounded-md form-input outline-blue-400' placeholder='enter your password' 
                    values={formik.values.password} onChange={formik.handleChange} name="password" id="password"
                     style={{height:"50px",textIndent:"25px",border:"1px solid"}}
                    /> <br/>
                    <span>{formik.errors.password ? <div className='text-red-600 text-1xl'>{formik.errors.password}</div> : null}</span>
                    <br/>
                    <label>Confirm Password</label>
                    <input type='password' className='w-full text-white bg-black rounded-md form-input outline-blue-400' placeholder='Re-enter your password ' 
                    values={formik.values.cnfpassword} onChange={formik.handleChange} name="cnfpassword" id="cnfpassword"
                    style={{height:"50px",textIndent:"25px",border:"1px solid"}}
                    /> <br/>
                    {/* <span> {(formik.values.password === formik.values.cnfpassword) ? <div className='text-orange-500 text-1xl'>password and confirm password must be same</div> : <div className='text-green-500 text-1xl'>Matched</div> }</span> */}
                    <span>{formik.errors.cnfpassword ? <div style={formik.values.cnfpassword ? {color:"green"} : {color:"red"}}> &nbsp;{formik.errors.cnfpassword}</div> : null }</span>
                </div>
                    <br/>
                <div className='columns-1 gap-28' style={{width:"1000px"}}>
                    {/* Address */}
                    <label className="block" htmlFor="message">Address </label>
                    <textarea id="message" style={{textIndent:"20px"}} rows="3" cols="53" className="py-3 text-white bg-black border rounded-xl form-input outline-blue-400" type="text" placeholder="Enter your Address For future product delivery" onChange={(e)=>setAddress(e.target.value)} required/>
                    <br />
                </div>
                <br/>
                <button type='submit' className="px-4 py-1 mb-5 text-2xl font-bold text-white duration-300 bg-blue-600 rounded-md hover:ease-in">SignUp</button>
                <p className='mb-2 text-1xl'>If You Already Have An Account <Link className='text-blue-500' to="/login">Login</Link> here.</p>
            </form>
                </div>
        </>
    )
 }