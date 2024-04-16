

const empresa = () => {

    return (
        <div className="empresa">
            <div className='empresaHeader'>
                <h5 className='empresa__h5'>
                    Quiénes somos
                </h5>

                <h1 className="empresa__h1">
                    <span className="empresa__span">EN DUE ESTAMOS</span>
                    <span className="empresa__span">CREANDO UN</span>
                    <span className="empresa__span">MUNDO EN EL QUE</span>  <br />
                    <span className="empresa__span"> EL DINERO</span> <br />
                    <span className="empresa__span">SEA REALMENTE</span>  <br />
                    <span className="empresa__span">GLOBAL, SIN</span>  <br />
                    <span className="empresa__span">PERMISOS</span>  <br />
                    <span className="empresa__span">ES INCLUSIVO.</span>
                </h1>
            </div>

            <div>
                <p className="empresa__parrafo">
                    <span className="empresa__parrafoSpan">
                        Creemos que el acceso justo e inclusivo al dinero debe ser un derecho universal.
                    </span> <br /> <br />
                    Desde 2022, hemos estado trabajando sin parar para permitir movimientos de dinero internacionales rápidos, accesibles y de bajo coste para empresas y particulares de todo el mundo. <br /> <br />

                    Construida sobre redes descentralizadas que aprovechan stablecoins, nuestra plataforma ofrece cuentas multidivisa, transferencias globales y adquisición de comerciantes para todos, en todas partes. Y con cuentas sin custodia, usted tiene el control total de sus activos, sin intermediarios (léase: bancos). <br /> <br />

                    Nuestra visión es un mundo en el que cualquier persona, en cualquier lugar, pueda cooperar, comerciar y compartir sin fricciones; un mundo sin fronteras.
                </p>
            </div>

            <div className="separador__empresa"></div>

            <div className='card__width'>
                <p className="empresa__p"> <i style={{ margin: "5px" }} className="ri-checkbox-blank-circle-fill"></i> Estamos redefiniendo los pagos globales para facilitar los negocios del mañana.</p>
            </div>

            <div className="empresa__grid">

                <div className="empresa__grid1">
                    <div className="empresa__flex">
                        <div>
                            <h5 className="card__gridh51">Gastos de tramitación mínimos</h5>
                            <p className="card__gridP1">Pagar menos del 1% por procesar pagos internacionales en lugar del 4-6% que cobran los procesadores tradicionales.</p>
                        </div>
                        <div>
                            <h1 className="empresa__h1Card">&lt;1%</h1>
                        </div>
                    </div>

                </div>

                <div style={{ backgroundColor: "rgb(174, 97, 37)" }} className="empresa__grid1">
                    <div className="empresa__flex">
                        <div>
                            <h5 style={{ color: "white" }} className="card__gridh51">Liquidación más rápida</h5>
                            <p className="card__gridP1">Consiga que sus pagos se liquiden instantáneamente en USDC o en moneda local en menos de 24 horas.</p>
                        </div>
                        <div>
                            <h1 style={{ color: "white", letterSpacing: "-4px" }} className="empresa__h1Card">Instantáneo</h1>
                        </div>
                    </div>

                </div>

                <div style={{ backgroundColor: "rgb(233, 210, 244)" }} className="empresa__grid1">
                    <div className="empresa__flex">
                        <div>
                            <h5 className="card__gridh51">Acceso mundial</h5>
                            <p className="card__gridP1">Admitimos métodos de pago locales en más de 50 mercados de todo el mundo.</p>
                        </div>
                        <div>
                            <h1 style={{ lineHeight: "47px", letterSpacing: "-4px" }} className="empresa__h1Card">Más de 50 mercados</h1>
                        </div>
                    </div>

                </div>
            </div>

            <div className="empresa__nosGrid">
                <div className="empresa__nos1">
                    <div>
                        <p className="empresa__nosP"><i style={{ margin: "5px" }} className="ri-checkbox-blank-circle-fill"></i> Con el respaldo de algunos de los mejores inversores e innovadores del sector.</p>
                    </div>
                    <div className="empresa__nosImg">
                        <div className="div__nosImg">
                            <div className="empresa__nosImg1"></div>
                        </div>

                        <div className="div__nosImg">
                            <div className="empresa__nosImg2"></div>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: "rgb(15, 15, 15)" }} className="empresa__nos1">
                    <div>
                        <p style={{ color: "white" }} className="empresa__nosP"><i style={{ margin: "5px" }} className="ri-checkbox-blank-circle-fill"></i> Asociado con empresas de confianza de todo el mundo que lideran la revolución de los pagos.</p>
                    </div>
                    <div className="empresa__nosImg">
                        <div className="div__nosImg">
                            <div className="empresa__nosImg3"></div>
                        </div>

                        <div className="div__nosImg">
                            <div className="empresa__nosImg4"></div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="separador__empresa1"></div>

            <div style={{ margin: "5rem" }} className='seguridad__flex'>
                <h1 className='seguridad__h1'>¿LISTO PARA <br /> UNIRTE?</h1>
                <div>
                    <button className="headerButton">
                        abra su cuenta sin fronteras
                    </button>
                </div>
            </div>
        </div>
    )
}

export default empresa