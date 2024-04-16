

const transferencias = () => {
  return (
    <div className="pagos">
      <div className="pagosHeader">

        <div className='card__width'>
          <p className="boveda__p">
            <span className='boveda__span'>
              Transferencias
            </span>
            Movimiento mundial de dinero,
            redefinido. Transfiera fondos sin fronteras,
            en segundos y sin comisiones.
          </p>
        </div>

        <div className="pagos__img"></div>

        <div className="header__h5pagos header__h5Flex">
          <h5 className="header__h5">Transferencias internacionales en la punta de los dedos. Mueva fondos a través de las fronteras utilizando métodos de pago locales.</h5>

          <div>
            <button className="headerButton">
              abra su cuenta sin fronteras
            </button>
          </div>
        </div>

        <div className="separador__pagos1 separador__boveda1"></div>
      </div>

      <div>
        <div className='card__width'>
          <p className="pagos__p1 boveda__p1"> <i style={{ margin: "5px" }} className="ri-checkbox-blank-circle-fill"></i> Pague a quien quiera y donde quiera. Envía USDc o EURc* al instante o transfiere fondos localmente a más de 50 países.</p>
        </div>

        <div className="boveda__noteGrid">
          <div className="pagos__noteMargin boveda__noteMargin">
            <div className='seguridad__texto'>
              <h5 style={{ color: "black", fontWeight: "500", fontSize: "18px" }} className='boveda__textoH5'>Cobertura global-local</h5>
              <p style={{ fontSize: "19px" }} className='boveda__textoP'>Envía dinero a más de 50 países utilizando tus métodos de pago locales y deja que el destinatario reciba los fondos en el suyo.</p>
            </div>

            <div className='seguridad__texto'>
              <h5 style={{ color: "black", fontWeight: "500", fontSize: "18px" }} className='boveda__textoH5'>Diseñado pensando en las economías emergentes</h5>
              <p style={{ fontSize: "19px" }} className='boveda__textoP'>Dedicamos gran parte de nuestros esfuerzos a llevar la experiencia de los pagos transfronterizos a las empresas y particulares de los mercados emergentes.</p>
            </div>

            <div className='seguridad__texto'>
              <h5 style={{ color: "black", fontWeight: "500", fontSize: "18px" }} className='boveda__textoH5'>Recargas en USDc y EURc sin problemas</h5>
              <p style={{ fontSize: "19px" }} className='boveda__textoP'>Recarga tus saldos directamente desde tu cuenta bancaria, dinero móvil o criptocarteras para empezar a enviar dinero.</p>
            </div>

          </div>

          <div className="pagos__noteImg"></div>
        </div>

        <div className="separador__pagos2 separador__boveda2"></div>

        <div>
          <div className='card__width'>
            <p className="empresa__p"> <i style={{ margin: "5px" }} className="ri-checkbox-blank-circle-fill"></i> Todo lo que deberían ser las transferencias internacionales de dinero.</p>
          </div>

          <div className="empresa__grid">

            <div className="empresa__grid1" style={{ height: "23rem" }}>
              <div className="empresa__flex">
                <div>
                  <h5 className="card__gridh51">Pagar menos por las transferencias internacionales</h5>
                  <p className="card__gridP1">Reduzca las comisiones de las transferencias internacionales entre 5 y 10 veces en comparación con las transferencias tradicionales.</p>
                </div>
                <div>
                  <h1 className="empresa__h1Card">5-10 veces más barato</h1>
                </div>
              </div>

            </div>

            <div style={{ backgroundColor: "rgb(174, 97, 37)" }} className="empresa__grid1">
              <div className="empresa__flex">
                <div>
                  <h5 style={{ color: "white" }} className="card__gridh51">Desbloquee los pagos en tiempo real</h5>
                  <p className="card__gridP1">Liquide sus pagos en USDc al instante, o en su moneda local en 24 horas</p>
                </div>
                <div>
                  <h1 style={{ color: "white", letterSpacing: "-4px" }} className="empresa__h1Card">Instantáneo</h1>
                </div>
              </div>

            </div>

            <div style={{ backgroundColor: "rgb(233, 210, 244)", height: "20rem" }} className="empresa__grid1">
              <div className="empresa__flex">
                <div>
                  <h5 className="card__gridh51">Tipos de cambio justos, siempre</h5>
                  <p className="card__gridP1">Acceda a los tipos de cambio más competitivos: diga adiós a márgenes y diferenciales poco razonables.</p>
                </div>
                <div>
                  <h1 style={{ lineHeight: "47px", letterSpacing: "-4px" }} className="empresa__h1Card">Mercado medio</h1>
                </div>
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
    </div>
  )
}

export default transferencias