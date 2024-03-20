import { useState, useEffect } from 'react';
import Card from './card';

const section = () => {

    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="section">
            <div className="container">
                <div className="scroll-text" style={{ transform: `translateY(-${scrollPos * 0.5}px)` }}>
                    una nueva forma <br /> de <br /> <span className='scroll__span'>pagar</span> <br /> <span className='scroll__span'>enviar</span> <br /> <span className='scroll__span'>intercambio</span> <br /> <span className='scroll__span'>cobre</span>
                </div>
                <div className="spacer"></div>
            </div>

            <div className='section__cuentas'>
                <div className='cuentas__animate'>
                    <h5 className='section__cuentasH5'>Cuentas multidivisa sin fronteras</h5>
                    <p className='section__cuentasP'>
                        Acceda a dólares estadounidenses y euros digitales desde
                        cualquier lugar. Añada fondos con métodos de pago
                        locales, cambie sin problemas a tipos reales y gane
                        intereses por su capital.
                    </p>
                    <a className='section__cuentasA' href=""> Más información sobre Bóvedas <i className="ri-arrow-right-line"></i></a>
                </div>

            </div>

            <div className="contenedor">
                <h1 className="titulo">Acepte pagos <br /> en todas partes</h1>

                <div style={{ marginLeft: "1rem" }}>
                    <h5 className='section__imgH5'>Acepte pagos en todas partes</h5>
                    <p className='section__imgP'>
                        Reciba pagos en cualquier lugar: transferencias bancarias, dinero móvil, monederos digitales y mucho más en más de 50 mercados. Recibe stablecoins al instante o transfiérelos a tu moneda local. Comisiones casi nulas.
                    </p>
                    <a className='section__imgA' href=""> Más información sobre pagos <i className="ri-arrow-right-line"></i></a>
                </div>
            </div>

            <Card />

            <div className='section__seguridad'>
                <div className='seguridad__flex'>
                    <i className="seguridad__lock ri-lock-fill"></i>
                    <h1 className='seguridad__h1'>SEGURIDAD <br /> ES TODO</h1>
                    <p className='seguridad__p'>Estar tranquilo con tu dinero no debería ser un lujo. Due está construido con biometría avanzada, recuperaciones robustas y controles criptográficos, todo ello envuelto en un monedero sin custodia gestionado por ti, y solo por ti.</p>
                </div>

                <div className='seguridad__img'>
                    <div className='seguridad__icon'>
                        <i className="finger ri-fingerprint-line"></i>
                    </div>

                    <div className='seguridad__grid'>
                        <div className='seguridad__texto'>
                            <h5 className='seguridad__textoH5'>Carteras sin custodia</h5>
                            <p className='seguridad__textoP'>Creemos que el futuro es la autocustodia. Mantenga la plena propiedad de sus fondos para disfrutar de la máxima seguridad e independencia.</p>
                        </div>
                        <div className='seguridad__texto'>
                            <h5 className='seguridad__textoH5'>Autenticación moderna</h5>
                            <p className='seguridad__textoP'>Acceda a su cuenta de forma segura utilizando datos biométricos en su dispositivo de confianza.</p>
                        </div>
                        <div className='seguridad__texto'>
                            <h5 className='seguridad__textoH5'>Recuperación fácil y segura</h5>
                            <p style={{ color: "rgb(160, 159, 161)" }} className='seguridad__textoP'>Ofrecemos varias opciones de copia de seguridad para ayudarte a recuperar tu cuenta si pierdes el acceso a tus claves o dispositivo.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ margin: "5rem" }} className='seguridad__flex'>
                <h1 className='seguridad__h1'>A SU DINERO LE <br /> ENCANTARÁ</h1>
                <div>
                    <button className="headerButton">
                        abra su cuenta sin fronteras
                    </button>
                </div>
            </div>
        </div>
    )
}

export default section