import React from "react";
import BannerTitle from "../componets/bannertitle";

const ResponsabilidadSocial =()=>{
    return(
        <div className="contenedor-responsabilidadsocial">
            <div className="contenedor-banner">
              <BannerTitle direccionimagen={"url(/banner2.png)"} titulo={"Tarifa Social"}/>
              <div className="responsabilidad-content">
              <h3>¿Quiénes acceden a la Tarifa Social?</h3>
              <p>Acceden a la Tarifa Social titulares de servicios de gas natural y electricidad que sean:</p>
              <ul>
                <li>Jubilados o pensionados o trabajadores en relación de dependencia que perciban una remuneración bruta menor o igual a DOS (2) Salarios Mínimos Vitales y Móviles.</li>
                <li>Trabajadores “monotributistas” inscriptos en una categoría cuyo ingreso anual mensualizado no supere en dos (2) veces el Salario Mínimo Vital y Móvil.</li>
                <li>Beneficiarios de Pensiones no Contributivas que perciban ingresos mensuales brutos no superiores a dos (2) veces el Salario Mínimo Vital y Móvil.</li>
                <li>Titulares de programas sociales.</li>
                <li>Usuarios inscriptos en el Régimen de Monotributo Social.</li>
                <li>Usuarios incorporados en el Régimen Especial de Seguridad Social para Empleados del Servicio Doméstico (26.844).</li>
                <li>Usuarios que perciben seguro de desempleo</li>
                <li>Titulares de Pensión Vitalicia a Veteranos de Guerra del Atlántico Sur.</li>
                <li>Usuarios que cuenten con certificado de discapacidad expedido por autoridad competente.</li>
                <li>Titulares (o uno de sus convivientes) que padezcan una enfermedad cuyo tratamiento implique electrodependencia.</li>

              </ul>
              <p>¿Cómo me puedo dar de alta para ser beneficiario de la Tarifa Social?</p>
              <p>A través de internet en el sitio web <a href="www.minem.gob.ar/formulario">www.minem.gob.ar/formulario</a> ó en la línea gratuita <a href="tel:0800 333 2182">0800 333 2182</a></p>
              <a href="www.epreweb.com.ar/tarifasocial">www.epreweb.com.ar/tarifasocial</a>
              </div>
            </div>
        </div>
    )
}
export default ResponsabilidadSocial;