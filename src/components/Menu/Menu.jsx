import React from 'react'

import "../../components/Menu/Menu.css"

import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className='container-menu'>
            <div className='row'>
                <div className='col-auto co-sm-2 d-flex flex-column justify-content-between min-vh100 menu'>
                    <div>
                        <div className='text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline'>
                        </div>
                        <hr className='text-white d-none d-sm-block'></hr>
                        <ul className="nav nav-pills flex-column" id='parentM'>
                            <li className="nav-item text-white my-1">
                                <Link to="/mainPage" className="nav-link " aria-current="page">
                                    <i className='bi bi-cash-coin'></i>
                                    <span className='ms-2 text-white'>Orders</span>
                                </Link>
                            </li>
                            <li className="nav-item text-white my-1">
                                <Link to = "" className="nav-link " aria-current="page">
                                    <i className='bi bi-shop'></i>
                                    <span className='ms-2 text-white'>Prescriptions</span>
                                </Link>
                            </li>
                            <li className="nav-item text-white my-1">
                                <Link to = "" className="nav-link " aria-current="page">
                                    <i className='bi bi-wallet2'></i>
                                    <span className='ms-2 text-white'>Inventory</span>
                                </Link>
                            </li>
                            <li className="nav-item text-white my-1">
                                <Link to = "" className="nav-link " aria-current="page">
                                    <i className='bi bi-wallet2'></i>
                                    <span className='ms-2 text-white'>Profile</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='button'>
                        <Link to = "/" className="btn btn-primary text-white" type="button" id="triggerId" aria-haspopup="true"
                                aria-expanded="false">
                                    <i className='bi bi-person fs-4'></i>
                                    <span className='fs-4 ms-3'>Log out </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;