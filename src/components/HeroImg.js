import './HeroImgStyles.css';
import React from 'react';
import background from '../assets/background.png'
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='back-img' src={background} alt='background-image'/>
            </div>
            <div className='content'>
                <p>i'm a freelancer</p>
                <h1>React Developer.</h1>
             <div>
                <Link to='/Project' 
                    className='btn'>
                    Projects
                </Link>
                <Link to='/Contact' className='btn btn-light'>Contact</Link>
             </div>
            </div>
        </div>
    );
}

export default HeroImg;

