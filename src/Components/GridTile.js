import React, { Component } from 'react';
import grid1 from '../assets/grid1.jpg';

class GridTile extends Component {
    render() {
        return (
            <div style={{padding:20}}>
                <img src={grid1} alt="grid1" style={{width:'auto'}}></img>
                <h4>People</h4>
                <h2>Red Bench</h2>
                <h3>$3.89</h3> 
            </div>
        );
    }
}

export default GridTile;