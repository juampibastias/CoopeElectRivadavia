import React, { useState, useEffect } from "react";
import Banner from "../componets/banner";
import BloqueTexto from "../componets/textBlock";
import axios from "axios";

const Novedades = () => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/novedades');
        setNovedades(response.data);
        setLoading(false);

    };
    cargarNovedades();
  }, []);

  return (
    <div className="contenedor">
    {loading ? (
        <p>Cargando...</p>
    ) : (
    novedades.map(item =>
      <><Banner img={item.imagen} textoVisible="none" /><BloqueTexto
            alineacion="left"
            titulo={item.titulo}
            texto={item.cuerpo} /></>))}
    </div>
  );
};
export default Novedades;
