import "../../App.css"
import { useEffect, useState } from 'react';

const nav = () => {

  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenRight, setMenuOpenRight] = useState(false);


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


  return (
    <div className="nav">
      <div className="nav__grid">


        <div className={`nav__contenedor left ${loaded ? 'loaded' : ''}`} style={{ animation: `${loaded ? 'moveFromLeft' : ''} 0.5s forwards` }}>
          <button className="nav__button">
            producto
          </button>

          <button className="nav__button">
            empresa
          </button>
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

        <div className="navContenedorH1">
          <h1 className="nav__h1">due</h1>
        </div>

        <div className={`nav__contenedor right ${loaded ? 'loaded' : ''}`} style={{ animation: `${loaded ? 'moveFromRight' : ''} 0.5s forwards` }}>
          <button className="nav__button">
            iniciar sesión
          </button>

          <button className="nav__buttonGray">
            registrarse
          </button>
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

      {/* Fondo opaco y menú desplegable */}
      {menuOpen && (
        <div className={`nav__overlay ${menuOpen ? 'blur-background' : ''}`}>
          <div className="nav__dropdown">
            <button className="nav__dropdownCloseButton" onClick={closeMenu}>
              <i className="ri-close-line"></i>
            </button>
            <div className="nav__dropdownItems">
              <button className="nav__dropdownButton">Producto</button>
              <button className="nav__dropdownButton">Empresa</button>
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