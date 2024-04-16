import { NavLink } from "react-router-dom";
import "../../App.css"
import { useEffect, useState } from 'react';


const nav = () => {

  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenRight, setMenuOpenRight] = useState(false);
  const [productOpen, setProductOpen] = useState(false)
  const [showDropdownItems, setShowDropdownItems] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    // Simula una carga de página
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenuRight = () => {
    setMenuOpenRight(!menuOpenRight);
  };

  const closeMenuRight = () => {
    setMenuOpenRight(false);
  };

  const toggleProduct = () => {
    setProductOpen(!productOpen);
  };

  const closeProduct = () => {
    setProductOpen(false);
  };

  const toggleDropdownItems = () => {
    setShowDropdownItems(!showDropdownItems);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleRegistro = () => {
    setShowRegistro(!showRegistro);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      setError('Por favor, introduce tu correo electrónico.');
    } else {
      console.log('Correo electrónico:', email);
      setEmail('');
      setError('');
      setSubmitted(true);
    }
  };

  return (
    <div className="nav">
      <div className="nav__grid">


        <div className={`nav__contenedor left ${loaded ? 'loaded' : ''}`} style={{ animation: `${loaded ? 'moveFromLeft' : ''} 0.5s forwards` }}>
          {/* <NavLink to="/Producto" className="nav__button" onClick={toggleProduct}>
            producto
          </NavLink> */}
          <button className="nav__button" onClick={toggleProduct}>
            producto
          </button>

          {/* Menú de navegación */}
          {productOpen && (
            <div className={`menuProducto ${productOpen ? 'blur-background' : ''}`}>
              <button className="closeButton" onClick={toggleProduct}>
                <i className="ri-close-line"></i>
              </button>
              <NavLink to="/bovedas" className="menu__itemProduct" onClick={closeProduct}>
                bóvedas
              </NavLink>
              <NavLink to="/transferencias" className="menu__itemProduct" onClick={closeProduct}>
                transferencias
              </NavLink>
              <NavLink to="/pagos" className="menu__itemProduct" onClick={closeProduct}>
                pagos
              </NavLink>
            </div>
          )}

          <NavLink to="/Empresa" className="nav__button">
            empresa
          </NavLink>
        </div>

        {/* Botón para abrir y cerrar el menú en versión responsive */}
        {!menuOpen && (
          <div className="nav__leftResponsive">
            <button className="buttonLeftResp" onClick={toggleMenu}>
              <h4 className="h4LeftResp">=</h4>
            </button>
          </div>
        )}
        {menuOpen && (
          <div className="nav__leftResponsive">
            <button className="buttonLeftResp" onClick={closeMenu}>
              <i className="ri-close-line"></i>
            </button>
          </div>
        )}

        <NavLink to="/" className="navContenedorH1">
          <h1 className="nav__h1">due</h1>
        </NavLink>

        <div className={`nav__contenedor right ${loaded ? 'loaded' : ''}`} style={{ animation: `${loaded ? 'moveFromRight' : ''} 0.5s forwards` }}>
          <button className="nav__button" onClick={toggleLogin}>
            iniciar sesión
          </button>
          {showLogin && (
            <div className="overlaySesion">
              <div className="login__container">
                <button className="close__button" onClick={toggleLogin}>
                  <i className="ri-close-line"></i>
                </button>
                <h2 className="IniciarSesion__h2">Due</h2>
                <h2 className="IniciarSesion__h3">Iniciar sesión en su cuenta</h2>
                <form className="IniciarSesion__form">
                  <input className="IniciarSesion__input" type="text" placeholder="Usuario" />
                  <input className="IniciarSesion__input" type="password" placeholder="Contraseña" />
                  <button className="IniciarSesion__button" type="submit">Iniciar Sesión</button>
                  <button className="IniciarSesion__contraseña">¿Olvidaste tu contraseña?</button>
                </form>
                <div className="separador"></div>

                <div className="IniciarSesion__flex">
                  <h5 className="IniciarSesion__h5">¿No tienes una cuenta?</h5>
                  <NavLink className="IniciarSesion__navlink" to="/">Inscribirse</NavLink>
                </div>
              </div>
            </div>
          )}

          <button className="nav__buttonGray" onClick={toggleRegistro}>
            registrarse
          </button>
          {showRegistro && (
            <div className="overlaySesion">
              <div className="login__container">
                <button className="close__button" onClick={toggleRegistro}>
                  <i className="ri-close-line"></i>
                </button>
                <h2 className="IniciarSesion__h2">Due</h2>
                <h2 className="IniciarSesion__h3">Crea una nueva cuenta</h2>
                <form className="IniciarSesion__form" onSubmit={handleSubmit}>
                  <input
                    className="IniciarSesion__input"
                    type="text"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={handleChange}
                  />
                  <button className="IniciarSesion__button" type="submit" disabled={!email}>Empezar</button>
                </form>
                {error && <p>{error}</p>}
                {submitted && (
                  <div>
                    <p className="IniciarSesion__verification-text">
                      Verifique su dirección de correo electrónico
                    </p>
                    <p className="IniciarSesion__verificationText1">
                      Te hemos enviado un correo electrónico <strong>{email}</strong>. Abra su correo electrónico para verificar su dirección y termine de registrarse. Si no lo encuentras, revisa tu carpeta de spam o solicita un nuevo correo electrónico.
                    </p>

                    <button style={{position:"fixed", zIndex:"9999",marginLeft:"3.2rem"}} className="IniciarSesion__contraseña">Solicitar un nuevo correo electrónico</button>
                  </div>
                )}
                
                <div className="separador"></div>

                <div className="IniciarSesion__flex">
                  <h5 className="IniciarSesion__h5">¿Tienes una cuenta?</h5>
                  <NavLink className="IniciarSesion__navlink" to="/">Iniciar sesión</NavLink>
                </div>
              </div>
            </div>
          )}
        </div>


        {/* Botón para abrir y cerrar el menú derecho en versión responsive */}
        {!menuOpenRight && (
          <div className="nav__rightResponsive">
            <button className="buttonRightResp" onClick={toggleMenuRight}>
              <i className="ri-logout-box-line"></i>
            </button>
          </div>
        )}
        {menuOpenRight && (
          <div className="nav__rightResponsive">
            <button className="buttonRightResp" onClick={closeMenuRight}>
              <i className="ri-close-line"></i>
            </button>
          </div>
        )}

      </div>


      {menuOpen && (
        <div className={`nav__overlay ${menuOpen ? 'blur-background' : ''}`}>
          <div className="nav__dropdown">
            <button className="nav__dropdownCloseButton" onClick={closeMenu}>
              <i className="ri-close-line"></i>
            </button>
            <div className="nav__dropdownItems">
              <button className="nav__dropdownButton" onClick={toggleDropdownItems}>Producto</button>
              {showDropdownItems &&
                <div className="dropdownItemsProducto">
                  <NavLink to="/bovedas" className="nav__dropdownButton" style={{ backgroundColor: "rgb(164, 164, 164)" }}>
                    Bóvedas
                  </NavLink>
                  <NavLink to="/pagos" className="nav__dropdownButton" style={{ backgroundColor: "rgb(164, 164, 164)" }}>
                    Pagos
                  </NavLink>
                  <NavLink to="/transferencias" className="nav__dropdownButton" style={{ backgroundColor: "rgb(164, 164, 164)" }}>
                    Transferencias
                  </NavLink>
                </div>
              }
              <NavLink to="/Empresa" className="nav__dropdownButton">
                empresa
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {/* Fondo opaco y menú derecho desplegable */}
      {menuOpenRight && (
        <div className="nav__overlay">
          <div className="nav__dropdownRight">
            <button className="nav__dropdownCloseButton1" onClick={closeMenuRight}>
              <i className="ri-close-line"></i>
            </button>
            <div className="nav__dropdownItemsRight">
              {/* Agrega los items para el menú derecho aquí */}
              <button className="nav__dropdownButton">iniciar sesión</button>
              <button className="nav__dropdownButton">registrarse</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default nav