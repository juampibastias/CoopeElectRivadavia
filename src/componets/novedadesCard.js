import React, { useState, useEffect } from "react";
import CardItem from "./elements/cards";
import axios from "axios";

const NovedadesCards = () => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/novedades");
      setNovedades(response.data);
      setLoading(false);
    };
    cargarNovedades();
  }, [0]);

  return (
    <div id="card-novedades">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        novedades.map((item) => (
          <CardItem title={item.titulo} img={item.imagen} texto={item.cuerpo} />
        ))
      )}
    </div>
  );
};
export default NovedadesCards;
