import React from 'react'
import res from './Sarang Malve.Resume (2).pdf'

function About() {
  return (

      <section id="about">
<div className="img">
    <img
        src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"/>
</div>

<div className="info">
    <h1>Sarang Malve</h1>
    <p id='para'> Web Developer </p>
    <p> Web Developer,
        Creative web developer skilled in HTML, CSS, and JavaScript, focused on building responsive and
        user-friendly websites. Passionate about crafting dynamic and engaging web experiences..</p>

    <div className="buttons">
       <a href={res} download> <button className="box">Download My Resume</button></a>
    </div>

    <div className="github">
        <a href="https://github.com/Sarang278"> <i className="fa-brands fa-github"> </i></a>
        <i className="fa-brands fa-linkedin"></i>
    </div>


</div>

</section>
    
  )
}

export default About
