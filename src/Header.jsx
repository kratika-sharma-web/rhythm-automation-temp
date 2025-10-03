import { NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <img src="/logo.png" alt="Rhythm Automation" width={90} />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse fw-medium" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "btn btn-dark" : "nav-link"} style={{ fontSize: "0.9rem" }} aria-current="page" to="/ra-admin">Admin</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "btn btn-dark" : "nav-link"} style={{ fontSize: "0.9rem" }} aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "btn btn-dark" : "nav-link"} style={{ fontSize: "0.9rem" }} aria-current="page" to="/aboutUs">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "btn btn-dark" : "nav-link"} style={{ fontSize: "0.9rem" }} aria-current="page" to="/products">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "btn btn-dark" : "nav-link"} style={{ fontSize: "0.9rem" }} aria-current="page" to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "btn btn-dark" : "nav-link"} style={{ fontSize: "0.9rem" }} aria-current="page" to="/clients">Clients</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "btn btn-dark" : "nav-link"} style={{ fontSize: "0.9rem" }} aria-current="page" to="/careers">Careers</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "btn btn-dark me-2" : "nav-link"} style={{ fontSize: "0.9rem" }} aria-current="page" to="/contactUs">Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="btn btn-primary" style={{ fontSize: "0.9rem" }} aria-current="page" to="/rechargeEV">Recharge EV</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header