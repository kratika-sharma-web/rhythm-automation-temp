import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function DashboardHeader() {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("adminToken")
        localStorage.removeItem("adminUsername")
        navigate('/ra-admin')
    }
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <img src="/logo.png" alt="Rhythm Automation" width={90} />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse fw-medium" style={{ fontSize: "0.9rem" }} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/ra-admin-dashboard">Dashboard</NavLink>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default DashboardHeader