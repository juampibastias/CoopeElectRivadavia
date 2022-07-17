import React from "react";

//TextoVisible = flex/none/
//img = url de la imagen
const Banner =(promp)=>{
return(
    <div className="banner">
        <img src={promp.img} alt="banner"/>
        <div className="banner-text" style={{display:promp.textoVisible}}>
            <h4>DESCARGA TU BOLETA INGRESANDO EN:
<a href="https://WWW.COOPERATIVAPOPULAR.com.ar/MOVIL" >WWW.COOPERATIVAPOPULAR/MOVIL</a> </h4>
        </div>
    </div>
)
}
export default Banner;