import { useState } from "react"
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci"
import { MdSend } from "react-icons/md"

function FooterBar() {
    const [contactEmailId, setContactEmailId] = useState("")
    const handleContactEmailId = () => { }
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
                <div className="col-md-5 col-sm-12 align-items-center">
                    <div className="mt-5 mb-3">
                        <h4 className="display-6 text-secondary"><strong>Contact</strong></h4>
                    </div>
                    <div className="py-2">
                        <p>Please enter your email address so that we can contact you...</p>
                    </div>
                    <form className="d-flex mb-3">
                        <input className="form-control rounded" style={{ maxWidth: "300px" }} type="text" placeholder="enter email here..." onChange={(e) => setContactEmailId(e.target.value)} />
                        <div className="ps-2">
                            <button className="btn btn-success d-flex align-items-center justify-content-center p-0" type="button" style={{ width: "40px", height: "40px" }} onClick={() => handleContactEmailId()}>
                                <MdSend />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FooterBar