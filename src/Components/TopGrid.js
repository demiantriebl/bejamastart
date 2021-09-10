import React, { Component } from 'react';
import Arrows from '../Svg/Arrows';
import Expand from '../Svg/Expand';

class TopGrid extends Component {
    render() {
        return (
            <div className="filters">
                <h1>Photography / <span style={{fontWeight:400,fontSize:30, color:"#9B9B9B"}}>Premium Photos</span></h1>
                <div className="filters" >
                    <Arrows/>
                    <h2 style={{paddingLeft:'0.5em', fontWeight:400,fontSize:22, color:"#9B9B9B"}}>Sort By</h2>
                    <h2 style={{paddingLeft:'0.5em', fontWeight:400, paddingRight:'0.5em',fontSize:22, }}>Price</h2>
                    <Expand />
                </div>
            </div>
        );
    }
}

export default TopGrid;