import { NavLink } from "react-router-dom";

const footer = () => {

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__containerGrid">

          {/* <div className='footer__h1Flex'>
            <h1 className='footer__h1'>due</h1>
          </div> */}
          <NavLink to="/" className='footer__h1Flex'>
            <h1 className="footer__h1">due</h1>
          </NavLink>

          <div className='footer__transform'>
            <ul style={{ listStyle: "none", margin: '0', padding: '0' }}>
              <li className='footer__liTitle'>Productos</li>
              
              <li className='footer__li'>
                <NavLink to="/bovedas" className="footer__a">
                  Bóvedas
                </NavLink>
              </li>

              <li className='footer__li'>
                <NavLink to="/pagos" className="footer__a">
                Pagos
                </NavLink>
              </li>

              <li className='footer__li'>
                <NavLink to="/transferencias" className="footer__a">
                Transferencias
                </NavLink>
              </li>
              
            </ul>
          </div>

          <div className='footer__transform'>
            <ul style={{ listStyle: "none", margin: '0', padding: '0' }}>

              <li className='footer__liTitle'>Empresa</li>
              <li className='footer__li'>
                <NavLink to="/Empresa" className="footer__a">
                  Quiénes somos
                </NavLink>
              </li>
              <li className='footer__li'>
                <NavLink to="/Empresa" className="footer__a">
                  Carreras profesionales
                </NavLink>
              </li>
              <li className='footer__li'>
                <NavLink to="/Empresa" className="footer__a">
                  Prensa
                </NavLink>
              </li>
            </ul>
          </div>

          <div className='footer__transform'>
            <ul style={{ listStyle: "none", margin: '0', padding: '0' }}>
              <li className='footer__liTitle'>Recursos</li>
              <li className='footer__li'><a className='footer__a' href="">Blog</a></li>
              <li className='footer__li'><a className='footer__a' href="">Centro de ayudas</a></li>
            </ul>
          </div>

          <div className='footer__transform'>
            <ul style={{ listStyle: "none", margin: '0', padding: '0' }}>
              <li className='footer__liTitle'>Legal</li>
              <li className='footer__li'><a className='footer__a' href="">Condiciones generales</a></li>
              <li className='footer__li'><a className='footer__a' href="">Políticas de privacidad</a></li>
              <li className='footer__li'><a className='footer__a' href="">Normativa</a></li>
            </ul>
          </div>


          <div className='footer__botones' style={{ width: "100%" }}>
            <button className='footer__btn'>
              iniciar sesión
            </button>
            <button className='footer__btn1'>
              registrarse
            </button>
          </div>
        </div>

        <div>
          <div className='footer__redSocialFlex'>
            <button className='footer__redSocial'>
              <i className="ri-twitter-fill"></i>            </button>
            <button className='footer__redSocial'>
              <i className="ri-linkedin-fill"></i>
            </button>
          </div>
        </div>

        <div className="separador"></div>

        <div className='footer__gridCopy'>
          <div className='footer__copyright'>
            <h5 className='footer__h5'>©Due Ltd 2024</h5>
          </div>

          <div>
            <h6 className='footer__h5'>Due Ltd está registrada en Argentina y Uruguay. Due Ltd es un proveedor de servicios tecnológicos, no un banco. Servicios relacionados con la criptomoneda prestados por Due Payments EOOD y su(s) socio(s). Due Payments EOOD (UIC 207457701) está registrada como proveedor de servicios de activos virtuales en la Agencia Tributaria Nacional de Argentina.</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer