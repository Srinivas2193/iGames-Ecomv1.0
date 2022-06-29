import React, { useEffect, useState } from "react";
// import axios from "axios";
import './Products.css'
import { NavLink } from "react-router-dom";
// export const
// console.log(Data.length);

export const Date = ({handleAddProducts}) => {
  const [api, setApi] = useState([]);
  const [filters, setFilter] = useState(api);

  useEffect(()=>{

    let componentMounted=true
    
    const getProducts =async()=>{
    
    
    const response =await fetch("http://localhost:3006/Data");
    
    if(componentMounted){
    
    setApi(await response.clone().json());
    
    setFilter(await response.json());
    
    
    }
    
    return()=>{ componentMounted=false;
    
    }
    
    }
    
    getProducts()
    
    },[])


  const filterData = (cat) => {
    const update = api.filter((x) => x.category === cat);
    setFilter(update);
  };

  return (
    <>
      <div className="products-bg">
        <div>
          <div style={{minHeight:"90vh"}}>
            <div className="flex flex-row justify-center py-5 gap-7 ">
              <button
                className="px-4 text-white border-2 border-orange-500 rounded-lg py-3x hover:bg-orange-500 "
                onClick={()=>setFilter(api)}
              >
                All
              </button>

              <button
                className="px-4 py-3 text-white border-2 border-orange-500 rounded-lg hover:bg-orange-500"
                onClick={() => filterData("racing")}
              >

                Racing games
              </button>
                           <button
                className="px-4 text-white border-2 border-orange-500 rounded-lg hover:bg-orange-500"
                onClick={() => filterData("soft")}
              >
                Kids games
              </button>

              <button
                className="px-4 text-white border-2 border-orange-500 rounded-lg hover:bg-orange-500 "
                onClick={() => filterData("War")}
              >
                War games
              </button>

 
              <button
                className="px-4 text-white border-2 border-orange-500 rounded-lg hover:bg-orange-500"
                onClick={() => filterData("tools")}
              >
                Gaming Accessories
              </button>
            </div>
            <div className="grid content-start grid-cols-4 px-3 pb-6 mt-6 rounded-lg h-">
              {filters.map((product, index) => {
                // console.log(product);
                return (
                  <div key={index}>
                    <div
                      className="p-2 ml-10 border-4 border-white rounded-lg shadow-box bg-slate-200 mt-9 drop-shadow-2xl hover:border-orange-400"
                      style={{
                        backgroundColor: "#e7e2e2ba",
                        width: "75%",
                        height: "92%",
                      }}
                    >
                      <NavLink to={`/product/${product.id}`}>
                      <img className="border-2 rounded-md hover:border-orange-500"
                        src={product.images}
                        alt="card1"
                        style={{ height: "200px"}}
                      />
                      </NavLink>
                      
                      <p className="flex justify-center mt-1 text-2xl font-medium text-red-600  ">
                        {product.name}
                      </p>
                    
                      <h1 className="flex justify-center text-2xl font-bold ">
                        <span className="text-black"> $ </span>{product.price} &nbsp; <s className="font-medium text-green-700 text-1xl">${product.strprice}</s>
                      </h1>
                      <div className="mb-2 ">
                        <p className="w-full h-3 ml-4 text-lg">
                          <span>{product.rating1}</span> <span className="bg-yellow-400 text-black drop-shadow-2xl"><i className="fa fa-star" aria-hidden="true"></i></span>
                        </p>
                        <NavLink to={`/product/${product.id}`}>
                      <span className="h-3 mb-5 mr-4 text-lg width-full hover:text-orange-500" style={{display:"flex", justifyContent:"flex-end"}}><i className="fa fa-info-circle" aria-hidden="true"></i></span>

                        </NavLink>

                        {/* <img src={} className="w-3 h-3 mt-2 ml-2" /> */}
                      </div>
                      <div className="flex flex-row w-full h-8">
                        <button
                          onClick={()=>handleAddProducts(product)}
                          className="px-1 py-1 ml-2 border-2 bg-blue-500 text-white border-blue-400 rounded-lg hover:bg-orange-500"
                        >
                          Add To Cart 
                        </button>
                        <NavLink
                          to={`/pay/${product.id}`}
                          className="px-1 py-1 ml-5 border-2 bg-blue-500 text-white border-blue-400 rounded-lg hover:bg-orange-600"
                        >
                          Buy now
                        </NavLink>
                      </div>
                     
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Date;

































// import React from 'react';
// // import { Link } from 'react-router-dom';
// import './Products.css';
// // import Data from './../Back/Data/Data';


// const Products = ({productItem, handleAddProducts,handleProductInfo}) => {
//   // const {productItems} = Data;

//   return (
//     <div className='bg-green-200'>
//       <div className='products'>
//       {
//         productItem.map((res)=>
//         {
//           return(
//             <>
//             <div className='card'>
//                 <div className='product-image'>
                
// //                   <img src={res.images} alt={res.name}  />
                  
//                 {/* <button onClick={()=>handleProductInfo()} type='button' className='text-3xl' >view</button> */}
//                 {/* </div>
//                 <h2 className='py-1 m-1 text-2xl text-blue-500'>{res.name}</h2>
//                 <h3 className='py-1 m-1 text-green-600 text-1xl'>$ {res.price}</h3>
//                 <div className='columns-2'>
//                   <button onClick={()=>handleAddProducts(res)} className='px-2 font-bold text-center text-black bg-yellow-400 text-1xl'>Add to cart</button>
//                 </div>
//             </div> */}



//             {/* <div className='p-10 border-4 bg-slate-100'>
//               <div className='' key={res.id}>
//                 <img className='h-32 w-36' src={res.image} alt='product pic' />
//                 <h2 className='text-2xl text-left text-blue-600'>{res.name}</h2>
//                 <h3 className='text-1xl'>$ {res.price}</h3>
//                 <div className='columns-2'>
//                   <button className='px-2 py-1 font-bold text-center text-black bg-yellow-400 text-1xl'>Add to cart</button>
//                   <button className='px-2 py-1 font-bold text-center text-black bg-yellow-400 text-1xl'>Buy now</button>

//                 </div>
//               </div>
//             </div> */}
//             // </>
//           )
//         })
//       }
//       </div>
//     </div>
//   )
// }

// export default Products