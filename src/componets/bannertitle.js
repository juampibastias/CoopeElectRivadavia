import React from "react"
const BannerTitle =(props)=>{
    // este banner contiene un titulo dentro 
    return(
        <div className="contenedor-bannertitle" style={{backgroundImage:props.direccionimagen}}>
            <h1 className="bannertitle-title">{props.titulo}</h1>
        </div>
    )
}
export default BannerTitle