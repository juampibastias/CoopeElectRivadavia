import React from "react";
import Banner from "../componets/banner";

import Redes from "../componets/elements/redes";
import banner1 from "../images/banner1.png";
import PaymentMethod from "../componets/paymentmethod";
import PaymentPage from "../componets/paymentpage";
import BuscadorFactura from "../componets/buscadorfactura";

const DescargarFactura = () => {
  return (
    <div>
     
   
<Banner img={banner1}  textoVisible={"visible"}/>
<BuscadorFactura />
<PaymentMethod />

<PaymentPage />
           <Redes />
      
    </div>
  );
};

export default DescargarFactura;
