import React from 'react'
import { Element } from 'react-scroll'
import './about.css'


const About = () => {
  return (
    <Element name='about' className='about'>

        <div className='top-content'> 
            <div className='top-content-container'> 
                <h1> 
                    Dinesh Babu M
                </h1>
                <p>
                    Fresher
                </p>
                <em>
                    A Team Player, Can work Independently,<br />
                </em>
                <em>
                    Self-Learner Good At Verbal And Written Skills,<br />
                </em>
                <em>
                    problem-solving and creative thinking..,
                </em>


            <h4 className='resumebtn'>
                <a href="https://drive.google.com/file/d/1XTzl0ZobZJDWz2VqDzw-d3uu1L_J91Pk/view?usp=sharing">Resume...</a>
            </h4> 

            </div>
        </div>

    </Element>
  )
}

export default About