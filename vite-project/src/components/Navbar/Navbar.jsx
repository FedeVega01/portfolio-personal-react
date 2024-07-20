import './Navbar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';

const Navbar = () =>{
    
    const[activeLink, setActiveLink] = useState('portfolio')
    
    return(
         <nav className="navbar navbar-expand-lg navbar-light">
            
                <a className="navbar-brand" href="#"><h2 className='logo'>FDR-RC</h2></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#servicios">Services</a>
                    </li>
                    </ul>
                </div>
                <button type="button" class="btn btn-primary" href="#contacto">Contacto</button>
            
        </nav>
    )
}

export default Navbar

