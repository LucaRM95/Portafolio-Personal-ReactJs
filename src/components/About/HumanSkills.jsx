import React from 'react';

const HumanSkills = () => {
    return (
        <section className="seccion-secundaria pb-5">
            <div className="row fondo-flot">
                <div data-aos="fade-right" className="col-auto flotantes">
                    <p>
                        "Imaginarlo, maquetarlo y programarlo"
                    </p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row padd-lat">
                    <div data-aos="fade-right" className="col-md-12 col-12">
                        <h1>Programando como profesión y hobby</h1>
                        <p>Trabajando día a día para mejorar mis habilidades, siendo siempre responsable, dedicado, autodidacta y proactivo, buscando siempre la mejor manera de crear código de manera sencilla, eficaz y reutilizable.
                        Siempre llevo con migo los valores fundamentales de un Front-End developer
                        </p>
                    </div>
                    <div className="contenedor">
                        <div data-aos="fade-right" className="contenedor__parrafos">
                            <div className="col-md-6 col-12 contenedor__parrafos--texto">
                                <p>
                                    ¡Mobile first! Una aplicación responsiva es fundamental para un proyecto web.
                                </p>
                            </div>
                            <div className="line ms-2"></div>
                        </div>
                        <div data-aos="fade-right" className="contenedor__parrafos">
                            <div className="col-md-6 contenedor__parrafos--texto">
                                <p>
                                    La interacción con la página debe ser una experiencia única, agradable e intuitiva. 
                                </p>
                            </div>
                            <div className="line ms-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HumanSkills;
