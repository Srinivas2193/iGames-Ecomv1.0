import React from 'react'
import "./footer.css";
import gamePass from "../../assets/footerAssetss/GamePass.svg";
import logo from "../../assets/footerAssetss/logo.webp";

export default function Footer() {
  return (
      <>
      <hr />
      <div className="bg-black width-full h-72" style={{borderBottom:"1px solid #ee3124"}} >
          <div className="py-2 pt-16">
              <div className='flex justify-center py-3 width-full'>
                  <img src={logo} alt="Logo" style={{height:"29px"}}/>
              </div>
              <div className='flex justify-center gamepass'>
                  <a href="/" className='flex items-center justify-center px-12 py-2 my-2 text-white border rounded-lg' style={{backgroundColor:"#333333",color:"rgb(245 245 245 / 68%)"}}>
                      <span>Want new games first? &nbsp;</span>
                      <span style={{color:"#1eaa16",border:"2px solid #1eaa16", borderRadius:"8px"}} className="font-bold">&nbsp;Upgrade&nbsp;</span>
                      &nbsp;to&nbsp;
                      <img src={gamePass} alt="gamePass" style={{width:"150px", height:"auto"}}/>
                      &nbsp;today!
                  </a>
              </div>
              <div className='flex justify-center py-2 text-sm text-white' style={{color:"rgb(245 245 245 / 92%)"}}>
                  <p>Copyright ©2022</p>
                  <span>&nbsp;iGames, Inc.</span>
              </div>
              
              <nav className='flex items-center justify-center py-1 text-sm text-white' style={{color:"rgb(245 245 245 / 81%)"}}>
                  <a hre="/" className='px-2' style={{borderRight:"1px solid #fff"}}>About Us</a>
                  <a hre="/" className='px-2' style={{borderRight:"1px solid #fff"}}>Corporate</a>
                  <a hre="/" className='px-2' style={{borderRight:"1px solid #fff"}}>Contact</a>
                  <a hre="/" className='px-2' style={{borderRight:"1px solid #fff"}}>Terms of Use</a>
                  <a hre="/" className='px-2' style={{borderRight:"1px solid #fff"}}>Privacy</a>
                  <a hre="/" className='px-2'>Free Games For Your Website</a>
              </nav>              
          </div>
      </div>
      </>
  )
}
