import React,{useState} from "react";
import Hamburger from 'hamburger-react';
import "./Heading.css"


function WebHeader(){
    const [open,setOpen] = useState(false);
    return(
    <header>
        <div>
            <h2>ClearTrack.</h2>
        </div>
        <div className="hamburgermenu">
            <Hamburger toggle={setOpen} toggled={open} />
        </div>
        {open && 
            <div className="ListHamburger">
                <ul>
                    <Hamburger toggle={setOpen} toggled={open} />
                    <li>HOME</li>
                        <select id="myDropdown" name="myOption">
                            <option value="option1">SERVICES</option>
                            <option value="option2">Sea Transportation</option>
                            <option value="option3">Air Transportation</option>
                            <option value="option3">Land Transportation</option>
                        </select>
                    <li>ABOUT</li>
                    <li>WHY US</li>
                </ul>

                
            </div>}
        <div className="List">
            <ul>
                <li>HOME</li>
                <li>
                    <select id="myDropdown" name="myOption">
                        <option value="option1">SERVICES</option>
                        <option value="option2">Sea Transportation</option>
                        <option value="option3">Air Transportation</option>
                        <option value="option3">Land Transportation</option>
                    </select>
                </li>
                <li>ABOUT</li>
                <li>WHY US</li>
            </ul>
        </div>

      
    </header>
    
    )

}


export default WebHeader;

