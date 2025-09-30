import { useEffect, useState } from "react"
import axios from "axios"

function Careers() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [careerName, setCareerName] = useState("")
    const [careerEmail, setCareerEmail] = useState("")
    const [careerPhone, setCareerPhone] = useState("")
    const [careerMessage, setCareerMessage] = useState("")
    const handleCareerSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/careerFormEntry', {
            name: careerName,
            email: careerEmail,
            phone: careerPhone,
            message: careerMessage
        })
            .then((res) => {
                alert("Request recorded successfully!")
                setCareerName("")
                setCareerEmail("")
                setCareerPhone("")
                setCareerMessage("")
                window.scrollTo(0, 0)
            })
            .catch((err) => {
                alert("Something went wrong, please try again!")
            })
    }
    return (
        <>
            <h1 className="text-center display-4 pt-5" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong className="pt-3" style={{ background: "linear-gradient(90deg, #4f2500ff, #003853ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Careers</strong>
            </h1>
            <div className="container my-5 px-5 d-flex justify-content-center align-items-center">
                <div className="row g-5" style={{ width: "100%" }}>
                    <div className="col-md-6 col-sm-12">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <div className="card-body text-center pt-0 pb-2 px-4">
                                <h3 className="card-title py-3 fw-bolder" style={{ background: "linear-gradient(90deg, #59006dff, #670000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Design and Commissioning Engineering</h3>
                                <div>
                                    <div className="card rounded mb-3 border-2" style={{ overflow: "hidden" }}>
                                        <div className="card-header bg-light fw-medium py-3">
                                            Senior Commissioning Engineer (PLC Drives and Scada)
                                        </div>
                                        <div className="card-body" style={{ textAlign: "left" }}>
                                            <p className="mb-0">Location:- Noida, Uttar Pradesh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="card h-100 shadow border-0" style={{ width: "100%" }}>
                            <div className="card-body text-center pt-0 pb-2 px-4">
                                <h3 className="card-title py-3 fw-bolder" style={{ background: "linear-gradient(90deg, #670000ff, #59006dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Sales</h3>
                                <div>
                                    <div className="card rounded mb-3 border-2" style={{ overflow: "hidden" }}>
                                        <div className="card-header bg-light fw-medium py-3">
                                            Sales Engineer
                                        </div>
                                        <div className="card-body" style={{ textAlign: "left" }}>
                                            <p className="mb-0">Location:- Noida, Uttar Pradesh</p>
                                        </div>
                                    </div>
                                    <div className="card rounded mb-3 border-2" style={{ overflow: "hidden" }}>
                                        <div className="card-header bg-light fw-medium py-3">
                                            Sales Operations Engineer
                                        </div>
                                        <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExampleThree">
                                            <div className="card-body" style={{ textAlign: "left" }}>
                                                <p className="mb-0">Location:- Noida, Uttar Pradesh</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conatiner mb-5" style={{ marginTop:"100px", marginLeft: "5rem", marginRight: "5rem" }}>
                <div className="card rounded" style={{ width: "100%" }}>
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center fs-5 p-5">
                        <strong className="fw-semibold" style={{ background: "linear-gradient(90deg, #670000ff, #59006dff, #670000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4", textAlign: "center" }}>
                            With more than 25 years of experience, we are one of the leading automation companies in our field. We are always looking forward to working with skilled, brilliant, and passionate people. If you have such a passion and are willing to collaborate with us, fill out the form below so that we can begin the process, or you can also contact us directly.
                        </strong>
                    </div>
                </div>
            </div>
            <h1 className="text-center display-4 pt-3" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong className="pt-3" style={{ background: "linear-gradient(90deg, #003853ff, #4f2500ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Career Form</strong>
            </h1>
            <div className="container my-5 px-5 pb-3" >
                <form onSubmit={handleCareerSubmit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text fw-semibold" id="basic-addon1">Name</span>
                        <input type="text" className="form-control" placeholder="" value={careerName} onChange={(e) => setCareerName(e.target.value)} aria-label="Name" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text fw-semibold" id="basic-addon2">Email</span>
                        <input type="email" className="form-control" placeholder="" value={careerEmail} onChange={(e) => setCareerEmail(e.target.value)} aria-label="Email" aria-describedby="basic-addon2" required />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text fw-semibold" id="basic-addon3">Phone No.</span>
                        <input type="tel" className="form-control" placeholder="" value={careerPhone} onChange={(e) => setCareerPhone(e.target.value)} aria-label="Email" aria-describedby="basic-addon3" required />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text fw-semibold" id="basic-addon4">Message</span>
                        <textarea className="form-control" placeholder="" value={careerMessage} onChange={(e) => setCareerMessage(e.target.value)} aria-label="With textarea" aria-describedby="basic-addon4" required></textarea>
                    </div>
                    <div className="input-group d-flex align-items-center justify-content-center">
                        <button type="submit" className="btn btn-success" style={{ width: "10rem" }}>Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Careers