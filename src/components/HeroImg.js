import './HeroImgStyles.css';
import React from 'react';
import background from '../assets/background.png'
import profile from '../assets/profile.jpg'
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='back-img' src={background} alt='background-image'/>
            </div>
            <div className='content'>
                <img className='profile' src={profile} alt='profile-picture' />
                <p>i'm a freelancer</p>
                <h1>Fullstack Developer.</h1>
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

