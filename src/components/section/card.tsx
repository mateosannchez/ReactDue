import { useState } from 'react';

const card = () => {

    return (
        <div className="card">
            <div className='card__width'>
                <p className="card__p"> <i style={{ margin: "5px" }} className="ri-checkbox-blank-circle-fill"></i> Independientemente de quién sea usted o de cuál sea su negocio, Due se ha creado pensando en todos. Desde empresas globales hasta cafeterías locales, tenemos todo lo que necesitas.</p>
            </div>

            <div className="card__grid">

                <div className="card__grid1">
                    <div className="card__gridInfo">
                        <div className="card__info" style={{ margin: "10px" }}>
                            <h5 className="card__gridh5">Comercio mundial</h5>
                            <p className="card__gridP">Habilite métodos de pago locales para sus clientes en el extranjero y reduzca los gastos de procesamiento entre 5 y 10 veces.</p>
                        </div>
                        <div className="card__icon">
                            <i className="card__icon1 ri-shopping-bag-fill"></i>
                        </div>
                    </div>
                </div>

                <div className="card__grid2">
                    <div className="card__gridInfo">
                        <div className="card__info" style={{ margin: "10px" }}>
                            <h5 className="card__gridh5">Viajes y hostelería</h5>
                            <p className="card__gridP">Permita que sus viajeros internacionales paguen sin problemas, en línea o en un TPV. Para hoteles, restaurantes, alquileres vacacionales y mucho más.</p>
                        </div>
                        <div className="card__icon">
                            <i className="card__icon2 ri-suitcase-2-fill"></i>
                        </div>
                    </div>
                </div>

                <div className="card__grid3">
                    <div className="card__gridInfo">
                        <div className="card__info" style={{ margin: "10px" }}>
                            <h5 className="card__gridh51">Mercados y contratistas</h5>
                            <p className="card__gridP1">Acepte pagos de contratistas / participantes en el mercado de cualquier parte del mundo. Pagos masivos próximamente.</p>
                        </div>
                        <div className="card__icon">
                            <i className="card__icon3 ri-user-2-fill"></i>
                        </div>
                    </div>
                </div>

                <div className="card__grid4">
                    <div className="card__gridInfo">
                        <div className="card__info" style={{ margin: "10px" }}>
                            <h5 className="card__gridh52">Juegos y entretenimiento</h5>
                            <p className="card__gridP1">Acepte pagos de usuarios de todo el mundo. Liquide al instante y manténgase a salvo del fraude.</p>
                        </div>
                        <div className="card__icon">
                            <i className="card__icon4 ri-gamepad-fill"></i>
                        </div>
                    </div>
                </div>

                <div className="card__grid5">
                    <div className="card__gridInfo">
                        <div className="card__info" style={{ margin: "10px" }}>
                            <h5 className="card__gridh5">Flujos de tesorería</h5>
                            <p className="card__gridP">Mueva dinero entre entidades de su organización, ingrese capital de inversores extranjeros o repatríe fondos a sus cuentas nacionales.</p>
                        </div>
                        <div className="card__icon">
                            <i className="card__icon5 ri-bank-fill"></i>
                        </div>
                    </div>
                </div>

                <div className="card__grid6">
                    <div className="card__gridInfo">
                        <div className="card__info" style={{ margin: "10px" }}>
                            <h5 className="card__gridh52">Importación y exportación (comercio internacional)</h5>
                            <p className="card__gridP">Pague o reciba pagos de sus socios internacionales al instante, sin comisiones excesivas.</p>
                        </div>
                        <div className="card__icon">
                            <i className="card__icon6 ri-ship-fill"></i>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default card