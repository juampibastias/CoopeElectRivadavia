import React from "react";

import BannerTitle from "../componets/bannertitle";

const Internet =()=>{
    return(
        <div className="contenedor-oneinternet">
            <BannerTitle direccionimagen="url(/banner2.png)" titulo="ONE INTERNET" />
            <div className="oneinternet-content">
                <p>CREA SERVICIOS TECNOLÓGICOS SAPEM es el resultado de la unión de los esfuerzos de la 
Municipalidad de Rivadavia y la Cooperativa Eléctrica y Anexos Popular Rivadavia Ltda. que 
mediante un acuerdo de cooperación, relanzaron un proceso de fortalecimiento institucional 
y de colaboración técnica, que implicó un replanteo del Servicio de Internet de Rivadavia y la 
unificación en la prestación de dicho servicio de ambas instituciones, naciendo de esta 
manera la primer unidad de negocio conjunto ONE internet.</p>
<p>Finalmente, a partir del 17 de mayo 2019 nace CREA una empresa de servicios 
tecnológicos cuyo fin es responder eficientemente a las necesidades funcionales del mundo 
de hoy y del futuro próximo, en base a un modelo de integración y búsqueda del bien común, 
que garantice al vecino de Rivadavia - Mendoza un amplio acceso a la información y una 
adecuada prestación de los servicios digitales, en condiciones de calidad, continuidad, y 
precios justos.</p>
<p>Somos un equipo de apasionados, con amplia experiencia en redes de datos, con un 
objetivo común: contribuir para mejorar la calidad de vida de todos los ciudadanos de 
Rivadavia.</p>
<p>Para más información, contactanos por WhatsApp al <a href="tel:263 4217506">263 4217506</a> o por correo 
electrónico: <a href="mailto:info@oneinternet.com.ar">info@oneinternet.com.ar</a></p>
<div className="links-onepage">
<a href="www.oneinternet.com.a" className="btn-oneinternet">Ir al sitio web</a>
<a className="link-name" href="www.oneinternet.com.ar">www.oneinternet.com.ar</a>
</div>
            </div>
        </div>
    )
}
export default Internet;