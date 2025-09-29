import { useEffect } from "react"

function Products() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <h1 className="text-center display-4 pt-5" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong className="pt-3" style={{ background: "linear-gradient(90deg, #003853ff, #4f2500ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Our Products</strong>
            </h1>
            <div className="container mt-5 px-5">
                <div className="card h-100 shadow border-0" style={{ width: "100%", borderRadius: "25px", overflow: "hidden", marginBottom: "5rem" }}>
                    <div className="row g-0" style={{ minHeight: "100%" }}>
                        <div className="col-md-6">
                            <img src="./productsElectrical.jpg" className="img-fluid h-100" alt="Electrical" style={{ objectFit: "cover", borderRadius: "0rem" }} />
                        </div>
                        <div className="col-md-6 d-flex align-items-center ps-5 pe-3 py-3" style={{ minHeight: "100%", display: "flex" }}>
                            <div>
                                <h3 className="card-title pb-3">Electrical</h3>
                                <ul className="fw-medium" style={{ background: "linear-gradient(90deg, #4f2500ff, #003853ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>
                                    <li>Power Control Center (PCC)</li>
                                    <li>Motor Control Center (MCC)</li>
                                    <li>Variable Frequency Drive (VFD)</li>
                                    <li>DC Drive</li>
                                    <li>Automatic Power Factor Controllers (APFC)</li>
                                    <li>Automatic Voltage Regulator (AVR)</li>
                                    <li>GOVERNOR</li>
                                    <li>Radio Management Panel (RMP)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card h-100 shadow border-0" style={{ width: "100%", borderRadius: "25px", overflow: "hidden", marginTop: "5rem", marginBottom: "5rem" }}>
                    <div className="row g-0" style={{ minHeight: "100%" }}>
                        <div className="col-md-6 d-flex align-items-center ps-5 pe-4 py-3" style={{ minHeight: "100%", display: "flex" }}>
                            <div>
                                <h3 className="card-title pb-3">Automation</h3>
                                <ul className="fw-medium" style={{ background: "linear-gradient(90deg, #003853ff, #4f2500ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>
                                    <li>Programmable Logic Controller (PLC)</li>
                                    <li>Distributed Control System (DCS)</li>
                                    <li>Remote Terminal Unit (RTU)</li>
                                    <li>Telemetry</li>
                                    <li>Networking</li>
                                    <li>GPRS Routers</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="./productsAutomation.jpeg" className="img-fluid h-100" alt="Automation" style={{ objectFit: "cover", borderRadius: "0rem" }} />
                        </div>
                    </div>
                </div>
                <div className="card h-100 shadow border-0" style={{ width: "100%", borderRadius: "25px", overflow: "hidden", marginTop: "5rem", marginBottom: "5rem" }}>
                    <div className="row g-0" style={{ minHeight: "100%" }}>
                        <div className="col-md-6">
                            <img src="./productsInstrumentation.jpg" className="img-fluid h-100" alt="Instrumentation" style={{ objectFit: "cover", borderRadius: "0rem" }} />
                        </div>
                        <div className="col-md-6 d-flex align-items-center ps-5 pe-3 py-3" style={{ minHeight: "100%", display: "flex" }}>
                            <div>
                                <h3 className="card-title pb-3">Instrumentation</h3>
                                <ul className="fw-medium" style={{ background: "linear-gradient(90deg, #4f2500ff, #003853ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>
                                    <li>Resistance Temperature Detectors (RTD)</li>
                                    <li>Differential Pressure Translator (DPT)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products