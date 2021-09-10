import React, { Component } from 'react';
import './App.css';
import BejamasLogo from './Svg/BejamasLogo';
import ShopCart from './Svg/ShopCart';

class Head extends Component {
    render() {
        return (
            <div className="headerClass">
                <BejamasLogo />
                <ShopCart/>
            </div>
        );
    }
}

export default Head;