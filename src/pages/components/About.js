import React from 'react'
import image from '../../img/image.jpg'

function About() {
    return (
        <section>
            <div className="shadow"></div>
            <div className="container">
                <div className="content opacity">
                    <h3 className="title">
                      About
                      <div className="border"></div>  
                    </h3>
                    <p className="text">
                    Avvncor Initaites volunteer led social welfare organization primarily
                        works in the field of education. We have held many strategically
                        designed workshops and educational tours. 
                        We are engaged in providing job oriented computer science education as well. 
                        We are environment cautious for which we contribute activism
                    </p>
                </div>
                <div className="imgContainer  opacity">
                    <img src={image} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default About
