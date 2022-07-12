import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LaCooperativa from "./pages/LaCooperativa";
import DescargarFactura from "./pages/DescargaFactura";
import ServicioCliente from './pages/ServicioCliente';
import Contacto from './pages/Contacto';
import HomePage from "./pages/homepage";
import NotFoundPage from "./pages/notfound";
import Cortes from "./pages/cortes";
import MedioDePago from "./pages/mediosdepago";
import Subsidios from "./pages/subsidios";
import Venta from "./pages/venta";
import Internet from "./pages/internet";
import PreguntasFrecuentes from "./pages/preguntasFrecuentes";


import "./App.css";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Nosotros from "./pages/nosotros";
import Concesion from "./pages/concesion";
import Novedades from "./pages/novedades";
import ResponsabilidadSocial from "./pages/responsabilidadSocial";

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lacooperativa" element={<LaCooperativa />} />
          <Route path="/descargafactura" element ={<DescargarFactura />} />
          <Route path="/serviciocliente" element={<ServicioCliente />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cortes-programados" element={<Cortes />} />
          <Route path="/medios-de-pago" element={<MedioDePago />} />
          <Route path="/subsidios" element={<Subsidios />} />
          <Route path="/venta-de-materiales" element={<Venta />} />
          <Route path="/one-internet" element={<Internet />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Concesion" element={<Concesion />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/ResponsabilidadSocial" element={<ResponsabilidadSocial />} />
          <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />} />
         

         
         
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
   <Footer />
      </Router>
    </div>
  );
}

export default App;
