import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchFunc from "../../state/inputRelay";
const InputFunc = () => {
    const [inputText, setInputText] =  useState('');


    const handleData = (data) => {
        setInputText(data)
    }


    return(  
    <SearchFunc handleSearch = {handleData}/>
    )
    
}

export default InputFunc