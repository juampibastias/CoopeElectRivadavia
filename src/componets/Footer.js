import React from "react";
import logocoope from "../images/logo-blanco.png";

const Footer = () => {
  return (
    <div className="footer">
      <footer >
        <div className="img-container">
          <img className="logo-blanco" src={logocoope} alt="logo-coope" />
        </div>
    <div className="hr"> </div>
        <ul className="link-list-footer">
          <li>
            <h5>INFO DE INTERES</h5>

            <ul>
              <li><a href="/medios-de-pago">MEDIOS DE PAGO</a></li>
              <li><a href="/descargafactura">IMPRIMI TU FACTURA</a></li>
              <li><a href="/cortes-programados">CORTE DE ENERGIA</a></li>
              <li><a href="/contacto">HORARIOS DE ATENCION</a></li>
              <li><a href="/one-internet">INTERNET</a></li>
              <li><a href="/lacooperativa">LA COOPERATIVA</a></li>
              <li><a href="/ResponsabilidadSocial">RESPONSABILIDAD SOCIAL</a></li>
            </ul>
          </li>

          <li>
            <h5>CONTACTO</h5>

            <ul>
              <li><a href="/contacto">GUARDIA</a></li>
              <li><a href="/contacto">WHATSAPP</a></li>
              <li><a href="/contacto">SALÓN DE VENTAS</a></li>
             <li> <a href="/contacto">CORREO</a></li>
            </ul>
          </li>

          <li>
            <h5>PREGUNTAS FRECUENTES</h5>
            <ul>
             <li> <a href="/PreguntasFrecuentes">CAMBIO DE TITULARIDAD</a></li>
              <li><a href="/PreguntasFrecuentes">NUEVO MEDIDOR</a></li>
             <li> <a href="/PreguntasFrecuentes">TARIFA SOCIAL</a></li>
              <li><a href="/PreguntasFrecuentes">ELECTRODEPENDIENTES</a></li>
              <li><a href="/PreguntasFrecuentes">FACTURA VENCIDA</a></li>
             <li> <a href="/PreguntasFrecuentes">ALUMBRADO PUBLICO</a></li>
            </ul>
          </li>
        </ul>
        <p className="copyright">Copyright © All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
