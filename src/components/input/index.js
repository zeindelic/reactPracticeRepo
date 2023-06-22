import React from 'react';
import './input.css'

const Input = ({type, placeholderName, color}) => {
    return(
       <input type={type} placeholder={placeholderName} style={{backgroundColor: color}} className='inputName'/>
        
            
           

        
    )
}

export default Input