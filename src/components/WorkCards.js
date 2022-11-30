import './WorkCardsStyles.css';
import React from 'react';


import { NavLink } from 'react-router-dom';

const WorkCards = (props) => {
    
    return (
        <div className='work-card'>
          <h1 className='title'>Projects</h1>
            <div className='card-container'>
                <div className='project-card'>
                    <img src={props.img1} alt='image'/>
                    <h2 className='pro-title'>this is pro title</h2>
                    <div className='pro-content'>
                        <p>this is text</p>
                    </div>
                    <div className='pro-btns'>
                        <NavLink className='btn' to='/url.com'>VIEW</NavLink>
                        <NavLink className='btn' to='/https://github.com/eangle9'>SOURCE</NavLink>
                      </div>
                </div>

                <div className='project-card'>
                    <img src={props.img2} alt='image'/>
                    <h2 className='pro-title'>this is pro title</h2>
                    <div className='pro-content'>
                        <p>this is text</p>
                    </div>
                    <div className='pro-btns'>
                        <NavLink className='btn' to='/url.com'>VIEW</NavLink>
                        <NavLink className='btn' to='/https://github.com/eangle9'>SOURCE</NavLink>
                      </div>
                </div>

                <div className='project-card'>
                    <img src={props.img3} alt='image'/>
                    <h2 className='pro-title'>this is pro title</h2>
                    <div className='pro-content'>
                        <p>this is text</p>
                    </div>
                    <div className='pro-btns'>
                        <NavLink className='btn' to='/url.com'>VIEW</NavLink>
                        <NavLink className='btn' to='/https://github.com/eangle9'>SOURCE</NavLink>
                      </div>
                </div>


            </div>
        </div>
    );
}

export default WorkCards;
