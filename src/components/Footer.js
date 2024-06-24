import './FooterStyles.css';
import React from 'react';
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter,FaTelegram} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
          <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff" , marginRight:"1.5rem"}}/>
                   <div>
                    <p>Addis Ababa - Akaki Kaliti</p>
                    <p>Ethiopia</p>
                  </div>
                </div>
                <div className='phone'>
                    <h4>
                      <FaPhone size={20} style={{color:'#fff', marginRight:'1.5rem'}}/>
                      +251993975022
                    </h4>
                </div>
                <div className='email'>
                    
                        <div>
                            <h4>
                            <FaMailBulk size={20} style={{color:'#fff', marginRight:'1.5rem'}}/>
                            </h4>
                        </div>
                      
                      <div>
                          <h4>
                              engdaworkyismaw9@gmail.com
                          </h4>
                          
                     </div>
                    
                </div>
             </div>
             <div className='right'>
                 <h4>About my self</h4>
                 <p>
                     My name is Engdawork Yismaw, I'm a Frontend Software developer.
                      I enjoying discussing new projects and design challenges 
                 </p>
                 <div className='social'>
                 <FaFacebook size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                 <FaLinkedin size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                 <FaTwitter size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                 <FaTelegram size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                 </div>
             </div>
           </div>
         </div>
    )
}

export default Footer;
