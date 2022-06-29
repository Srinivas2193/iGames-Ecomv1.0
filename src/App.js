// import logo from './logo.svg';
// import Data from './Components/Back/Data/Data';
// import { useNavigate } from 'react-router-dom';
import './App.css';
// import Header from './Components/Header/Header';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './Components/Login/Login';
import Cart from './Components/Cart/cart';
import Signup from './Components/Signup/Signup';
import Products from './Components/Products/Products';
import { useEffect, useState } from 'react';
import About from './Components/About/About';
import Contact from "./Components/contact/Contact";
import axios from 'axios';
import Product from './Components/Products/Product'

import Footer from './Components/footer/Footer';
import Home from './Components/homepage/Home';
import NavBar from './Components/navbar/navBar';
import Drawer from './Components/profileDrawer/drawer';
import TopLoadingBar from "react-top-loading-bar";
import Payment from './Components/Payments/Payments';
import Payments2 from './Components/Payments/Payments2';
import ThankYou from './Components/Thankyou/ThankYou';
import ThankForSignUp from "./Components/Signup/ThankForSignUp";
import ThanksForContacting from './Components/contact/ThanksForContacting';
import PrivacyPolicy from './Components/Privacy-Policy/PrivacyPolicy';


// by Ananth
let lsData = localStorage.getItem("iGameUserData");
let parsedData;
if (lsData) {
  parsedData = JSON.parse(lsData);
} else {
  parsedData = [];
}
// localStorage.setItem("iGameUserData", JSON.stringify([...data]));

function App() {

  const [data, setData] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  // by Ananth S
  const [loginStauts, setLoginStauts] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuButton, setUserMenuButton] = useState(false);
  const [showSigninSignOut, setShowSigninSignOut] = useState(false);
  const [progressBarValue, setProgressBarValue] = useState(0);
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const [cardItemsData, setCardItemsData] = useState([...parsedData]);
const [payItem, setPayItem] = useState([])

  let navigate = useNavigate();


  const signInHandler = (userName) => {
    setUserMenuButton(!userMenuButton);
    setShowSigninSignOut(true);

    let lsData = localStorage.getItem("iGameUserDataList");
    let parseData;
    if (lsData) {
      parseData = JSON.parse(lsData);
    } else {
      parseData = [];
    }
    let i = 0;
    while (i <= parseData.length) {
      if (parseData[i].email === userName) {
        parseData[i].loginStatus = true;
        localStorage.setItem("iGameUserDataList", JSON.stringify(parseData));
        setName(parseData[i].fName + " " + parseData[i].Lname);
        setUserEmail(parseData[i].email);
        setUserMobile(parseData[i].mobile);
        setUserAddress(parseData[i].address);

        // setLoginStauts(true);
        break;
      }
      i += 1;
    }
  };

  const signOutHandler = () => {
    setUserMenuButton(!userMenuButton);
    setIsOpen(false);
    setShowSigninSignOut(false);

    let lsData = localStorage.getItem("iGameUserDataList");
    let parseData;
    if (lsData) {
      parseData = JSON.parse(lsData);
    } else {
      parseData = [];
    }
    let i = 0;
    while (i <= parseData.length) {
      if (parseData[i].email === "ananth@gmail.com") {
        parseData[i].loginStatus = false;
        localStorage.setItem("iGameUserDataList", JSON.stringify(parseData));
        break;
      }
      i += 1;
    }
  };

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setProgressBarValue(ScrollPercent);
  };

  window.addEventListener("scroll", onScroll);
  const callProgressBar = () => {
    setProgressBarValue(60);

    setTimeout(() => {
      setProgressBarValue(100);
    }, 500);
  };

  useEffect(() => {
    let response = async () => {
      let getData = await axios.get(`http://localhost:3006/Data`)
      setData(getData.data)
    }
    response();
  }, [])

  const handleAddProducts = (product) => {
    const productExist = cartItem.find(item => item.id === product.id);
    if (productExist) {
      setCartItem(cartItem.map((item) => item.id === product.id ?
        { ...productExist, quantity: productExist.quantity + 1 } : item))
    }
    else {
      setCartItem([...cartItem, { ...product, quantity: 1 }])
    }
  }

  const handleRemoveProduct = (product) => {
    const productExist = cartItem.find(item => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItem(
        cartItem.filter((item) =>
          item.id !== product.id)
      )
    }
    else {
      setCartItem(cartItem.map((item) => item.id === product.id ?
        { ...productExist, quantity: productExist.quantity - 1 } : item))
    }
  }

  let paymentHandler = (product) => {
    if (cartItem.length > 0) {
      // const productExist = cartItem.find(item => item.id === product.id);

      // if(productExist)
      // {
      //   setPayItem(cartItem.map((item)=> item.id === product.id ? 
      //   { ...productExist,quantity:productExist.quantity+1} : item ))
      // }
      // else{
      //   setPayItem([...payItem,{...product,quantity:1}])
      // }
      setPayItem(cartItem);
    }
    console.log("hello")

    navigate('/payments2')
  }

  // // by Ananth
  // let lsData = localStorage.getItem("cartItemList");
  // let parseData;
  //   if(lsData){
  //       parseData = JSON.parse(lsData);
  //   }else{
  //       parseData = [];
  //   }
  // localStorage.setItem("cartItemList", JSON.stringify([cartItem,...parseData]));

  // bySrinivas
  const handleCartClear = () => {
    setCartItem([]);
  }
  return (
    <div className='text-white bg-black'>
      <TopLoadingBar progress={progressBarValue} color="red" style={{ height: "3px" }} />
      <NavBar showSigninSignOut={showSigninSignOut} userMenuButton={userMenuButton} setIsOpen={setIsOpen} callProgressBar={callProgressBar} cartItems={cartItem} setCartItems={setCartItem} />

      {/* <Header cartItem={cartItem} /> */}
      <Routes>
        <Route path='/' element={<Home callProgressBar={callProgressBar} cardItemsData={cardItemsData} />} />
        <Route path='/login' element={<Login signInHandler={signInHandler} setLoginStauts={setLoginStauts} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/payment' element={<Payment />} />   */}
        <Route path='/product/:id' element={<Product handleAddProducts={handleAddProducts} />} />
        <Route path='/cart' element={<Cart cartItems={cartItem} handleAddProducts={handleAddProducts} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear} paymentHandler={paymentHandler} />} />
        <Route path='/products' element={<Products handleCartClear={handleCartClear} productItem={data} handleAddProducts={handleAddProducts} />} />
        <Route path='/pay/:id' element=  {loginStauts ?<Payment setCartItem={setCartItem} cartItems={cartItem}   />:<Login signInHandler={signInHandler} setLoginStauts={setLoginStauts}/>} />
        <Route path='/payments2' element={loginStauts ?<Payments2 setCartItem={setCartItem} cartItems={cartItem} />:<Login signInHandler={signInHandler} setLoginStauts={setLoginStauts}/>} />

        <Route path='/thankyou' element={<ThankYou />} />
        <Route path='/thankForSignUp' element={<ThankForSignUp />} />
        <Route path='/thanksForContacting' element={<ThanksForContacting />} />
        <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
      <Drawer name={name} userEmail={userEmail} userMobile={userMobile} userAddress={userAddress} setUserMenuButton={setUserMenuButton} isOpen={isOpen} setIsOpen={setIsOpen} signOutHandler={signOutHandler}>
        <h2>Profile Details appear here...</h2>
      </Drawer>
    </div>
  );
}

export default App;
