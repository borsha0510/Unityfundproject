import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about_img'/>
        </div>
        <div className='about-right'> 
            <h3>About Us</h3>
            <h2>Helping Hands, Changing Lives</h2>
            <p> Our aim is to support underprivileged individuals by providing essential resources and financial aid. 
                We strive to create a compassionate society where no one suffers due to a lack of basic necessities. 
                Through collective efforts, we work towards uplifting lives and fostering hope for a better future.
            </p>
            <p>We focus on providing food, shelter, education, and healthcare to those in need. 
                Our platform connects donors with vulnerable communities, ensuring help reaches the right people at the right time.
                By promoting transparency and accountability, we build trust and encourage more people to contribute to this noble cause.
            </p>
        </div>
    </div>
  )
}

export default About