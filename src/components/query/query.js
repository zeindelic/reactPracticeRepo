import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    const data = response.data
    return data
}

const ReactQuery = () =>{
    const { data, isLoading, isError, error } = useQuery('products', fetchData)


if(isLoading){
    return <div>Loading...</div>
}

if(isError){
    return<div>Error: {error.message}</div>
}
return(
    <div className="game">
        <h1>products List</h1>
        <ul>
            {data.map((product) => (
                <li>{product.title}</li>
                ))};
        </ul>



    </div>

)}
export default ReactQuery
