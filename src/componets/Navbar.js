import React from "react";
import { Nav } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import logocoopecolor from "../images/logo-color.png";
import redesig from "../images/redes-ig.png";
import redesface from "../images/redes-face.png";
import redestw from "../images/redes-tw.png";
import redeswp from "../images/redes-wapp.png";



const Navbar = () => {



function ToggleMenu (){
 
    document.querySelector(".mobile-links").classList.toggle("active");
  }

window.addEventListener("scroll",()=>{
  if(window.scrollY > window.innerHeight){
    document.querySelector(".navmobile").classList.add("navbar-fixed");
  }
  if(window.scrollY < window.innerHeight){
    document.querySelector(".navmobile").classList.remove("navbar-fixed");
  }
})
  return (

   
      <div className="nav-bg">
           {/* START NAVBAR */}
        <Nav className="navdesktop" activeKey="/home">
          <Nav.Item>
            <Nav.Link className="Logo-link" href="/">
              <img
                className="logo-coope-home"
                src={logocoopecolor}
                alt="logo-coope-home"
              />
            </Nav.Link>
          </Nav.Item>
      <div className="nav-links">
      <Nav.Item>
            <Dropdown>
              <Dropdown.Toggle variant="bg-transparent" id="dropdown-basic">
                LA COOPERATIVA
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="../LaCooperativa">HISTORIA</Dropdown.Item>
                <Dropdown.Item href="../Nosotros">
                  NOSOTROS
                </Dropdown.Item>
                <Dropdown.Item href="../Concesion">
                  AREA DE CONCESION
                </Dropdown.Item>
                <Dropdown.Item href="../ResponsabilidadSocial">
                  RESPONSABILIDAD SOCIAL
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item>
            <div className="vr"></div>
            <Nav.Link href="/descargafactura">DESCARGA TU FACTURA</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <div className="vr"></div>
            <Nav.Link href="/serviciocliente">SERVICIOS AL CLIENTE</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <div className="vr"></div>
            <Nav.Link href="/novedades">NOVEDADES</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <div className="vr"></div>
            <Nav.Link href="/contacto">CONTACTO</Nav.Link>
          </Nav.Item>
      </div>
          {/* END NAVBAR */}

          {/* START NAVBAR REDES */}
        <div className="redes-sociales">
        <Nav.Item>
            <Nav.Link>
              <img
                className="logo-coope-home"
                src={redesface}
                alt="logo-coope-face"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <img
                className="logo-coope-home"
                src={redeswp}
                alt="logo-coope-ig"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <img
                className="logo-coope-home"
                src={redestw}
                alt="logo-coope-tw"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <img
                className="logo-coope-home"
                src={redesig}
                alt="logo-coope-ig"
              />
            </Nav.Link>
          </Nav.Item> </div>
        </Nav>


        {/* MOBILE */}
        <Nav className="navmobile">
        <Nav.Item className="logotoggle-container">
        <Nav.Item className="logo-container">
            <Nav.Link className="Logo-link" href="/">
              <img
                className="logo-coope-home"
                src={logocoopecolor}
                alt="logo-coope-home"
              />
            </Nav.Link>
          </Nav.Item>
        
          <Nav.Item onClick={ToggleMenu} className="ToggleMenu">
          
          <i className="fas fa-bars"></i>
    </Nav.Item>
        </Nav.Item>
    
      <div className="mobile-links">

   
    <Nav.Item className="mobile-options">
    <Nav.Item>
            <Nav.Item>
            <Dropdown>
              <Dropdown.Toggle variant="bg-transparent" id="dropdown-basic">
                LA COOPERATIVA
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="../LaCooperativa">HISTORIA</Dropdown.Item>
                <Dropdown.Item href="../Nosotros">
                  NOSOTROS
                </Dropdown.Item>
                <Dropdown.Item href="../Concesion">
                  AREA DE CONCESION
                </Dropdown.Item>
                <Dropdown.Item href="../ResponsabilidadSocial">
                  RESPONSABILIDAD SOCIAL
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item>
           
            <Nav.Link href="/descargafactura">DESCARGA TU FACTURA</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          
            <Nav.Link href="/serviciocliente">SERVICIOS AL CLIENTE</Nav.Link>
          </Nav.Item>
          <Nav.Item>
        
            <Nav.Link href="/novedades">NOVEDADES</Nav.Link>
          </Nav.Item>
          <Nav.Item>
       
            <Nav.Link href="/contacto">CONTACTO</Nav.Link>
          </Nav.Item>
            </Nav.Item>
    </Nav.Item>
    <div className="redes-sociales">
        <Nav.Item>
            <Nav.Link>
              <img
                className="logo-coope-home"
                src={redesface}
                alt="logo-coope-face"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <img
                className="logo-coope-home"
                src={redeswp}
                alt="logo-coope-ig"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <img
                className="logo-coope-home"
                src={redestw}
                alt="logo-coope-tw"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <img
                className="logo-coope-home"
                src={redesig}
                alt="logo-coope-ig"
              />
            </Nav.Link>
          </Nav.Item>
           </div>
      </div>
    
          {/* END NAVBAR */}

          {/* START NAVBAR REDES */}
       
        </Nav>
              {/* END NAVBAR REDES */}
      </div>


  );
};

export default Navbar;
