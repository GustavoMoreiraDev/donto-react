import React, { Component } from 'react'
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <header className="header-one">
                <div className="main-menu">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-3 col-lg-2 d-flex col-5">
                                <Link className="navbar-brand logo" to='/'>
                                    <img src={require("../../assets/img/logo.png") } alt="donto" />
                                </Link>
                            </div>
                            <div className="col-lg-10 col-md-9 d-none d-lg-block text-lg-right">
                                <nav id="responsive-menu" className="menu-style-one">
                                    <ul className="menu-items">
                                        <li><Link to='/'>Inicio</Link></li>
                                        <li><Link to='/Page/About'>Sobre</Link></li>
                                        <li><Link to='/Page/ServiceDetails'>Voos</Link></li>
                                        <li><Link to='/Page/DentistDetails'>Pacotes</Link></li>
                                        <li><Link to='/Page/Blog'>Hotéis</Link></li>
                                        <li><Link to='/Page/Contact'>Contato</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-md-9 col-sm-7  col-6 d-block d-lg-none">
                                <nav className="navbar navbar-expand-lg text-right navbar-light mobile-nav">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobilenav">
                                        <span className="fal fa-bars" />
                                    </button>
                                </nav>
                            </div>
                            <div className="collapse navbar-collapse mobile-menu" id="mobilenav">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to='/'>Inicio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/Page/About'>Sobre</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/Page/ServiceDetails'>Voos</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/Page/DentistDetails'>Pacotes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/Page/Blog'>Hoteis</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/Page/Contact'>Contato</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>            
        )
    }
}

export default Navbar
