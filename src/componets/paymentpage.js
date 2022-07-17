import React from "react";

const PaymentPage =()=>{

  
    return(
        <div className="contenedor-paymentpage">
            <h3>¿Como hacer un cálculo aproximado del consumo de energía eléctrica?</h3>
            <p>Calcular el consumo aproximado del mes es muy sencillo, ya conocimos nuestra factura (Conozca su Factura), siguiendo estos pasos tendremos un valor aproximado del monto a pagar en nuestro siguiente periodo:Observe la calculadora que tenemos, esta nos servirá en nuestro cálculo, puede mover la misma haciendo un click con el boton izq. del mouse y sin soltarlo moverla hasta el lugar deseado. Con una factura en mano del periodo anterior, buscaremos los siguientes datos:*. Su consumo (en el figuran los KW/H consumidos)*. Cargo variable. *. El subsidio (el subsidio Nacional  sale  de la diferencia de la tarifa  con  subsidio y sin  subsidio y los subsidio jubilados de un porcentaje  según el bono de sueldo del jubilado, el rural  de otro  porcentaje estipulado por el Epre, y el Riego Agrícola  según el consumo,  a mayor consumo  menos  subsidio) *. Tasa de alumbrado publico $7.30. El cociente entre el cargo variable y su consumo (Cargo Variable/Consumo) es el valor de los KW/h que usted consume. En el caso de los residenciales el costo aproximado es $ 0.432. También tenemos el costo fijo ($3,15) Con estos valores podemos empezar a calcular algunos ejemplos.Emplificaremos un consumo de 105 KW/H y al multiplicarlo por la tarifa del KW/H ($0.432), obtendremos nuestro cargo variable ($45.36), le sumamos el costo fijo ($3.15). obtenemos un valor neto de $48.51. Al valor neto resta descontar el subsidio el cual depende de cada persona ya que el gobierno lo calcula en base al bono de sueldo y su consumo. Este valor lo podemos sacar de nuestra factura de energía eléctrica. En este caso será alrededor de $35.02. El total neto nos que en $13.50. A Nuestro total neto obtenido en el paso anterior (6) solo resta agregarles los impuestos que es un porcentaje que ronda alrededor del 38% y la tasa por alumbrado publico que es ($7,30). Entonces el Valor neto ($13.50) por el porcentaje de impuestos (38%), es un subtotal de ($18,63), mas la tasa de alumbrado publico ($7.30), esto hace un total de $25.93. Recuerde que este es solo un ejemplo de una tarifa residencial, ya que las tarifas varían según su categoría.</p>
            <img  src="/FACTURA1 (1).jpg" alt="" />
        </div>
    )
}
export default PaymentPage;