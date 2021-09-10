import './ButtonC.css'
import React from 'react';



const ButtonC = (props) => {
    
    return (
        <div className="buttonStyle">
            {props.text.toUpperCase()} 
        </div>
    );
};

export default ButtonC;

