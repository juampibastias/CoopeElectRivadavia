import React from "react";
import BannerTitle from "../componets/bannertitle";

const Cortes =()=>{

    //falta hacer que la tabla sea visible si hay cortes e invisible si no hay
    //caso que no haya, agregar un <h2> dentro de <article> que diga "No hay cortes"
    return(
        <div className="contenedor-cortesprogramados">
            <BannerTitle titulo="Cortes Programados" direccionimagen="url('/banner2.png')"/>

            <div className="cortesprogramados-contenido">
                <p>Los Mantenimientos Preventivos se realizan para mejorar la calidad de nuestro 
servicio, resolver problemas reportados por nuestros usuarios, reparaciones y/o 
ampliaciones del sistema eléctrico.</p>
<p>Los mismos son programados e informados por las Distribuidoras (a través de Radios, 
redes sociales) y procesados por el EPRE.</p>
<p>Se debe tener en cuenta que los mismos pueden ser reprogramados por diferentes 
factores tales como viento zonda, tormentas etc., la hora de inicio también puede tener 
retrasos debido a las tareas preliminares realizadas por La Cooperativa y la duración del 
mantenimiento es estimada, por lo que deben tomarse los recaudos necesarios durante 
dicho periodo sin servicio.</p>

<article>
    <h2>Cortes Programados</h2>
    <table>
        <thead>
            <tr>
                <td>dia</td>
                <td>hora</td>
                <td>zona</td>
            </tr>
            </thead>
            <tbody>
        <tr>
            <td>05/08</td>
            <td>10:00</td>
            <td>Barrio San Benito</td>
        </tr>
            </tbody>
    </table>
</article>

<p>Cuando se produce un corte en el suministro de energía, es necesario verificar si la 
falla es de origen interno o de origen externo.</p>
<h2>¿Cómo se verifica?</h2>
<p>Si conectó algún artefacto y se cortó la luz, desconéctelo y diríjase a su tablero general. 
Allí, vuelva a su posición original la llave termomagnérica (llave térmica). Si tiene luz el 
problema estaba en el artefacto.</p>
<p>Si no conectó ningún artefacto y se cortó la luz, compruebe si en su tablero general de 
luz se desconectó la llave termomagnética. De haber ocurrido esto, vuelva a su posición 
original la tecla de la llave termomagnética (llave térmica). En este caso, el problema 
deberá ser reparado por un electricista.</p>
<p>Si no se trata de ninguno de los 2 casos anteriores y no se le ha suspendido el servicio 
por falta de pago, deberá comunicarse telefónicamente con la GUARDIA de La 
Cooperativa al 4445843, las 24 horas, los 365 días del año</p>
            </div>
        </div>
    )
}
export default Cortes;
