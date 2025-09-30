import { useState } from "react"
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci"
import { MdSend } from "react-icons/md"
import axios from "axios"

function FooterBar() {
    const [contactEmail, setContactEmail] = useState("")
    const handleContactEmail = (e) => {
        e.preventDefault()
        axios.post('/api/contactEmailEntry', {
            email: contactEmail
        })
            .then((res) => {
                alert("Email saved successfully!")
                setContactEmail("")
                window.scrollTo(0, 0)
            })
            .catch((err) => {
                alert("Something went wrong, please try again!")
            })
    }
    return (
        <>
            <div className="container row py-3 ps-5 pe-1 text-start d-flex">
                <div className="col-md-7 col-sm-12 align-items-center">
                    <div className="pt-2">
                        <img src="./logo.png" alt="Rhythm Automation" width={125} />
                    </div>
                    <br />
                    <div className="py-2 d-flex flex-row">
                        <CiLocationOn size={25} style={{ flexShrink: 0 }} />
                        <p className="ps-2">Plot No.167, 168, Udyog Kendra 2, Ecotech III, Greater Noida, Uttar Pradesh 201306</p>
                    </div>
                    <div className="py-2 d-flex flex-row">
                        <CiMail size={25} />
                        <p className="ps-2">sales@rhythmautomation.com</p>
                    </div>
                    <div className="py-2 d-flex flex-row">
                        <CiPhone size={25} />
                        <p className="ps-2">(0120) 4329488 / +91-9818228587</p>
                    </div>
                </div>
                <div className="col-md-5 col-sm-12 ps-3 align-items-center">
                    <div className="mt-2">
                        <h4 className="display-6 text-secondary"><strong>Contact</strong></h4>
                    </div>
                    <div className="pt-0 pb-1">
                        <p>Please send your email address so that we can contact you...</p>
                    </div>
                    <form className="d-flex mb-3" onSubmit={handleContactEmail}>
                        <input className="form-control rounded" style={{ maxWidth: "300px" }} type="email" placeholder="enter email here..." value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required />
                        <div className="ps-2">
                            <button className="btn btn-success d-flex align-items-center justify-content-center p-0" type="submit" style={{ width: "40px", height: "40px" }}>
                                <MdSend />
                            </button>
                        </div>
                    </form>
                    <div className="d-flex column justify-content-center">
                        <div className="d-flex pe-4 flex-column align-items-center justify-content-center">
                            <img src="/qr.jpg" alt="QR Code" width={125} />
                            <p style={{ fontSize: "12.5px" }}>Chat with Our Experts</p>
                        </div>
                        <div className="d-flex ps-4 flex-column align-items-center justify-content-center">
                            <img src="/qr.jpg" alt="QR Code" width={125} />
                            <p style={{ fontSize: "12.5px" }}>Connect with our Team</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterBar