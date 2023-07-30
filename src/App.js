import "./App.css";
import Card from "./components/card";
import Footer from "./components/footer";
import TitleCard from "./components/TitleCard";
import Counter from "./state/inputRelay";
import Header from "./pages/header";
import { Route, Routes } from "react-router-dom";
import MensFashion from "./pages/mensFashion";
import WomensFashion from "./pages/womensFashion";
import JewelryFunc from "./pages/jewelry";
import ElectronicsFunc from "./pages/electronics";
import Home from "./pages/home";
import { useEffect, useState } from "react";
import axios from "axios";
import ParentComponent from "./props/ParentComponent";
import ChildInputComponent from "./props/ChildInputComponent";
import ParentInputComponent from "./props/ParentInputComponent";
import ParentPracFunc from "./props/ParentPrac";
import Box from "@mui/material/Box";
import inputFunc from "./components/inputFilter";
import ReactQuery from "./components/query/query";
import WeatherAppFunc from "./components/weather app/weatherApp";
import { Container } from "./components/styleComponent/index.style";
import Todo from "./components/toDoList";
import QuizFunc from "./components/quizFolder/quiz";
import Login from "./components/loginContext/loginPage";
import LoginAppFunc from "./components/loginContext/mainLoginApp";
{
  /* <Header /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Category />} />

      </Routes> */
}
// const [data, setData] = useState([])
//   const fetchData = async () => {

//     try {
//       const response = await axios.get('https://fakestoreapi.com/products');
//       console.log(response);
//       setData(response.data)
//     } catch (e) {
//       console.log(e);

//     }
//   }

// useEffect(() => {
//   fetchData()
// }, [])

//   return (
//     <div className = 'App'>
//       {data.map((product) => (
//         <div className='productCard'>
//           <div className='titlePrice'>
//         <p className='prodTitle'>{product.title}</p>
//         <p className='prodPrice'>{product.price}</p>
//         </div>
//        <img src={product.image} className='prodImage'/>
//         <p className='prodDesc'>{product.description}</p>

//         </div>
//       ))}

//     </div>
//   );
// <ParentComponent/>
// <ParentPracFunc/>
function App() {
  return (
    <div className="main">

      <LoginAppFunc/>

      {/* <QuizFunc/> */}
      {/* <Todo/> */}
      {/* <WeatherAppFunc/> */}

      {/* <WeatherAppFunc/> */}
      {/* <ReactQuery/> */}

      {/* <Header />
<Routes>
        <Route path='/' element={<Home />} />
        <Route path="men's Fashion" element={<MensFashion/>} />
        <Route path="women's Fashion" element={<WomensFashion/>} />
        <Route path="jewelry" element={<JewelryFunc/>} />
        <Route path="electronics" element={<ElectronicsFunc/>} />

      </Routes>  */}
    </div>
  );
}

export default App;
