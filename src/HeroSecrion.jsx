import React from "react";
import "./HeroSection.css"
import { ReactTyped } from "react-typed";


function HeroSection(){
    return(
        <section>
            <hr />
            <div className="HeroTitle" >
                <h1>Logistics Made{' '}
                     <em>
                        <ReactTyped
                            strings={['Simple', 'Easy', 'Efficient']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                            style={{color:' #CCFFFF'}}
                        />
                        
                    </em> 
                    <br /> 
                Delivery Made Clear </h1>
                <div className="buttons">
                    <button id="access_btn">Access now</button>   
                    <button id="register_btn">Register now</button>
                </div>
                            
            </div>
        </section>
    )
}


export default HeroSection;