import { useEffect, useState } from "react"

function Careers() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [careerName, setCareerName] = useState("")
    const [careerEmail, setCareerEmail] = useState("")
    const [careerMessage, setCareerMessage] = useState("")
    const handleCareerSubmit = () => { }
    return (
        <>
            <h1 className="text-center display-4 pt-5" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong className="pt-3" style={{ background: "linear-gradient(90deg, #4f2500ff, #003853ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Careers</strong>
            </h1>
            <div className="container my-5 px-5 d-flex justify-content-center align-items-center">
                <div className="row g-5" style={{ width: "100%" }}>
                    <div className="col-md-6 col-sm-12">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <div className="card-body text-center pt-0 pb-4 px-4">
                                <h3 className="card-title py-3 fw-bolder" style={{ background: "linear-gradient(90deg, #59006dff, #670000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Design and Commissioning Engineering</h3>
                                <div className="accordion" id="accordionExampleOne">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Senior Commissioning Engineer (PLC Drives and Scada)
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExampleOne">
                                            <div className="accordion-body" style={{ textAlign: "left" }}>
                                                Location:- Noida, Uttar Pradesh
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <div className="card-body text-center pt-0 pb-4 px-4">
                                <h3 className="card-title py-3 fw-bolder" style={{ background: "linear-gradient(90deg, #670000ff, #59006dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Sales</h3>
                                <div className="accordion" id="accordionExampleTwo">
                                    <div className="accordion-item rounded mb-3" style={{ overflow: "hidden" }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                Sales Engineer
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExampleTwo">
                                            <div className="accordion-body" style={{ textAlign: "left" }}>
                                                Location:- Noida, Uttar Pradesh
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item rounded" style={{ overflow: "hidden" }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                Sales Operations Engineer
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExampleThree">
                                            <div className="accordion-body" style={{ textAlign: "left" }}>
                                                Location:- Noida, Uttar Pradesh
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center display-4 pt-3" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong className="pt-3" style={{ background: "linear-gradient(90deg, #003853ff, #4f2500ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Career Form</strong>
            </h1>
            <div className="container my-5 px-5 pb-3" >
                <form>
                    <div className="input-group mb-3">
                        <span className="input-group-text fw-semibold" id="basic-addon1">Name</span>
                        <input type="text" className="form-control" placeholder="" onChange={(e) => setCareerName(e.target.value)} aria-label="Name" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text fw-semibold" id="basic-addon2">Email</span>
                        <input type="email" className="form-control" placeholder="" onChange={(e) => setCareerEmail(e.target.value)} aria-label="Email" aria-describedby="basic-addon2" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text fw-semibold" id="basic-addon3">Message</span>
                        <textarea className="form-control" placeholder="" onChange={(e) => setCareerMessage(e.target.value)} aria-label="With textarea" aria-describedby="basic-addon3"></textarea>
                    </div>
                    <div className="input-group d-flex align-items-center justify-content-center">
                        <button type="button" className="btn btn-success" style={{ width: "10rem" }} onClick={() => handleCareerSubmit()}>Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Careers