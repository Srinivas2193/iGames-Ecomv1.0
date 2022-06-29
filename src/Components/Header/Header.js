import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from './../../assets/images/EAlogo.png'

const Header = ({cartItem}) => {
  return (
    // <div className='text-3xl text-center text-blue-500'>Header page</div>
    <>
    <header className='header'>
        <div>
            <h1>
                <Link to='/' className='text-3xl text-white'><img className='inline-block w-16 h-16 rounded-full ml-7 ring-2 ring-white' src={Logo} alt='logo-EA' /> <span className='font-bold hover:text-orange-500'>EA Games and Access.</span></Link>
            </h1>
        </div>
        <div className='header-links'>
            <ul>
                <li>
                    <Link to='#' className='text-2xl'>Home</Link>
                </li>

                <li>
                    <Link to='/about' className='text-2xl'>About</Link>
                </li>

                <li>
                    <Link to='/products' className='text-2xl'>Products</Link>
                </li>

                <li>
                    <Link to='/login' className='text-2xl'>Login</Link>
                </li>
                
                <li>
                    <Link to='/signup' className='text-2xl'>Signup</Link>
                </li>

                <li>
                    <Link to='/cart' className='text-2xl'> &nbsp;
                    <i className="fa fa-shopping-cart me-1"></i> &nbsp;
                    <sup className='p-1 font-bold text-black bg-white border rounded-full text-1xl'>
                    <span className='cart-length'>{cartItem.length === 0 ? "0" : cartItem.length}</span>

                    </sup>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
    </>
  )
}

export default Header