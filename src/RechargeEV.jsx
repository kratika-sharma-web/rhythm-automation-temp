import { useEffect } from "react"

function RechargeEV() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <h1 className="text-center display-4 pt-5" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong className="pt-3" style={{ background: "linear-gradient(90deg, #0e8900ff, #063b00ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Recharge EV</strong>
            </h1>
            <h3 className="text-center display-6 pt-4 fw-semibold" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                Business Model
            </h3>
            <h6 className="text-center pb-3" style={{ background: "linear-gradient(90deg, #003853ff, #4f2500ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: "1.4" }}>
                We are providing EV charging facilities in both the public and private domains.
            </h6>
            <h1 className="text-center display-4 pt-4" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong className="pt-3" style={{ background: "linear-gradient(90deg, #4f2500ff, #003853ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Products / Services</strong>
            </h1>
            <div className="container mt-4 pt-3 px-5 pb-5 my-4">
                <div className="row g-5">
                    <div className="col-md-6 col-sm-12">
                        <div className="border rounded p-1" style={{ width: "100%", height: "100%" }}>
                            <div className="card rounded border-2 p-1" style={{ width: "100%", height: "100%" }}>
                                <div className="border rounded p-1 justify-content-center" style={{ width: "100%", height: "100%" }}>
                                    <div>
                                        <img src="acCharger.jpg" className="card-img-top border" alt="AC Charger" />
                                        <div className="card-body pt-5 pb-4 d-flex align-items-center justify-content-center">
                                            <div>
                                                <h5 className="card-title text-center fw-semibold pb-2">AC Charger</h5>
                                                <div className="card-text">
                                                    <ul className="fw-medium" style={{ background: "linear-gradient(90deg, #47004fff, #9300a3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.6", textAlign: "justify" }}>
                                                        <li>Power Output (7.4kW - 22KW)</li>
                                                        <li>Terra AC wallbox provide smart charging solutions</li>
                                                        <li>Simple plug in options</li>
                                                        <li>Compact in design and easy to fit</li>
                                                        <li>Ideal solutions for home and offices</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="border rounded p-1" style={{ width: "100%", height: "100%" }}>
                            <div className="card rounded border-2 p-1" style={{ width: "100%", height: "100%" }}>
                                <div className="border rounded p-1 justify-content-center" style={{ width: "100%", height: "100%" }}>
                                    <div>
                                        <img src="dcCharger.jpg" className="card-img-top border" alt="DC Charger" />
                                        <div className="card-body pt-5 pb-4 d-flex align-items-center justify-content-center">
                                            <div>
                                                <h5 className="card-title text-center fw-semibold pb-2">DC Charger</h5>
                                                <div className="card-text">
                                                    <ul className="fw-medium" style={{ background: "linear-gradient(90deg, #c70000ff, #740000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.6", textAlign: "justify" }}>
                                                        <li>Power Output (24kw - 50kW DC)</li>
                                                        <li>CCS2 gun (150V - 920V DC)</li>
                                                        <li>EMC classification B</li>
                                                        <li>DC Leakage protection</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RechargeEV