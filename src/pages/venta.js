import React from "react";
import BannerTitle from "../componets/bannertitle";
import { useNavigate } from "react-router-dom";
import ContactForm from "../componets/contacto-form";


const Venta =()=>{
let navigate = useNavigate();
    return(
        <div className="contenedor-venta">
       <BannerTitle titulo="Venta de Materiales" direccionimagen="url(/banner2.png)" />
       <div className="venta-content">
       <h2>MATERIALES DISPONIBLES</h2>

       <div className="venta-items">
        <h3>OFERTAS</h3>
        <div className="items-content">
            <div onClick={()=>{
                navigate("/")
            }} className="venta-item"></div>
            <div className="venta-item"></div>
            <div className="venta-item"></div>
            <div className="venta-item"></div>
            <div className="venta-item"></div>
        </div>
       </div>
       <div className="cotizar">
        <h3>COTIZAMOS TU PEDIDO</h3>
        <p>Complete el siguiente formulario con sus datos, producto y cantidad que desea, le 
enviaremos la cotización a su correo</p>
<ContactForm />
       </div>
       </div>
        </div>
    )
}
export default Venta;