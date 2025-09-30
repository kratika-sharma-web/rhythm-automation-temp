import { useEffect, useState } from "react"
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaMobileAlt } from "react-icons/fa"
import axios from "axios"

function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [contactUsName, setContactUsName] = useState("")
    const [contactUsEmail, setContactUsEmail] = useState("")
    const [contactUsPhone, setContactUsPhone] = useState("")
    const [contactUsMessage, setContactUsMessage] = useState("")
    const handleContactUsSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/contactUsFormEntry', {
            name: contactUsName,
            email: contactUsEmail,
            phone: contactUsPhone,
            message: contactUsMessage
        })
            .then((res) => {
                alert("Request recorded successfully!")
                setContactUsName("")
                setContactUsEmail("")
                setContactUsPhone("")
                setContactUsMessage("")
                window.scrollTo(0, 0)
            })
            .catch((err) => {
                alert("Something went wrong, please try again!")
            })
    }
    return (
        <>
            <h1 className="text-center display-4 pt-5" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong className="pt-3" style={{ background: "linear-gradient(90deg, #003853ff, #4f2500ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Contact Us</strong>
            </h1>
            <div className="container px-5 mt-5 d-flex align-items-center justify-content-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1504118281746!2d77.46775947374788!3d28.535198388497275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce95f85941ed5%3A0xb1d69c990bd92000!2sRhythm%20Automation%20Control%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1755195916227!5m2!1sen!2sin" className="border-0 rounded" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </div>
            <div className="container mt-5 px-5">
                <div className="row g-5 justify-content-center">
                    <div className="col-12">
                        <div className="border rounded p-1" style={{ width: "100%", height: "100%" }}>
                            <div className="card rounded border-2 p-1" style={{ width: "100%", height: "100%" }}>
                                <div className="border rounded p-1 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }}>
                                    <div className="pt-3 pb-1 d-flex flex-row px-3">
                                        <FaMapMarkerAlt size={25} style={{ flexShrink: 0 }} />
                                        <p className="ps-2">Plot No.167, 168, Udyog Kendra 2, Ecotech III, Greater Noida, Tusyana, Uttar Pradesh 201306</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="border rounded p-1" style={{ width: "100%", height: "100%" }}>
                            <div className="card rounded border-2 p-1" style={{ width: "100%", height: "100%" }}>
                                <div className="border rounded p-1 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }}>
                                    <div className="pt-3 pb-1 d-flex flex-row px-3">
                                        <FaEnvelope size={25} />
                                        <p className="ps-2">sales@rhythmautomation.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="border rounded p-1" style={{ width: "100%", height: "100%" }}>
                            <div className="card rounded border-2 p-1" style={{ width: "100%", height: "100%" }}>
                                <div className="border rounded p-1 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }}>
                                    <div className="pt-3 pb-3 px-3">
                                        <div className="d-flex align-items-center">
                                            <FaPhone size={25} />
                                            <p className="ps-2 mb-0">(0120) 4329488</p>
                                        </div>
                                        <div className="d-flex align-items-center mt-3">
                                            <FaMobileAlt size={25} />
                                            <p className="ps-2 mb-0">+91-9818228587</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="border rounded p-1" style={{ width: "100%", height: "100%" }}>
                            <div className="card rounded border-2 p-1" style={{ width: "100%", height: "100%" }}>
                                <div className="border rounded p-1 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }}>
                                    <div className="pt-3 pb-2 d-flex flex-column px-3 align-items-center justify-content-center">
                                        <img src="/qr.jpg" alt="QR Code" width={200} />
                                        <p>Scan to Chat with Our Experts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="border rounded p-1" style={{ width: "100%", height: "100%" }}>
                            <div className="card rounded border-2 p-1" style={{ width: "100%", height: "100%" }}>
                                <div className="border rounded p-1 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }}>
                                    <div className="pt-3 pb-2 d-flex flex-column px-3 align-items-center justify-content-center">
                                        <img src="/qr.jpg" alt="QR Code" width={200} />
                                        <p>Scan to Connect with our Team</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center display-4 pt-5" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong className="pt-3" style={{ background: "linear-gradient(90deg, #4f2500ff, #003853ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Contact Form</strong>
            </h1>
            <div className="container my-5 px-5 pb-3">
                <form onSubmit={handleContactUsSubmit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text fw-semibold" id="basic-addon1">Name</span>
                        <input type="text" className="form-control" placeholder="" value={contactUsName} onChange={(e) => setContactUsName(e.target.value)} aria-label="Name" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text fw-semibold" id="basic-addon2">Email</span>
                        <input type="email" className="form-control" placeholder="" value={contactUsEmail} onChange={(e) => setContactUsEmail(e.target.value)} aria-label="Email" aria-describedby="basic-addon2" required />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text fw-semibold" id="basic-addon3">Phone No.</span>
                        <input type="tel" className="form-control" placeholder="" value={contactUsPhone} onChange={(e) => setContactUsPhone(e.target.value)} aria-label="Email" aria-describedby="basic-addon3" required />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text fw-semibold" id="basic-addon4">Message</span>
                        <textarea className="form-control" placeholder="" value={contactUsMessage} onChange={(e) => setContactUsMessage(e.target.value)} aria-label="With textarea" aria-describedby="basic-addon4" required></textarea>
                    </div>
                    <div className="input-group d-flex align-items-center justify-content-center">
                        <button type="submit" className="btn btn-success" style={{ width: "10rem" }}>Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactUs