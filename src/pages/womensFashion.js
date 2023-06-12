import React, { useState, useEffect } from "react";
import axios from "axios";
import './home.css'


const WomensFashion = ({onData}) => {
        const [productData, setProductData] = useState([]);
        const fetchData = async () => {
    
                try {
                  const response = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
                  console.log(response);
                  setProductData(response.data)
                } catch (e) {
                  console.log(e);
                  
                }
              }
            
            
            useEffect(() => {
              fetchData()
            }, [])

  return (
    <div className = 'homeMain'>
          {productData.map((product) => (
        <div className='productCard'>
          <div className='titlePrice'>
        <p className='prodTitle'>{product.title}</p>
        
        </div>
       <img src={product.image} alt="" className='prodImage'/>
       <p className='prodPrice'>$ {product.price}</p>


        </div>
      ))}
      
   
    </div>
  );
}

export default WomensFashion