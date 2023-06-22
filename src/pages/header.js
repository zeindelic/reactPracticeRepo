import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './header.css'

const Header = () => {

    const [isShown, setIsShown] = useState(false);
    return(
        <div className=" headerDiv">
            <h1>Logo</h1>
            <div className="buttonsDiv">
            <ul>
        <li ><NavLink className={({isActive}) => (isActive ? 'active' : '')} style={{ textDecoration: 'none', color: 'back', }} to={'/'}>Home</NavLink></li>
        <li className="categoriesButton" onClick={() =>{
            if (isShown === false) {
                setIsShown(true)
            }
            else{
                setIsShown(false)
            }
        }}
            >Categories</li>
        
    </ul>
    {isShown && (
            <div className="categoriesDiv">
                <ul>
                    <li><NavLink className={({isActive}) => (isActive ? 'active' : '')} style={{ textDecoration: 'none' }} to={"men's fashion"}>Men's Fashion</NavLink></li>
                    <li><NavLink className={({isActive}) => (isActive ? 'active' : '')} style={{ textDecoration: 'none' }} to={"women's fashion"}>Women's Fashion</NavLink></li>
                    <li><NavLink className={({isActive}) => (isActive ? 'active' : '')} style={{ textDecoration: 'none' }} to={'jewelry'}>Jewelry</NavLink></li>
                    <li><NavLink className={({isActive}) => (isActive ? 'active' : '')} style={{ textDecoration: 'none' }} to={'electronics'}>Electronics</NavLink></li>
                </ul>
            </div>
        )}
        </div>
        
    </div>
        
    )
}

export default Header