import { useNavigate } from "react-router-dom"

function Footer() {
    const navigate = useNavigate()
    const adminLinkClick = () => {
        navigate('/ra-admin')
    }
    return (
        <>
            <footer className="bg-dark text-light text-center pt-3 pb-1">
                <div className="container">
                    <p>
                        &copy; 2023 Copyright <a href="#" onClick={adminLinkClick} style={{ fontWeight: "bold", color: "inherit", textDecoration: "none" }}>@Rhythm Automation</a>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer