import React from "react";
import social1 from "../images/contacto7.png";
import social2 from "../images/contacto8.png";
import social3 from "../images/contacto9.png";
const FollowUs = ()=>{
    return(
        <div className="Follow-Us-container">
            <div className="title-group">
                <h2>SEGUINOS</h2>
                <p>y enterate de las ultimas novedades</p>
            </div>
            <div className="social-media-container">
                <ul>
                    <li><a href="/"><img src={social1} alt=""/></a></li>
                    <li><a href="/"><img src={social2} alt=""/></a></li>
                    <li><a href="/"><img src={social3} alt=""/></a></li>

                </ul>
            </div>
        </div>
    )
}
export default FollowUs;