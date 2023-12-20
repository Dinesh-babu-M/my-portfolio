import React from 'react'
import Skillsimg from '../../asset/skill.jpg'
import {Element} from 'react-scroll'
import LinearProgress  from '@mui/material/LinearProgress'
import './skill.css'


const Skill = () => {
  return (

        <Element id='skill' className='skillcontainer'> 

          <div className='skillcontainer-imgage'>   
            <img src={Skillsimg} alt='img'></img>
          </div> 

          <div className='skillcontainer-text'>   
                  <h2>SKILLSET</h2>
            <div className='skillcontainer-skillset'>
                      <h5>React JS</h5>
              <div className='skillcontainer-slider skillcontainer-slider1'>
                <LinearProgress 
                  variant='determinate'
                  value={77} 
                />
              </div>
            </div>

            <div className='skillcontainer-skillset'>
                      <h5>JavaScript</h5>
              <div className='skillcontainer-slider skillcontainer-slider2'>
                <LinearProgress 
                  variant='determinate'
                  value={75} 
                />
              </div>
            </div>

            <div className='skillcontainer-skillset'>
                      <h5>Git - GitHub</h5>
              <div className='skillcontainer-slider skillcontainer-slider3'>
                <LinearProgress 
                  variant='determinate'
                  value={85} 
                />
              </div>
            </div>

            <div className='skillcontainer-skillset'>
                      <h5>bootstrap</h5>
              <div className='skillcontainer-slider skillcontainer-slider4'>
                <LinearProgress 
                  variant='determinate'
                  value={80} 
                />
              </div>
            </div>

            <div className='skillcontainer-skillset'>
                      <h5>CSS</h5>
              <div className='skillcontainer-slider skillcontainer-slider5'>
                <LinearProgress 
                  variant='determinate'
                  value={80} 
                />
              </div>
            </div>

            <div className='skillcontainer-skillset'>
                      <h5>HTML</h5>
              <div className='skillcontainer-slider skillcontainer-slider6'>
                <LinearProgress 
                  variant='determinate'
                  value={86} 
                />
              </div>
            </div>
            
          </div>
        </Element>
  )
}

export default Skill