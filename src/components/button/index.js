import React from 'react';
import './button.css';

const Button = ({text, color, buttonRadiusLeft, buttonRadiusRight, MiddleBorder}) => {
    return(
        <button  style={{borderRight: MiddleBorder, backgroundColor: color, borderBottomRightRadius: buttonRadiusRight, borderBottomLeftRadius: buttonRadiusLeft}} className='button'>{text}</button>

        
            
           

        
    )
}

export default Button