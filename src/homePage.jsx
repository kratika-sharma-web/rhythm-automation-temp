import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
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
                            <h1 className="fw-bold display-2" style={{ background: "linear-gradient(90deg, #d3f0ffff, #fce3cdff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Rhythm Automation</h1>
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
                            <div className="card-body text-center pb-2 justify-content-center d-flex align-items-center">
                                <h3 className="card-title pt-1">Sugar Mills</h3>
                            </div>
                            <div className="card-footer bg-white border-0 text-center">
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2 mb-3" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesSugarMills")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesPaperAndPulp.jpg" className="card-img-top" alt="Paper & Pulp" />
                            <div className="card-body text-center pb-2 justify-content-center d-flex align-items-center">
                                <h3 className="card-title pt-1">Paper & Pulp</h3>
                            </div>
                            <div className="card-footer bg-white border-0 text-center">
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2 mb-3" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesPaperAndPulp")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesMetalsAndMinerals.jpg" className="card-img-top" alt="Metals & Minerals" />
                            <div className="card-body text-center pb-2 justify-content-center d-flex align-items-center">
                                <h3 className="card-title pt-1">Metals & Minerals</h3>
                            </div>
                            <div className="card-footer bg-white border-0 text-center">
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2 mb-3" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesMetalsAndMinerals")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesCementMills.jpg" className="card-img-top" alt="Cement Mills" />
                            <div className="card-body text-center pb-2 justify-content-center d-flex align-items-center">
                                <h3 className="card-title pt-1">Cement Mills</h3>
                            </div>
                            <div className="card-footer bg-white border-0 text-center">
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2 mb-3" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesCementMills")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesSolar.jpg" className="card-img-top" alt="Solar" />
                            <div className="card-body text-center pb-2 justify-content-center d-flex align-items-center">
                                <h3 className="card-title pt-1">Solar</h3>
                            </div>
                            <div className="card-footer bg-white border-0 text-center">
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2 mb-3" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesSolar")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesWaterAndWasteWater.jpg" className="card-img-top" alt="Water & Waste Water" />
                            <div className="card-body text-center pb-2 justify-content-center d-flex align-items-center">
                                <h3 className="card-title pt-1">Water & Waste Water</h3>
                            </div>
                            <div className="card-footer bg-white border-0 text-center">
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2 mb-3" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesWaterAndWasteWater")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesMaterialHandling.jpg" className="card-img-top" alt="Material Handling" />
                            <div className="card-body text-center pb-2 justify-content-center d-flex align-items-center">
                                <h3 className="card-title pt-1">Material Handling</h3>
                            </div>
                            <div className="card-footer bg-white border-0 text-center">
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2 mb-3" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesMaterialHandling")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesPowerSector.jpg" className="card-img-top" alt="Power Sector" />
                            <div className="card-body text-center pb-2 justify-content-center d-flex align-items-center">
                                <h3 className="card-title pt-1">Power Sector</h3>
                            </div>
                            <div className="card-footer bg-white border-0 text-center">
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2 mb-3" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesPowerSector")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <img src="./servicesOthers.jpg" className="card-img-top" alt="Other Services" />
                            <div className="card-body text-center pb-2 justify-content-center d-flex align-items-center">
                                <h3 className="card-title pt-1">Other Services</h3>
                            </div>
                            <div className="card-footer bg-white border-0 text-center">
                                <button className="btn btn-secondary justify-content-center p-0 ps-3 pe-2 mb-3" style={{ width: "auto", height: "40px" }} onClick={() => setServiceSelected("servicesOthers")}>Explore <CgChevronDoubleRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container p-5 d-flex align-items-center justify-content-center w-100">
                    <button className="btn btn-info" onClick={() => { navigate('/services') }}>Know More...</button>
                </div>
            </div>
            <div className="conatiner mt-5" style={{ marginBottom: "90px", marginLeft: "5rem", marginRight: "5rem" }}>
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
            <div className="w-100 py-5" style={{ backgroundImage: "url('./backgroundVisionMission.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="container">
                    <div className="row g-4 d-flex justify-content-center align-items-center">
                        <div className="col-md-4">
                            <div className="p-4 text-white rounded shadow" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
                                <h4 className="fw-bold text-center">Vision</h4>
                                <p className="mb-0 text-center fw-medium" style={{ background: "linear-gradient(90deg, #cbfebdff, #74fe97ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>
                                    Our vision is to be the first choice of customer by providing the best products / technical solutions & excellent service support in the field of Industrial Control and Automation - One stop shop for all electrical & automation needs.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 text-white rounded shadow" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
                                <h4 className="fw-bold text-center">Mission</h4>
                                <p className="mb-0 text-center fw-medium" style={{ background: "linear-gradient(90deg, #fe9292ff, #ffc1b3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>
                                    Our mission is to provide best possible products & services to our clients which can help them to reduce their machine down time, improve productivity while guaranteeing lowest cost of ownership.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 text-white rounded shadow" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
                                <h4 className="fw-bold text-center">Quality Policy</h4>
                                <p className="mb-0 text-center fw-medium" style={{ background: "linear-gradient(90deg, #b8edffff, #718dffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>
                                    We are committed to total customer satisfaction by providing our best services all the times. We pledge to meet or exceed customer expectations which can make them delightful.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conatiner" style={{ marginTop: "5rem", marginBottom: "5rem", marginLeft: "5rem", marginRight: "5rem" }}>
                <div className="card border-2 rounded" style={{ width: "100%" }}>
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center pt-5 px-5 pb-4">
                        <strong className="fw-semibold" style={{ display: "inline-block", lineHeight: "1.6", textAlign: "justify" }}>
                            <p className="pb-3" style={{ background: "linear-gradient(90deg, #59006dff, #670000ff, #59006dff, #670000ff, #59006dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                Rhythm has a team of technically qualified professional engineers, with more vast experience in the field of Marketing, Application Engineering, Design, Project Execution, Software Development, Commissioning and Customer support. Going beyond expertise and product excellence, Rhythm's core key strength lies in its totally committed and highly motivated people across all organizational functional areas.
                            </p>
                            <p style={{ background: "linear-gradient(90deg, #59006dff, #670000ff, #59006dff, #670000ff, #59006dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                A Fully equipped training centre with ABB make of PLC, Drives and SCADA available in Noida office for customer training on ABB products.
                            </p>
                        </strong>
                    </div>
                </div>
                <div>
                    <Link to="/ra-admin">Go to Admin Login</Link>
                </div>
            </div>
        </>
    )
}

export default HomePage