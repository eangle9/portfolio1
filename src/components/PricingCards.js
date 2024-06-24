import './PricingCardsStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';

const PricingCards = () => {
    return (
        <div className='pricing'>
           <div className='pricing-container'>
               <div className='card'>
                   <h3>- Basic -</h3>
                   <span className='bar'></span>
                   <p className='dollar'>$ 150</p>
                   <p>- 3 Days -</p>
                   <p>- 3 Pages -</p>
                   <p>Featured</p>
                   <p>- Responsive Design -</p>
                   <Link to='/Contact' className='btn'>PURCHASE NOW</Link>
               </div>

               <div className='card'>
                   <h3>- Premium -</h3>
                   <span className='bar'></span>
                   <p className='dollar'>$ 300</p>
                   <p>- 2 Days -</p>
                   <p>- 5 Pages -</p>
                   <p>Featured</p>
                   <p>- Responsive Design -</p>
                   <Link to='/Contact' className='btn'>PURCHASE NOW</Link>
               </div>

               <div className='card'>
                   <h3>- Business -</h3>
                   <span className='bar'></span>
                   <p className='dollar'>$ 500</p>
                   <p>- 5 Days -</p>
                   <p>- 8 Pages -</p>
                   <p>Featured</p>
                   <p>- Responsive Design -</p>
                   <Link to='/Contact' className='btn'>PURCHASE NOW</Link>
               </div>
           </div>
        </div>
    );
}

export default PricingCards;
