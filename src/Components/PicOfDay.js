import React, { Component } from 'react';
import './PicOfDay.css'
import dog from '../assets/dog.jpg'; // with import
import rectangle1 from '../assets/Rectangle1.jpg'; // with import
import rectangle2 from '../assets/Rectangle2.jpg'; // with import
import rectangle3 from '../assets/Rectangle3.jpg'; // with import


class PicOfDay extends Component {
    render() {
        return (
            <div className="PicOfdayComponent">
                <div className="grid" >
                    <img src={dog} alt="dog quiet" className='PicOfDay' />
                    <span className='highligth'>Photo of the day</span>
                </div>
                <div className="details">
                    <div className="description">
                        <h2>About the Samurai King Resting</h2>
                        <h3>Pets</h3>
                        <p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder
                        </p>
                        <br/>
                        <p>text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</p>
                    </div>
                    <div className="alsoBuy">
                        <h2 style={{textAlign:'right', marginBottom: 27}}>People also buy</h2>
                        <div className="gridBuy">
                            <img src={rectangle1} alt="best Buy 1"/>
                            <img src={rectangle2}  alt="best Buy 2"/>
                            <img src={rectangle3}   alt="best Buy 3"/>    
                        </div>
                        <h2 style={{textAlign:'right', marginBottom: 12}}>Details</h2>
                        <div style={{textAlign:'right' }}>
                            <p style={{fontSize:16}}>Size: 1020 x 1020 pixel</p>
                            <p style={{fontSize:16}}>Size: 15 mb</p>
                        </div>
                      

                    </div>
                </div>
            </div>
        );
    }
}

export default PicOfDay;