import React from "react";

const BuscadorFactura=()=>{

    return(
        <section className="contenedor-buscadorfactura">
            <div className="contenedor-itembuscador">
                <h2>Datos Necesarios</h2>
                <div className="factura-img">
                    <img src="/socioSuministro.jpg" alt=""/>
                </div>
            </div>
            <div className="contenedor-itembuscador">
                <h2>Descargar Facturas</h2>
                <form>
                <div className="item">
                    <label>Número de socio
                    <input type="number" />
                    </label>
                  
                </div>
                <div className="item">
                   <label>Número de suministro
                   <input type="number" />
                   </label>
                </div>
                </form>
            </div>
           
        </section>
    )
}
export default BuscadorFactura;