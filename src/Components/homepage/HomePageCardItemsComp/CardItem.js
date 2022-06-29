import React, { useState } from 'react'
import image1 from "../../../assets/sliderAssetts/slide1.jpg";

export default function CardItem(props) {
  const [imageUrl, setImageUrl] = useState(props.itemImgUrl);
  const [itemName, setItemName] = useState(props.itemName);

  return (
    <div className='mainContainer w-56 h-56' style={{minWidth:"225px", maxWidth:"225px"}}>
        <div className='py-2 px-2 flex itmes-center justify-center'>
            <a href={imageUrl} target="_blank" rel="noreferrer">
              <img style={{width:"210px",height:"180px"}} src={imageUrl?imageUrl:"https://media.wired.com/photos/5e2b584b097df7000896da1b/master/w_1600,c_limit/Gear-Scuf-Infinity4PS-Pro-Source-Scuf.jpg"} alt="item1"/>
            </a>
        </div>
        <div className='py-1 px-2 flex itmes-center justify-center text-white'>
            <h3 className='text-light'>{itemName}</h3>
        </div>
    </div>
  )
}
