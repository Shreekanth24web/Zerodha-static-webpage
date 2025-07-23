import { Link } from 'react-router-dom';
import '../styles/navbar.css'
function Navbar() {
    return (
         
            <nav className="navbar navbar-expand-lg border-bottom p-3 z-1 position-sticky top-0 Nav-bg-color">

                <div className="container px-5">
                    <Link to='/' className="navbar-brand "  >
                        <img src="media/Images/logo.svg" alt="logo_IMG_ERR"   style={{width:"25%"}} />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">  

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            <li className="nav-item">
                                <Link to='/signup' className="nav-link " aria-current="page" >
                                    Signup
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link" >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/products' className="nav-link " aria-current="page" >
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/pricing' className="nav-link" >
                                    Pricing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/support' className="nav-link" >
                                    Support
                                </Link>
                            </li>
                              
                        </ul>
                    </div>
                </div>
            </nav>
       
    );
}

export default Navbar;