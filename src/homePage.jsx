import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CgChevronDoubleRight } from "react-icons/cg"
import "./HomePage.css"

function HomePage() {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [serviceSelected, setServiceSelected] = useState("")
    useEffect(() => {
        localStorage.setItem("serviceSelected", serviceSelected)
        if (serviceSelected) {
            navigate('/services')
        }
    }, [serviceSelected])
    return (
        <>
            <div className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" style={{ height: "100vh" }}>
                    <div className="carousel-item active">
                        <img src="./homePageBackgroundTop.png" className="d-block w-100" alt="" style={{ objectFit: "cover", height: "100vh", filter: "brightness(80%)" }} />
                        <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ top: "0", bottom: "0" }}>
                            <h1 className="fw-bold display-2" style={{ background: "linear-gradient(90deg, #c110e8ff, #f30606ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Rhythm Automation</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conatiner px-5" style={{ marginTop: "-60px", marginBottom: "100px", position: "relative", zIndex: 10 }}>
                <div className="card rounded shadow border-0" style={{ width: "100%" }}>
                    <div className="text-center display-5 p-5" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px" }}>
                        <strong style={{ background: "linear-gradient(90deg, #ec7c1cff, #008dd2ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>
                            <i>Empower your business with cutting-edge automation solutions that drive efficiency, productivity, and growth.</i>
                        </strong>
                    </div>
                </div>
            </div>
            <h1 className="text-center display-4" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong style={{ background: "linear-gradient(90deg, #003853ff, #4f2500ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>What does Rhythm Automation do?</strong>
            </h1>
            <div className="container pt-5">
                <div className="row g-5 justify-content-center">
                    <div className="col-md-6 col-sm-12">
                        <div className="card h-100 shadow-sm" style={{ width: "100%" }}>
                            <div className="card-header bg-dark text-light fw-bold text-center">
                                Complete Project Designing & Execution
                            </div>
                            <div className="card-body" style={{ textAlign: "justify" }}>
                                Offers services in preparing Layout Drawings of Electrical Rooms, Operator Cabins and floor plans considering the Process Requirements, supervision of erection, cabling and commissioning of Drives and PLC / MMI Automation & Electrics including MCC's, Operator Stations.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="card h-100 shadow-sm" style={{ width: "100%" }}>
                            <div className="card-header fw-bold text-center">
                                Upgradation / Retrofit Solutions
                            </div>
                            <div className="card-body bg-dark text-light rounded-bottom" style={{ textAlign: "justify" }}>
                                Provides solutions for problems in existing systems with comprehensive knowledge and experience of the latest trend in Automation such as Modbus, Ethernet, Profibus, profinet, OPC etc. It also develops custom built SCADA and reporting packages based on Visual Basic and OPC clients which can work with standard products as well as other existing systems in plant.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="card h-100 shadow-sm" style={{ width: "100%" }}>
                            <div className="card-header fw-bold text-center">
                                Panels
                            </div>
                            <div className="card-body bg-dark text-light rounded-bottom" style={{ textAlign: "justify" }}>
                                Offers services for Motor Control Centres, Power Control Centres, LT Panel, APFC Panels, Control Panels, Fire Alarm Panels, Type tested assemblies etc.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="card h-100 shadow-sm" style={{ width: "100%" }}>
                            <div className="card-header bg-dark text-light fw-bold text-center">
                                VFD & PLC Panels
                            </div>
                            <div className="card-body" style={{ textAlign: "justify" }}>
                                Provides complete wired panels for stand alone applications.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="card h-100 shadow-sm" style={{ width: "100%" }}>
                            <div className="card-header bg-dark text-light fw-bold text-center">
                                Product Selling
                            </div>
                            <div className="card-body" style={{ textAlign: "justify" }}>
                                Maintains off-shelf availability of products broadly comprising of PLCs, HMI, AC Drive, Soft Starters, Enclosures, Panel ACs, Cabinets, connectors, E'net switches, wires & cables, Sensors etc.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="card h-100 shadow-sm" style={{ width: "100%" }}>
                            <div className="card-header fw-bold text-center">
                                After Sales Services
                            </div>
                            <div className="card-body bg-dark text-light rounded-bottom" style={{ textAlign: "justify" }}>
                                Provides product repair / AMCs / Service support as and when needed.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conatiner border rounded p-1" style={{ marginTop: "100px", marginBottom: "100px", marginLeft: "5rem", marginRight: "5rem" }}>
                <div className="card rounded border-2 p-1" style={{ width: "100%" }}>
                    <div className="border rounded d-flex flex-column flex-md-row align-items-center justify-content-center display-5 p-5" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px" }}>
                        <strong style={{ background: "linear-gradient(90deg, #0976adff, #b1580aff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4", textAlign: "center" }}>
                            Committed to Keep Your Satisfaction as Top Priority and Take Your Requirement as Our Target
                        </strong>
                    </div>
                </div>
            </div>
            <h1 className="text-center display-4" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong style={{ background: "linear-gradient(90deg, #4f2500ff, #003853ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Our Services</strong>
            </h1>
            <div className="container mt-5 px-5">
                <div className="row g-5 justify-content-center">
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesSugarMills.jpg" className="card-img-top" alt="Sugar Mills" />
                            <div className="card-body text-center pb-4">
                                <h3 className="card-title pt-1 pb-3">Sugar Mills</h3>
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesSugarMills")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesPaperAndPulp.jpg" className="card-img-top" alt="Paper & Pulp" />
                            <div className="card-body text-center pb-4">
                                <h3 className="card-title pt-1 pb-3">Paper & Pulp</h3>
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesPaperAndPulp")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesMetalsAndMinerals.jpg" className="card-img-top" alt="Metals & Minerals" />
                            <div className="card-body text-center pb-4">
                                <h3 className="card-title pt-1 pb-3">Metals & Minerals</h3>
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesMetalsAndMinerals")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesCementMills.jpg" className="card-img-top" alt="Cement Mills" />
                            <div className="card-body text-center pb-4">
                                <h3 className="card-title pt-1 pb-3">Cement Mills</h3>
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesCementMills")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesSolar.jpg" className="card-img-top" alt="Solar" />
                            <div className="card-body text-center pb-4">
                                <h3 className="card-title pt-1 pb-3">Solar</h3>
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesSolar")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesWaterAndWasteWater.jpg" className="card-img-top" alt="Water & Waste Water" />
                            <div className="card-body text-center pb-4">
                                <h3 className="card-title pt-1 pb-3">Water & Waste Water</h3>
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesWaterAndWasteWater")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesMaterialHandling.jpg" className="card-img-top" alt="Material Handling" />
                            <div className="card-body text-center pb-4">
                                <h3 className="card-title pt-1 pb-3">Material Handling</h3>
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesMaterialHandling")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesPowerSector.jpg" className="card-img-top" alt="Power Sector" />
                            <div className="card-body text-center pb-4">
                                <h3 className="card-title pt-1 pb-3">Power Sector</h3>
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesPowerSector")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesOthers.jpg" className="card-img-top" alt="Other Services" />
                            <div className="card-body text-center pb-4">
                                <h3 className="card-title pt-1 pb-3">Other Services</h3>
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesOthers")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container p-5 d-flex align-items-center justify-content-center w-100">
                    <button className="btn btn-info" onClick={() => { navigate('/services') }}>Know More...</button>
                </div>
            </div>
            <div className="conatiner mt-5" style={{ marginBottom: "100px", marginLeft: "5rem", marginRight: "5rem" }}>
                <div className="card rounded" style={{ width: "100%" }}>
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center display-5 p-5" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", gap: "10px" }}>
                        <img src="./quoteIcon.png" className="quote-img-left" />
                        <strong style={{ background: "linear-gradient(90deg, #b1580aff, #0976adff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4", textAlign: "center" }}>
                            We always prioritize customer satisfaction...
                        </strong>
                        <img src="./quoteIconInverted.png" className="quote-img-right" />
                    </div>
                </div>
            </div>
            <h1 className="text-center display-4" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong style={{ background: "linear-gradient(90deg, #003853ff, #4f2500ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Some of our Valuable Clients</strong>
            </h1>
            <div className="container my-5 px-5 pb-5">
                <div className="row g-5 justify-content-center">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./cranex.png" className="p-4" style={{ width: "100%" }} alt="Cranex Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #47004fff, #9300a3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Cranex Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./moon.png" className="p-4" style={{ width: "100%" }} alt="Moon Beverages Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #0f9400ff, #074300ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Moon Beverages Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./soma.png" className="p-4" style={{ width: "100%" }} alt="Soma Power Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #740000ff, #c70000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Soma Power Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./triveni.png" className="p-4" style={{ width: "100%" }} alt="Triveni Engineering & Industries Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #000ce9ff, #00067dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Triveni Engineering & Industries Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./uttamnew.png" className="p-4" style={{ width: "100%" }} alt="Uttam Sugar Mills Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #47004fff, #9300a3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Uttam Sugar Mills Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./vedanta.png" className="p-4" style={{ width: "100%" }} alt="Vedanta Resources Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #0f9400ff, #074300ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Vedanta Resources Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./mrl.png" className="p-4" style={{ width: "100%" }} alt="MRL Tyres" />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #740000ff, #c70000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">MRL Tyres</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./punj.png" className="p-4" style={{ width: "100%" }} alt="Pnuj LLoyd Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #000ce9ff, #00067dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Pnuj LLoyd Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./rana.png" className="p-4" style={{ width: "100%" }} alt="Rana Sugars Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #47004fff, #9300a3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Rana Sugars Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./ruby.png" className="p-4" style={{ width: "100%" }} alt="Ruby International Pvt. Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #0f9400ff, #074300ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Ruby International Pvt. Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./sandvik.png" className="p-4" style={{ width: "100%" }} alt="Sandvik Mining and Rock Solutions" />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #740000ff, #c70000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Sandvik Mining and Rock Solutions</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./diwan.png" className="p-4" style={{ width: "100%" }} alt="Diwan Sugars Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #000ce9ff, #00067dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Diwan Sugars Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./jackson.png" className="p-4" style={{ width: "100%" }} alt="Jackson Group" />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #47004fff, #9300a3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Jackson Group</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./maruti.png" className="p-4" style={{ width: "100%" }} alt="Maruti Cements Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #0f9400ff, #074300ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Maruti Cements Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./mawana.png" className="p-4" style={{ width: "100%" }} alt="Mawana Sugars Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #740000ff, #c70000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Mawana Sugars Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./acme.png" className="p-4" style={{ width: "100%" }} alt="Acme Solar Holdings Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #000ce9ff, #00067dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Acme Solar Holdings Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./amba.png" className="p-4" style={{ width: "100%" }} alt="Amba Group" />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #47004fff, #9300a3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Amba Group</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./anupam.png" className="p-4" style={{ width: "100%" }} alt="ANUPAM-MHI Industries Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #0f9400ff, #074300ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">ANUPAM-MHI Industries Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./bhushan.png" className="p-4" style={{ width: "100%" }} alt="Bhushan Power & Steel Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #740000ff, #c70000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Bhushan Power & Steel Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./cf.png" className="p-4" style={{ width: "100%" }} alt="Ceasefire Pvt. Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #000ce9ff, #00067dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Ceasefire Pvt. Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./birla.png" className="p-4" style={{ width: "100%" }} alt="Birla White Cement" />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #47004fff, #9300a3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Birla White Cement</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./jk.jpg" className="p-4" style={{ width: "100%" }} alt="JK Tyre & Industries Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #0f9400ff, #074300ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">JK Tyre & Industries Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./tata.png" className="p-4" style={{ width: "100%" }} alt="Tata Steel Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #740000ff, #c70000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Tata Steel Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./cocacola.jpg" className="p-4" style={{ width: "100%" }} alt="Coca-Cola India Pvt. Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #000ce9ff, #00067dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Coca-Cola India Pvt. Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./jindal.png" className="p-4" style={{ width: "100%" }} alt="Jindal Steel & Power Ltd." />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #47004fff, #9300a3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">Jindal Steel & Power Ltd.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./birlasugar.png" className="p-4" style={{ width: "100%" }} alt="The K.K. Birla Group" />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #0f9400ff, #074300ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">The K.K. Birla Group</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card rounded border-0 shadow d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                <img src="./ntpc.jpg" className="p-4" style={{ width: "100%" }} alt="National Thermal Power Corporation" />
                            </div>
                            <div className="card-footer bg-white border-0 text-center px-2" style={{ background: "linear-gradient(90deg, #740000ff, #c70000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4"}}>
                                <h6 className="mb-2 fs-6 fw-semibold">National Thermal Power Corporation</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 py-5" style={{ backgroundImage: "url('./backgroundVisionMission.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="container">
                    <div className="row g-4 d-flex justify-content-center align-items-center">
                        <div className="col-md-4">
                            <div className="p-4 text-white rounded shadow" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
                                <h4 className="fw-bold text-center">Vision</h4>
                                <p className="mb-0 text-center fw-medium" style={{ background: "linear-gradient(90deg, #cbfebdff, #74fe97ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>
                                    Our vision is to be the first choice of customer by providing the best products / technical solutions & excellent service support in the field of Industrial Control and Automation - One stop shop for all electrical & automation needs
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 text-white rounded shadow" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
                                <h4 className="fw-bold text-center">Mission</h4>
                                <p className="mb-0 text-center fw-medium" style={{ background: "linear-gradient(90deg, #fe9292ff, #ffc1b3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>
                                    Our mission is to provide best possible products & services to our clients which can help them to reduce their machine down time, improve productivity while guaranteeing lowest cost of ownership
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 text-white rounded shadow" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
                                <h4 className="fw-bold text-center">Quality Policy</h4>
                                <p className="mb-0 text-center fw-medium" style={{ background: "linear-gradient(90deg, #b8edffff, #718dffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>
                                    We are committed to total customer satisfaction by providing our best services all the times. We pledge to meet or exceed customer expectations which can make them delightful
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage