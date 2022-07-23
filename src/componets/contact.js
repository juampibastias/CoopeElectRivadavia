import React from "react";
import contacto1 from '../images/contacto1.png'
import contacto2 from '../images/contacto2.png'
import contacto3 from '../images/carrito.png'
import contact4 from '../images/contacto5.png'
import contact5 from '../images/contacto6.png'
const ContactoMod = ()=>{
    return(
        <div className="contenedor-contacto">
            <div className="contenedor-info">
                <h1>Contactanos:</h1>
                <ul>
                    <li>
                        <img src={contacto1} alt=""/>
                        <div className="contacto-info-item">
        <a href="tel:4445843"><h3>4445843</h3></a>
        <p>Guardia de reclamos</p>
                        </div>
                    </li>
                    <li>
                        <img src={contacto2} alt=""/>
                        <div className="contacto-info-item">
        <a href="tel:4445843"><h3>4445843</h3></a>
        <p>Guardia de reclamos</p>
                        </div>
                    </li>
                    <li>
                        <img src={contacto3} alt=""/>
                        <div className="contacto-info-item">
        <a href="tel:4445843"><h3>4445843</h3></a>
        <p>Guardia de reclamos</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
            <div className="contenedor-img-chat">
            <a href="/">
                <img src={contact4} alt={contact4} />
                <img src={contact5}alt={contact5} />
                </a>  
                
            </div>
            </div>
    )
}
export default ContactoMod;