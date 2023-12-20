import React from 'react'
import {Element} from 'react-scroll'
import './project.css'
import Netflix from '../../asset/Netflix clone.png'
import LoginForm from '../../asset/Login form.png'


const project = () => {
  return (
    <Element id='project' className='projectcontainer'> 
            <h1>Project</h1>
            <hr className='horizontal-line' />
            <div className='projectcontainer-project'> 
                <a href="/" alt="Netflix clone project">
                    <div className='projectcontainer-project1'>   
                        <div className='projectcontainer-imgage1'>   
                            <img src={Netflix} alt='Netflix clone imgage'></img>
                        </div> 
                        <div className='projectcontainer-text'>   
                        <h2>Netflix Clone</h2>
                        </div> 
                    </div> 
                </a>

                <a href="/" alt="LoginForm imgage project">
                    <div className='projectcontainer-project1'>   
                        <div className='projectcontainer-imgage2'>   
                            <img src={LoginForm} alt='LoginForm imgage'></img>
                        </div> 
                        <div className='projectcontainer-text'>   
                        <h2>Login Form</h2>
                        </div> 
                    </div> 
                </a>


                

            </div> 
    </Element> 
  )
}

export default project