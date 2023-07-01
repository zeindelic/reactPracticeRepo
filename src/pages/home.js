import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import SearchFunc from "../state/inputRelay";
import { useQuery } from "react-query";
const fetchData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = response.data
    return data
};

const Home = ({ onData }) => {
  const { data, isLoading, isError, error } = useQuery("products", fetchData);
  const [inputText, setInputText] = useState("");
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  


  const handleData = (data) => {
    setInputText(data);
  };

  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(inputText.toLowerCase())
  );

  return (
    <div className="homeMain">
      <SearchFunc handleSearch={handleData} />
      {filteredProducts.map((product) => (
        <div className="productCard">
          <div className="titlePrice">
            <p className="prodTitle">{product.title}</p>
          </div>
          <img src={product.image} alt="" className="prodImage" />
          <p className="prodPrice">$ {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
