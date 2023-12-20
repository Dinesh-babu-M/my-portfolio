import React from 'react'
import {Element} from 'react-scroll'
import './contact.css'
import Email from '../../asset/Email.jpg'
import LinkedIn from '../../asset/linkedin.png'


const contact = () => {
  return (
    <Element id='contact' className='contact'> 
        <h1>contact</h1>
        <div className='contactcontainer'>
            <p>
                Email  :  <span>mpsdinesh1221@gmail.com</span> 
            </p>
            <p>
                Phone No  :  <span>9789325262</span> 
            </p>

            <div className='contact-icon'>
                <div className='contact-icon-Email'>
                    <img src={Email} alt="Email"></img>
                </div> 
                <div className='contact-icon-LinkedIn'>
                    <img src={LinkedIn} alt="LinkedIn"></img>
                </div>                
            </div>   
        </div>
    </Element> 
  )
}

export default contact