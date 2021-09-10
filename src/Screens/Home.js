import '../App.css';
import './Home.css';

import React, { Component } from 'react';
import PicOfDay from '../Components/PicOfDay';
import ButtonC from '../Components/ButtonC';
import GridC from '../Components/GridC';

class Home extends Component {
    render() {
        return (
            <div>
                <div className='RowTitle'>
                    <h1>Samurai King Resting</h1>
                    <ButtonC text="add to cart"></ButtonC>
                </div>
                <PicOfDay/>
                <GridC />
            </div>
        );
    }
}

export default Home;