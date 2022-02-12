import React from 'react';
import { Link } from 'react-router-dom';
import coverImage from "../../assets/cover/ibby.jpg";

function About() {

  return (
    <div>
      {/* <h1 id="about">About Me</h1> */}
       <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
      <div className='about'> 
      <p > Hi, I’m Mohammad Ibrahim. Welcome to my portfolio site! </p>
    <p> Born and raised in New York City, I was exposed to many different cultures and unique ways of living life. Growing up here gave me the goal to travel the world. I want to see the beauties of the earth and experience different ways of living life. </p>
   <p> As a Marketing major, I graduated from Baruch college on the dean’s list. I enjoyed marketing but I was always curious about software development. The flexibility, the creativity, and the love for coffee intrigued me. Learning how to develop has been fun and I look forward to keep learning and growing. </p>
    </div>
    </div>
  )
}

export default About;