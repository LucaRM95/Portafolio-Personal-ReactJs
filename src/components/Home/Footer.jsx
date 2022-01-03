import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='container-fluid bg-dark '>
            <div className="row">
                <div className="networks col-md-4">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/luca-rojas-massey-a21b531a0/">
                                <i className="fab fa-linkedin me-2"></i>
                                Luca Rojas Massey
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="networks col-md-4">
                    <ul>
                        <li>
                            <a href="https://github.com/LucaRM95">
                                <i className="fab fa-github-square me-2"></i>
                                LucaRM95
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="networks col-md-4">
                    <ul>
                        <li>
                            <Link to="#">
                                <i className="fas fa-envelope-square me-2"></i>
                                Lucasrojas95@gmail.com 
                            </Link>
                        </li>
                    </ul>
                </div>        
                <div className="developed col-md-12">
                    <div className="d-flex justify-content-center">
                        <strong>Desarrollado por LucaRM&copy;</strong>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
