import "../../App.css";
import Nav from "./nav";
import { useEffect, useState } from 'react';
import Carousel from './carrousel';

const Header = () => {

  const [loaded, setLoaded] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = ["dinero", "más", "allá", "de", "las", "fronteras"];

  useEffect(() => {
    // Simula una carga de página
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    let timeout: number;
    if (loaded) {
      timeout = setTimeout(() => {
        setTextIndex(textIndex + 1);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [loaded, textIndex]);

  return (
    <div className='header'>
      <Nav />
      <div style={{ width: "99.6%" }} className={`app ${loaded ? 'loaded' : ''}`}>
        <h1 className="header__h1">
          {textOptions.map((word, index) => (
            <span
              key={index}
              className={`header__word ${index <= textIndex ? 'active' : ''}`}
            >
              {word}
            </span>
          ))}
        </h1>
      </div>

      <div className="header__h5Flex">
        <h5 className="header__h5">Descubra nuestra plataforma global. Impulsada <br /> por redes abiertas, descentralizadas e interoperables.</h5>

        <div>
          <button className="headerButton">
            abra su cuenta sin fronteras
          </button>
        </div>
      </div>
      <Carousel/>
    </div>
  );
}

export default Header;


