import React from 'react'
import {useState} from "react";
import ArrowIcon from "../../../assets/sliderAssetts/ArrowIcon.png";
import CardItem from "./CardItem.js";

export default function HomePageCardItemsComp(props) {
  const [list, setList] = useState([...props.list]);
  const [itemsCatogery, setItemsCatogery] = useState(props.barHeading);
  const [uniqueId, setUniqueId] = useState(props.uniqueId)

  // const cardItemsContainer = document.getElementsByClassName("cardItemsContainer")[0];
  const cardItemsContainer = document.getElementById(uniqueId);
  const increament = ()=>{
    cardItemsContainer.scroll(cardItemsContainer.scrollLeft+1000,0);
  };
  const decreament = ()=>{
    cardItemsContainer.scroll(cardItemsContainer.scrollLeft-1000,0);
  };

  return (
    <>
    <div className='py-2'>
      <div className='px-28 my-1"'>
        <h2 className='text-white'>{itemsCatogery}</h2>
      </div>
      <div className='flex py-1'>
        <div className='bg-black flex justify-center items-center' style={{width:"10%",height:"36vh"}}>
          <button onClick={decreament}>
            <img src={ArrowIcon} alt="leftArrow" className='w-16'/>
          </button>
        </div>

        <div id={uniqueId} className='cardItemsContainer scroll-smooth flex flex-row justify-self-start items-center bg-black overflow-auto' style={{overflowY:"hidden",overflowX:"hidden",maxHeight:"36vh",minHeight:"36vh",maxWidth:"85%",minWidth:"85%",borderTop:"1px solid #ffffff61"}}>
          {list && list.map((item,index)=>{
            return <CardItem key={index} itemName = {item.name} itemImgUrl = {item.images}/>
          })}
        </div>

        <div className='bg-black flex justify-center items-center' style={{width:"10%",height:"36vh"}}>
         <button onClick={increament}>
            <img src={ArrowIcon} alt="leftArrow" className='rotate-180 w-16'/>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
