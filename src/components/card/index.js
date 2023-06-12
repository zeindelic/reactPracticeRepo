import React from 'react';
import './card.css';
import Button from '../button';
import Input from '../input';

const Card = () => {
    return(
        <div className='mainCard'>
       
            <h1>Main Card!</h1>
            <div className='loginCard'>
                <div className='inputDiv'>
                <Input placeholderName={'username'} color={'white'}/>
                <Input placeholderName={'password'} color={'white'}/>
                </div>
                
                <div className='buttonDiv'> 
                <Button MiddleBorder={'solid rgb(49, 49, 49) px'} buttonRadiusLeft={'30px'} text={'sign up'} color={'gray'}/>
                 <Button buttonRadiusRight={'30px'} text={'cancel'} color={'gray'}/>
                 </div>
                
</div>
           

        </div>
    )
}

export default Card