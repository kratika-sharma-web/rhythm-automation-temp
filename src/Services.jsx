import { useEffect, useState } from "react"

function Services() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [serviceSelected, setServiceSelected] = useState("")
    useEffect(() => {
        const storedServiceSelected = localStorage.getItem("serviceSelected")
        if (storedServiceSelected) {
            setServiceSelected(storedServiceSelected)
        }
    }, [])
    useEffect(() => {
        if (serviceSelected) {
            const ele = document.getElementById(serviceSelected)
            if (ele) {
                ele.setAttribute("tabindex", "-1")
                ele.scrollIntoView({ behavior: "smooth" })
                ele.focus()
            }
            localStorage.removeItem("serviceSelected")
            setServiceSelected("")
        }
    }, [serviceSelected])
    return (
        <>
            <h1 className="text-center display-4 py-5" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong className="pt-3" style={{ background: "linear-gradient(90deg, #4f2500ff, #003853ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Our Services</strong>
            </h1>
            <div className="w-100 bg-dark py-5" id="servicesSugarMills">
                <div className="container my-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6 col-sm-12 text-center">
                            <img src="./servicesSugarMills.jpg" alt="Sugar Mills" className="img-fluid rounded-circle shadow" style={{ maxHeight: "400px", width: "100%" }} />
                        </div>
                        <div className="col-md-6 col-sm-12 text-light ps-5">
                            <h2 className="fw-bold mb-4" style={{ background: "linear-gradient(90deg, #f7c3b7ff, #ffa5a5ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Sugar Mills</h2>
                            <ul className="fs-6 fw-normal" style={{ lineHeight: "1.8" }}>
                                <li>Milling Application</li>
                                <li>Centrifugal Machines</li>
                                <li>Auto Cane Feeding Systems</li>
                                <li>Plant Automation</li>
                                <li>Boiler Automation</li>
                                <li>PAN Automation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 bg-light py-5" id="servicesPaperAndPulp">
                <div className="container my-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6 col-sm-12 text-dark pe-5" style={{ textAlign: "" }}>
                            <h2 className="fw-bold mb-4" style={{ background: "linear-gradient(90deg, #006d1bff, #6b8c61ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Paper & Pulp</h2>
                            <ul className="fs-6 fw-normal" style={{ lineHeight: "1.8" }}>
                                <li>Sectional Drives</li>
                                <li>Rewinder Solutions</li>
                                <li>Boiler Automation</li>
                                <li>Auxiliary Drive Systems</li>
                                <li>Automation for A-4 Size Cutting Machines</li>
                                <li>Drives for Pump & Fan</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 text-center">
                            <img src="./servicesPaperAndPulp.jpg" alt="Paper & Pulp" className="img-fluid rounded-circle shadow" style={{ maxHeight: "400px", width: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 bg-dark py-5" id="servicesMetalsAndMinerals">
                <div className="container my-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6 col-sm-12 text-center">
                            <img src="./servicesMetalsAndMinerals.jpg" alt="Metals & Minerals" className="img-fluid rounded-circle shadow" style={{ maxHeight: "400px", width: "100%" }} />
                        </div>
                        <div className="col-md-6 col-sm-12 text-light ps-5">
                            <h2 className="fw-bold mb-4" style={{ background: "linear-gradient(90deg, #fff8b8ff, #fffd73ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Metals & Minerals</h2>
                            <ul className="fs-6 fw-normal" style={{ lineHeight: "1.8" }}>
                                <li>Sponge Iron Plants</li>
                                <li>Wire / Bar Rod Plants</li>
                                <li>Re-Heating Furnaces</li>
                                <li>Cold Rolling Mills / Skin Pass Mills</li>
                                <li>Sheet Metals : Pickling Lines, Galvanizing Lines, Cut to Length Lines, Slitting Lines, Annealing Lines</li>
                                <li>Tube Mills</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 bg-light py-5" id="servicesCementMills">
                <div className="container my-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6 col-sm-12 text-dark pe-5" style={{ textAlign: "" }}>
                            <h2 className="fw-bold mb-4" style={{ background: "linear-gradient(90deg, #9100c1ff, #cd3efdff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Cement Mills</h2>
                            <ul className="fs-6 fw-normal" style={{ lineHeight: "1.8" }}>
                                <li>Solutions for Crushing & Querying Down Hill Conveyors</li>
                                <li>Drives & Automation for Raw Mills</li>
                                <li>AC / DC Drives for Kiln Applications</li>
                                <li>Drives & Automation for Grate Coolers</li>
                                <li>Drives & Automation for Packing Plants</li>
                                <li>Motor Control Centers</li>
                                <li>LT Panel</li>
                                <li>APFC Panels</li>
                                <li>Plant SCADA Systems</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 text-center">
                            <img src="./servicesCementMills.jpg" alt="Cement Mills" className="img-fluid rounded-circle shadow" style={{ maxHeight: "400px", width: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 bg-dark py-5" id="servicesSolar">
                <div className="container my-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6 col-sm-12 text-center">
                            <img src="./servicesSolar.jpg" alt="Solar" className="img-fluid rounded-circle shadow" style={{ maxHeight: "400px", width: "100%" }} />
                        </div>
                        <div className="col-md-6 col-sm-12 text-light ps-5">
                            <h2 className="fw-bold mb-4" style={{ background: "linear-gradient(90deg, #c4f2eeff, #83f8eeff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Solar</h2>
                            <ul className="fs-6 fw-normal" style={{ lineHeight: "1.8" }}>
                                <li>Central SCADA System</li>
                                <li>Junction Boxes</li>
                                <li>SMB Boxes</li>
                                <li>Inverters</li>
                                <li>Transformers</li>
                                <li>Panels</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 bg-light py-5" id="servicesWaterAndWasteWater">
                <div className="container my-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6 col-sm-12 text-dark pe-5" style={{ textAlign: "" }}>
                            <h2 className="fw-bold mb-4" style={{ background: "linear-gradient(90deg, #c33400ff, #f56e3dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Water & Waste Water</h2>
                            <ul className="fs-6 fw-normal" style={{ lineHeight: "1.8" }}>
                                <li>SCADA Based Automation System for ETP Plant</li>
                                <li>Automation System for Biological Water Treatment</li>
                                <li>GPRS Based Monitoring System Tube Well and Pumping Station</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 text-center">
                            <img src="./servicesWaterAndWasteWater.jpg" alt="Water & Waste Water" className="img-fluid rounded-circle shadow" style={{ maxHeight: "400px", width: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 bg-dark py-5" id="servicesMaterialHandling">
                <div className="container my-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6 col-sm-12 text-center">
                            <img src="./servicesMaterialHandling.jpg" alt="Material Handling" className="img-fluid rounded-circle shadow" style={{ maxHeight: "400px", width: "100%" }} />
                        </div>
                        <div className="col-md-6 col-sm-12 text-light ps-5">
                            <h2 className="fw-bold mb-4" style={{ background: "linear-gradient(90deg, #f0bbe6ff, #ed82daff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Material Handling</h2>
                            <ul className="fs-6 fw-normal" style={{ lineHeight: "1.8" }}>
                                <li>Stackers Reclaimers</li>
                                <li>Wagon Tipplers</li>
                                <li>Conveying Systems</li>
                                <li>Down Hill Conveyors</li>
                                <li>OH Cranes</li>
                                <li>Grab Bucket Cranes</li>
                                <li>Level Luffing Cranes on Ports</li>
                                <li>Winch</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 bg-light py-5" id="servicesPowerSector">
                <div className="container my-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6 col-sm-12 text-dark pe-5" style={{ textAlign: "" }}>
                            <h2 className="fw-bold mb-4" style={{ background: "linear-gradient(90deg, #002ee8ff, #6984ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Power Sector</h2>
                            <ul className="fs-6 fw-normal" style={{ lineHeight: "1.8" }}>
                                <li>Automation for Ash Handling Plants</li>
                                <li>Soot Blower Control Systems</li>
                                <li>Drives for ID / FD / SA / BFW Pumps</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 text-center">
                            <img src="./servicesPowerSector.jpg" alt="Power Sector" className="img-fluid rounded-circle shadow" style={{ maxHeight: "400px", width: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 bg-dark py-5" id="servicesOthers">
                <div className="container my-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6 col-sm-12 text-center">
                            <img src="./servicesOthers.jpg" alt="Other Services" className="img-fluid rounded-circle shadow" style={{ maxHeight: "400px", width: "100%" }} />
                        </div>
                        <div className="col-md-6 col-sm-12 text-light ps-5">
                            <h2 className="fw-bold mb-4" style={{ background: "linear-gradient(90deg, #bbf2c2ff, #80ff8fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Other Services</h2>
                            <ul className="fs-6 fw-normal" style={{ lineHeight: "1.8" }}>
                                <li>Bottle Filler Lines for Beverages Plants</li>
                                <li>VFD for Conveyors</li>
                                <li>Drives & Automation for Packing Plants</li>
                                <li>Motor Control Centres</li>
                                <li>Power Control Centres</li>
                                <li>LT Panel</li>
                                <li>APFC Panels</li>
                                <li>Control Panels</li>
                                <li>Fire Alarm Panels</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services