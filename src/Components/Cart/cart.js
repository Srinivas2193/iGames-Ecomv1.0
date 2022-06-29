import React from 'react';
import { Link } from 'react-router-dom';
import "./Cart.css"

export default function Cart({cartItems,handleAddProducts,handleRemoveProduct,handleCartClear,paymentHandler})
{

  let totalPrice = cartItems.reduce((price,item)=> { return price + item.quantity * item.price} , 0)

  return(
    <>
    <div className='justify-center font-bold' style={{minHeight:"37rem"}}>
      <div>
        <h2 className='text-4xl text-center text-orange-700 py-2 border-b'>Cart items ({cartItems.length})</h2>
      </div>
      <div className='flex items-end justify-end pb-2' style={{height:"80px",paddingRight:"30rem",position:"relative",top:"8rem"}}>
      { cartItems.length >=1 && (
          <button type='button' className='text-3xl font-bold text-white transition duration-300 ease-in-out delay-150 bg-blue-600 rounded-md text-2 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 ' onClick={handleCartClear} style={{height:"40px",width:"90px",fontSize:"1rem",borderRadius:"4px"}}> Clear Cart</button>
        ) }
      </div>

      {/* No items in the cart */}
      {
      cartItems.length === 0 && <div className='my-8 text-center text-3xl text-orange-700'> No items in Cart! </div>
      }

      {/* if cart is not empty then below section will be shown */}
      {cartItems.length >=1 && 
      <section className='mb-8'>
        <table className='ml-20 text-center table-auto' style={{width:"60%"}}>
          <thead className=''>
            <tr>
              <th className='invisible'>Product Name</th>
              <th className='invisible'>Product Image</th>
              <th className='invisible'>Add/Remove</th>
              <th className='invisible'>Product Price</th>
              <th className='invisible'>Total Price</th>

            </tr>
          </thead>
          <tbody>
            {
                cartItems.map((res,i)=>
                {
                  return(
                    <>
                    <tr key={i} className="border-b my-8 flex flex-row hover:border-orange-500">
                      <td className='flex flex-col '>
                        <span style={{maxWidth:"250px"}}><img className='border-2 rounded-lg h-44 hover:border-orange-500' src={res.images} alt={res.name} style={{maxWidth:"250px"}}/></span>
                        <span style={{maxWidth:"250px", height:"30px"}} className="mt-1 flex justify-center items-center">{res.name}</span>
                      </td>
                      <td className='flex flex-row items-center justify-center' style={{width:"250px"}}>
                        <button className='w-9 h-9 mr-14 text-3xl font-bold text-white duration-300 bg-orange-500 rounded-full text-2 hover:bg-green-600' onClick={()=> handleAddProducts(res)}>+</button>
                        <button className='w-9 h-9 text-3xl font-bold text-white duration-300 bg-orange-500 rounded-full text-2 hover:bg-red-600' onClick={()=> handleRemoveProduct(res)}> - </button>
                      </td>
                      <td className='flex flex-row items-center justify-center' style={{width:"100px"}}><span> {res.quantity} X $ {res.price}</span></td>
                      <td className='flex flex-row items-center justify-center' style={{width:"80px"}}>$ {res.quantity * res.price} .00</td>
                    </tr>
                    </>
                  )
                }
                )
              }
             </tbody>
        </table>
         <div className='px-2 mx-2 border-b-2 rounded-md flex flex-row justify-center items-center' style={{paddingRight:"12rem"}}>
              <div style={{width:"295px"}} className="flex">
                <h2 className='w-52 text-2xl text-left text-orange-500'>Total Price :</h2> 
                <span className='text-2xl text-right text-white pl-8'>${totalPrice}.00</span>
              </div>
         </div>
      </section>
      }
      {/* section completes here */}

      {
      cartItems.length === 0 ? null : 
      <section>
        <div className='px-2 py-3 mx-2 my-5 rounded-md'>
                <button className='px-3 py-5 text-3xl font-bold text-center text-white bg-yellow-500 border-2 rounded-lg hover:bg-orange-600' style={{marginLeft:"550px"}}
                onClick={()=>paymentHandler()}>
                  Place The Order                                    
                </button>
        </div >
        <h2 className='w-full text-center'> OR </h2>
      </section>
      }

      <h2 id="continueShopping" className='py-5 my-8 text-center text-3xl text-left text-orange-500'>
        <Link to='/products'>
          Continue Shopping &nbsp; <i className="fa fa-shopping-cart me-1"></i> ...
        </Link>
      </h2>

      </div>
    {/* </div> */}
    </>
  )
}



















// import React from 'react';
// import './Cart.css'

// let cart = ({cartItems,handleAddProducts,handleRemoveProduct,handleCartClearence}) => {

//   let totalPrice = cartItems.reduce((price,item)=> { return price + item.quantity * item.price} , 0)

//   return (
//     <div className='cart-items'>
//       <h2 className='cart-items-header'>
// Cart Items
//       </h2>
//       <div className='clear-cart'>
//         { cartItems.length >=1 && (
//           <button className='clear-cart-button' onClick={handleCartClearence}> Clear Cart</button>
//         ) }

//       </div>
//       {
//       cartItems.length === 0 && <div className='cart-items-empty'> No items in Cart</div>
      
//       }

//       <div>
//         {
//           cartItems.map((res,i)=>
//           {
//             return(
//                 <>
//                 <div key={res.id} className='cart-items-list'>
//                     <img className='cart-items-image' src={res.image} alt={res.name} />
//                 </div>
//                 <div className='cart-items-name'>{res.name}</div>
//                 <div className='cart-items-function'>
//                     <button className='cart-items-add' onClick={()=> handleAddProducts(res)}>+</button>
//                     <button className='cart-items-remove' onClick={()=> handleRemoveProduct(res)}>-</button>

//                 <div className='cart-items-price'> {res.quantity} * ${res.price} </div>

//                 </div>
                  
//                 </>
//             )
//           })
//         }
//       </div>
      
//       <div className='cart-items-total-price'>
//                     Total price
//                     <div className='cart-items-total-price'> ${totalPrice} .00</div>
//                   </div>
//     </div>
//   )
// }

// export default cart