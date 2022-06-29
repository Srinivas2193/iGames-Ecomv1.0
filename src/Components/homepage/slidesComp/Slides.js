import React, { useEffect} from 'react';
import { useState } from 'react';
import "./slides.css";
import slide1 from "../../../assets/sliderAssetts/slide1.jpg";
import slide2 from "../../../assets/sliderAssetts/slide2.jpg";
import slide3 from "../../../assets/sliderAssetts/slide3.jpg";
import slide4 from "../../../assets/sliderAssetts/slide4.jpg";
import slide5 from "../../../assets/sliderAssetts/slide5.png";
// import slide5 from "../../../assets/sliderAssetts/slide5.jpg";
const slides = [slide1, slide2, slide3,slide4];

export default function Slides() {
  const [slidesList, setSlidesLis] = useState([...slides]);
  const [slideImg, setSlideImg] = useState(slidesList[0]);

  useEffect(()=>{
    setInterval(()=>{
      setTimeout(()=>{setSlideImg(slide5)},1000);
      setTimeout(()=>{setSlideImg(slide2)},2000);
      setTimeout(()=>{setSlideImg(slide3)},3000);
      setTimeout(()=>{setSlideImg(slide4)},4000);
      setTimeout(()=>{setSlideImg(slide1)},4000);
    },5000);

  },[])
  
  const onClickFunc = (e)=>{
        setSlideImg(slidesList[parseInt(e.target.id)-1]);
  }
  return (
    <>
      <div className='flex justify-center items-center flex-col py-8 text-white bg-black sliderContainer relative'>
        <div className='bg-white text-black flex justify-center items-center' style={{width:"1187px",height:"320px",boxShadow:"white 0px 0px 5px 0px"}}>
          <img src={slideImg} alt="slide1" style={{width:"1187px",height:"320px"}}/>
        </div>
        <div className='sliderButtons flex flex-row justify-center items-center' style={{position:"absolute",bottom:"32px",width:"1187px"}}>
                <span id="1" className="cursor-pointer mx-1 h-1 border w-10 rounded-full my-1" onClick={onClickFunc} style={{borderColor:"grey",backgroundColor:"grey"}}></span>
                <span id="2" className="cursor-pointer mx-1 h-1 border w-10 rounded-full my-1" onClick={onClickFunc} style={{borderColor:"grey",backgroundColor:"grey"}}></span>
                <span id="3" className="cursor-pointer mx-1 h-1 border w-10 rounded-full my-1" onClick={onClickFunc} style={{borderColor:"grey",backgroundColor:"grey"}}></span>
                <span id="4" className="cursor-pointer mx-1 h-1 border w-10 rounded-full my-1" onClick={onClickFunc} style={{borderColor:"grey",backgroundColor:"grey"}}></span>
        </div>
      </div>
    </>
  )
}
