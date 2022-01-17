import React from 'react'
import logo from '../../assets/img/logo.webp';

const Footer = () => {
    return (
        <footer id="contact" className="container-fluid bg-dark pb-5 pt-5">
            <div className="row">
                <div data-aos="fade-right" className="d-flex-center col-md-8">
                    <img src={logo} alt="" />
                    <h3>LucaRM Developer</h3>
                    <div className="mt-2">
                        <a href="https://www.linkedin.com/in/luca-rojas-massey-a21b531a0/">
                            <i className="fab fa-linkedin me-3 ms-3"></i>
                        </a>
                        <a href="https://github.com/LucaRM95">
                            <i className="fab fa-github me-3 ms-3"></i>
                        </a>
                        <a href="https://www.facebook.com/lucajavier.rojasmassey/">
                            <i className="fab fa-facebook me-3 ms-3"></i>
                        </a>
                    </div>
                </div>
                <div className="d-flex-center col-md-4">
                    <h3>Contacto</h3>
                    <p>TEL: +54 9 11-3172-8677</p>
                    <p>EMAIL: lucasrojas95@gmail.com</p>
                    <p>DIR: Merlo, Buenos Aires, Argentina</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
