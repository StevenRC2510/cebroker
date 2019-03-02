import React from 'react';
import './styles.css'


class NavBar extends React.PureComponent {

    render() {
        return (
            <nav className="navbar navbar-light bg-light navbar-expand-md fixed-top">
                <div className="container px-5">
                    <a href="#" className="navbar-brand">
                        <strong>{'Cebroker'}</strong>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu"
                        aria-expanded="false" aria-label="mainMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-md-flex justify-content-md-around" id="mainMenu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link navOption">{'Features'}</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link navOption">{'Plans'}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle navOption" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{'Organizations'}</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item">{'organization 1'}</a>
                                    <a className="dropdown-item">{'organization 2 '}</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link navOption">{'Browse Courses'}</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link navOption">{'Support'}</a>
                            </li>
                        </ul>
                        <ul className="nav nav-pills">
                            <li className="nav-item mx-1">
                                <button type="button" className="btn btn-outline-secondary">{'Sign In'}</button>
                            </li>
                            <li className="nav-item mx-1">
                                <button type="button" className="btn btn-outline-secondary">{'7 day Trial'}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;

