import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./payments.css";
import "./payments2.css";
export const Payments = ({cartItems,setCartItem}) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [buy, setBuy] =useState([])

  const { id } = useParams();
  let navigate=useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(name, mobile,address);

    let getData = localStorage.getItem("iGamesUserOrders");
    let parsedData;
    if(getData){
      parsedData = JSON.parse(getData);
    }else{
      parsedData = [];
    }
    localStorage.setItem("iGamesUserOrders", JSON.stringify([
      {userName:name,userMobile:mobile,userAddress:address,userCity:city,userState:state,userPincode:pincode},...parsedData
    ]));
    console.log(name,mobile,address,city,state,pincode);
    navigate("/thankyou")
    setCartItem([]);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3006/Data/${id}`)
      .then((res) => setBuy(res.data))
      .catch();
  });
  return (
    <div>
      <div className="w-3/6 h-3/6 my-5 shadow-2xl ml-96 bg-slate-400 rounded-2xl ">
        <div className="flex flex-col ">
          <div className="flex justify-center ">
            <form onSubmit={submitHandler} className="mt=8">
              <div className="">
                <p id="errorPara" className="text-center text-red-800">
                  {/* {error.name} */}
                  Proper Address is required here!
                </p>

                <div className="cartItemsContainer">

                  {/* {
                    (cartItems.length>=1)?
                    buy.map((res)=>
                    { */}
                      {/* return( */}
                        <>
                        <div className="flex flex-col">
                        <div className="columns-2">
                    <img
                      src={buy.images} alt={buy.name}
                      className="w-52 h-52 ml-12 rounded-2xl"
                    />
                    <h1 className="mt-8 ml-10 text-xl font-medium">{buy.name}</h1>
                    <p className="mt-1 ml-10 text-xl font-medium ">
                      Price ${buy.price}  <span className="ml-3 font-normal text-red-500 text-1xl"><s>${buy.strprice}</s></span>
                    </p>
                    {/* <p className="mt-7">{buy.content}</p> */}
                  </div>
                  </div>
                        </>
                      {/* ) */}
                    {/* }):<h1 className="text-center my-16">There are no items to show...</h1>
                  } */}
                  
                </div>
                                
                <br></br>
                <hr></hr>

                <p className="mt-3 text-2xl font-semibold text-center hover:text-green-600">
                  Only Cod available
                </p>
                <br>
                </br>
                <section className="flex flex-col pl-6">
                  <div className="flex justify-self-start border-b"><label className="mt-4 text-lg font-semibold text-left ">Deliver to</label></div>
                  <br/>
                  <div>
                    <label html="name">Enter Name</label><br/>
                    <input pattern="[a-zA-ZD]{3,10}"  maxLength="20" minLength="3" onChange={(e)=>{setName(e.target.value)}} value={name} id="name" name="name" type="text" className="text-white bg-black h-9 rounded-md pl-2" placeholder="Enter your name" autoFocus required/>
                  </div>
                  <br/>
                  <div>
                    <label htmlFor="mobile">Enter Mobile No.</label><br/>
                    <input pattern="[6-9]{1}[0-9]{9}"  onChange={(e)=>{setMobile(e.target.value)}} value={mobile} id="mobile" name="mobile" type="tel" className="text-white bg-black h-9 rounded-md pl-2" placeholder="Enter your Mobile number" required/>
                  </div>
                  <br/>
                  <div className="w-full" style={{width:"645px"}}>
                    <label htmlFor="address">Enter Address:</label><br/>
                      <textarea
                        onChange={(e)=>{setAddress(e.target.value)}} value={address}
                        id="address"
                        placeholder="Enter the address"
                        className=" text-left pl-2 pt-2 text-white bg-black border-2 border-blue-400 w-96 rounded-xl hover:border-slate-600"
                        name="address"
                         required/>
                  </div>
                         <br/>
                  <div>
                    <label htmlFor="city">Enter City Name</label><br/>
                    <input pattern="[a-zA-ZD]{3,15}" className="text-white bg-black h-9 rounded-md pl-2" placeholder="City Name" type="text"   name="city"  id="city"  onChange={(e)=>{setCity(e.target.value)}} required/></div> <br/>
                  <div>
                    <label htmlFor="state">Enter State Name</label><br/>
                    <input pattern="[a-zA-ZD]{3,15}" className="text-white bg-black h-9 rounded-md pl-2" placeholder="State Name" type="text"   name="state" id="state" onChange={(e)=>{setState(e.target.value)}} required/></div><br/>
                  <div>
                    <label htmlFor="pincode">Enter Zip/Pincode</label><br/>
                    <input pattern="[0-9W]{6}" className="text-white bg-black h-9 rounded-md pl-2" placeholder="Zip/Pincode" type="number" name="pincode" id="pincode" onChange={(e)=>{setPincode(e.target.value)}} required/></div>
                </section>
                <br/>
                <input
                  className="cursor-pointer px-6 py-2 my-2 text-2xl mb-5 text-center bg-yellow-400 border-2 ml-56 rounded-xl"
                  type="submit" 
                  value="Place Order"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payments;
