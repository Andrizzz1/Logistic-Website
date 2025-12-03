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
                            style={{color:'#22D3EE'}}
                        />
                        
                    </em> 
                    <br /> 
                Delivery Made <span style={{color:'#22D3EE'}}>Clear</span></h1>
                <div>
                    <button>Access now</button>   
                </div>
                            
            </div>
        </section>
    )
}


export default HeroSection;