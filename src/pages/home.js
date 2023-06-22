import React, { useState, useEffect } from "react";
import axios from "axios";
import './home.css'
import SearchFunc from "../state/inputRelay";


const Home = ({onData}) => {
        const [productData, setProductData] = useState([]); 
        const [inputText, setInputText] = useState('')
        const fetchData = async () => {
    
                try {
                  const response = await axios.get('https://fakestoreapi.com/products');
                  console.log(response);
                  setProductData(response.data)
                } catch (e) {
                  console.log(e);
                  
                }
              }
            
            
            useEffect(() => {
              fetchData()
            }, [])

           

            const handleData = (data) => {    
              setInputText(data)
          }

          const filteredProducts = productData.filter((product) =>
    product.title.toLowerCase().includes(inputText.toLowerCase())
  );
          
  return (
    <div className = 'homeMain'>  
      <SearchFunc handleSearch={handleData}/>
          {filteredProducts.map((product) => (
          
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

export default Home