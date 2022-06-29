import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import './Product.css'


export const Products = ({handleAddProducts}) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(()=>
  {
      let response= async ()=>
      {
        let getData = await axios.get(`http://localhost:3006/Data/${id}`)
        setProduct(getData.data) 
      }

      response();
  });


  return (
    <>
      <div className="flex flex-row gap-32 ml-12 mt-9 mb-11" style={{height:"vh"}}>
        <img className="transition duration-300 ease-in-out delay-150 rounded-2xl hover:-translate-y-1 hover:scale-110" src={product.images} alt={product.name} height="600px" width="70%"
        
        style={{ overflow: "hidden" }}
        // onMouseOver={(e) => (e.currentTarget.style = { transform: "scale(1.25)", overflow: "hidden" })}
        // onMouseOut={(e) => (e.currentTarget.style = { transform: "scale(1)", overflow: "hidden" })}
        />
        <div className="flex flex-col">
          <h4 className="mt-3 ml-3 text-3xl font-extrabold ">{product.name}</h4>
          {/* <h1 className="mt-3 text-lg">{Pro.name}</h1> */}
          {/* <p className="text-lg font-normal">{Pro.rating && Pro.rating.rate}</p> */}
          <h3 className="mt-4 ml-3 text-xl font-extrabold">price: <span className="text-2xl text-green-700">${product.price}</span> &nbsp; &nbsp; <span className="font-medium text-red-500 text-1xl"> $ <s> {product.strprice} </s> </span> </h3>
          <p className="px-3 text-lg font-normal text-justify mt-7"> <span className="text-2xl font-medium text-blue-500">Description :</span> {product.content}</p>
            
          <br/>
            
            <h3 className="ml-3 text-2xl font-medium text-blue-500">System Requirements:</h3>
            <p className="px-3 text-justify">
              {product.systemrequirment}
            </p>


          <div className="flex flex-row gap-5 py-3 mt-3 ">
            <button className="px-3 py-2 text-white bg-yellow-500 border-2 rounded-xl hover:bg-orange-500" onClick={()=>handleAddProducts(product)}>
              Add to cart
            </button>
            <button className="px-3 py-2 text-white bg-gray-500 border-2 rounded-xl hover:bg-orange-600">
              <Link to='/cart'>Go to cart</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
