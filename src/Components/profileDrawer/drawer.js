import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from "../../assets/profileDrawerAssets/cancelORcloseicon.png";
import "./drawer.css";

export default function Drawer({ children, isOpen, setIsOpen, signOutHandler, name, userEmail, userMobile, userAddress }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
        style={{ backgroundColor: "#000000c7", color: "#fff" }}
      >
        <div>
          <div className='z-10 pr-5' style={{ display: "flex", justifyContent: "right", alignItems: "flex-start" }}>
            <img className='absolute z-10 w-8 h-8 mt-3 rounded-full cursor-pointer' src={CloseIcon} alt="CloseME" onClick={() => { setIsOpen(false) }} style={{ boxShadow: "0px 0px 5px 0px #fff", backgroundColor: "#ffffffc7" }} />
          </div>
          <div className='flex flex-col items-center justify-center ProfileContainer width-full'>
            <div className='flex items-center justify-center h-40 width-full'>
              <i id="drawerProfilIcon" className='flex items-center justify-center text-black rounded-full fa fa-user fa-xl bg-slate-100' style={{ transform: "scale(3.5)", height: "40px", width: "40px" }}></i>
            </div>
            <div className='h-8 width-full'><h3 className='my-1 font-medium'>{name}</h3></div>
          </div>
          <hr />
          <section className='flex items-start px-20 py-6 width-full justify-left' style={{ minHeight: "13.5rem" }}>
            <table>
              <tbody>
                <tr className='flex items-center justify-left' style={{ height: "38px", gridGap: "10px" }}><th className='flex justify-left' style={{ width: "100px" }}>E-Mail ID: &nbsp;</th> <td>{userEmail}</td></tr>
                <tr className='flex items-center justify-left' style={{ height: "38px", gridGap: "10px" }}><th className='flex justify-left' style={{ width: "100px" }}>Mobile No: &nbsp;</th> <td>{userMobile}</td></tr>
                {userAddress ?
                  <tr className='flex justify-left' style={{ gridGap: "10px" }}>
                    <th className='flex justify-left' style={{ width: "100px" }}>Address: &nbsp;</th>
                    <td className='text-left' style={{ width: "260px" }}>{userAddress}</td>
                  </tr> :
                  null}
              </tbody>
            </table>
          </section>
          <hr />
          <section className='flex flex-col items-center justify-center h-32 text-white width-full'>
            <div className='my-2'><Link to="privacyPolicy" className='border-b cursor-pointer' onClick={() => { setIsOpen(false) }}>Privacy Plociy</Link></div>
            <div className='my-2'>
              <button onClick={signOutHandler} className='px-2 border rounded-full cursor-pointer'>Sign out</button>
            </div>
          </section>
        </div>

      </section>

      <section className="w-screen h-full cursor-pointer " onClick={() => { setIsOpen(false) }}>
      </section>
    </main>
  );
}
