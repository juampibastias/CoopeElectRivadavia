import React, { useState, useEffect} from "react";
import CardItem from "./elements/cards";
import noticia from "../images/noticia.png";
import noticia1 from "../images/noticia1.png";
import axios from "axios";


const NovedadesCards = (props)=>{

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState ([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);

            console.log(response.data)

        };
 
        cargarNovedades();
    }, [0]);

    return(
        <div id="card-novedades">
       <CardItem title="Novedades"
        img={noticia}
        texto="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non"
         />
         <CardItem title="Novedades 2"
        img={noticia1}
        texto="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non"
         />
          
          </div>
    )
}
export default NovedadesCards;