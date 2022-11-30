import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCards from '../components/PricingCards';
import WorkCards from '../components/WorkCards';
import pro3 from '../assets/project3.jpg';
import pro1 from '../assets/front-end.jpg';
import pro2 from '../assets/project2.webp';


const Project = () => {
    return ( 
    <div>
        <Navbar/>
        <HeroImg2 heading='PROJECTS.' text='Some of my most recent works'/>
        <WorkCards img1={pro1} img2={pro2} img3={pro3}/>
        <PricingCards/>
        <Footer/>
    </div>
    );
}

export default Project;
