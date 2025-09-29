import { useEffect } from "react"
import "./AboutUs.css"

function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <h1 className="text-center display-4 pt-5" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong className="pt-3" style={{ background: "linear-gradient(90deg, #4f2500ff, #003853ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>About Us</strong>
            </h1>
            <div className="conatiner border rounded p-1 my-5" style={{ marginLeft: "5rem", marginRight: "5rem" }}>
                <div className="card rounded border-2 p-1" style={{ width: "100%" }}>
                    <div className="border rounded d-flex flex-column flex-md-row align-items-center justify-content-center px-5 pt-5 pb-4">
                        <strong className="fw-semibold" style={{ display: "inline-block", lineHeight: "1.6", textAlign: "justify" }}>
                            <p className="pb-3" style={{ background: "linear-gradient(135deg, #70008aff, #940000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                Rhythm Automation Solutions (P) Ltd is established by a team of highly skilled and professionally managed engineers with a dream and determination to provide reliable and cost-optimized solutions for most Industrial Automation needs.
                            </p>
                            <p className="pb-3" style={{ background: "linear-gradient(135deg, #940000ff, #70008aff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                The company's agenda is to create a - One stop solution Centre for all industrial Automation needs that can keep its customer delighted with its services, prompt response, and timely delivery while guaranteeing optimal pricing.
                            </p>
                            <p style={{ background: "linear-gradient(135deg, #70008aff, #940000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                The management team has good industrial experience of 25+ years, providing added value through a high level of product and solution support in Electrical and Automation Industries.
                            </p>
                        </strong>
                    </div>
                </div>
            </div>
            <h1 className="text-center display-4 pt-3" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong className="pt-3" style={{ background: "linear-gradient(90deg, #003853ff, #4f2500ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Our 4 Pillars</strong>
            </h1>
            <div className="container mt-5 px-5">
                <div className="card h-100 shadow border" style={{ width: "100%", borderRadius: "25px", overflow: "hidden", marginBottom: "5rem" }}>
                    <div className="row g-0" style={{ minHeight: "100%" }}>
                        <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
                            <img src="./AnirudhaGupta.png" className="img-fluid rounded" alt="Anirudha Gupta" style={{ objectFit: "cover" }} />
                        </div>
                        <div className="col-md-9 d-flex align-items-center pillar-text-right" style={{ minHeight: "100%", display: "flex" }}>
                            <div>
                                <h3 className="card-title pb-2">Anirudha Gupta</h3>
                                <p className="fw-medium" style={{ background: "linear-gradient(90deg, #9300a3ff, #47004fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4", textAlign: "justify" }}>
                                    A well-rounded Sales & Marketing Professional with a rich experience of 24+ years in the field of Electrical, Automation & Controls having exposure in all aspects of Sales operations, Business Development and Product Marketing. Started career as a service engineer in automation field later worked with reputed multinational as Business Head, Country Head and last worked with Belden Inc. as Director - India & South Asia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card h-100 shadow border" style={{ width: "100%", borderRadius: "25px", overflow: "hidden", marginTop: "5rem", marginBottom: "5rem" }}>
                    <div className="row g-0" style={{ minHeight: "100%" }}>
                        <div className="col-md-9 d-flex align-items-center pillar-text-left" style={{ minHeight: "100%", display: "flex" }}>
                            <div>
                                <h3 className="card-title pb-2">Anil Sharma</h3>
                                <p className="fw-medium" style={{ background: "linear-gradient(90deg, #074300ff, #0f9400ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4", textAlign: "justify" }}>
                                    Mr. Anil Kumar Sharma is a seasoned professional with over two decades of experience in the automation field. He is currently serving as the Director of Application Engineering in RACPL, where he is responsible for overseeing the company's operations and driving growth. Mr. Sharma holds a degree in Electrical Engineering and began his career as a service engineer in the automation industry. He quickly rose through the ranks and gained valuable experience working with some of the leading companies in the field. Prior to joining RACPL, he served as the Vice President of the Automation Products division at ABB, India, where he was responsible for application engineering and system design. As the Director of RACPL, Mr. Sharma is committed to driving the company's growth by expanding its product offerings, improving operational efficiency, and fostering a culture of innovation. He is passionate about helping his clients succeed and is dedicated to delivering high-quality products and services that exceed their expectations.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
                            <img src="./AnilSharma.png" className="img-fluid rounded" alt="Anil Sharma" style={{ objectFit: "cover", borderRadius: "0rem" }} />
                        </div>
                    </div>
                </div>
                <div className="card h-100 shadow border" style={{ width: "100%", borderRadius: "25px", overflow: "hidden", marginBottom: "5rem" }}>
                    <div className="row g-0" style={{ minHeight: "100%" }}>
                        <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
                            <img src="./MurariSharma.png" className="img-fluid rounded" alt="Murari Sharma" style={{ objectFit: "cover" }} />
                        </div>
                        <div className="col-md-9 d-flex align-items-center pillar-text-right" style={{ minHeight: "100%", display: "flex" }}>
                            <div>
                                <h3 className="card-title pb-2">Murari Sharma</h3>
                                <p className="fw-medium" style={{ background: "linear-gradient(90deg, #000ce9ff, #00067dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4", textAlign: "justify" }}>
                                    Mr. Sharma holds a degree in Electronics Engineering and began his career as an automation maintenance engineer in the cement process industry. He quickly established himself as a skilled professional with a deep understanding of automation systems and technologies. Prior to joining RACPL, Mr. Sharma served as the Service & Customer Support Head for Northern India in the Automation Products division at ABB, India. In this role, he was responsible for managing the service and support operations for automation products across a wide range of industries. As the Director of Technical Support in RACPL, Mr. Sharma is committed to driving the company's growth and success by developing innovative solutions that meet the evolving needs of his clients. He is passionate about using technology to drive business outcomes and is dedicated to delivering exceptional customer service and support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card h-100 shadow border" style={{ width: "100%", borderRadius: "25px", overflow: "hidden", marginTop: "5rem", marginBottom: "5rem" }}>
                    <div className="row g-0" style={{ minHeight: "100%" }}>
                        <div className="col-md-9 d-flex align-items-center pillar-text-left" style={{ minHeight: "100%", display: "flex" }}>
                            <div>
                                <h3 className="card-title pb-2">Yogesh Singh</h3>
                                <p className="fw-medium" style={{ background: "linear-gradient(90deg, #740000ff, #c70000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4", textAlign: "justify" }}>
                                    As the Director of Technical RACPL, Mr. Singh is committed to driving the company's growth and success by developing innovative solutions that meet the evolving needs of his clients. He is passionate about using technology to drive business outcomes and is dedicated to delivering exceptional customer service and support. Prior to founding RACPL, Mr. Singh served as the Project Execution Head for Northern India in the Automation Products division at ABB, India. In this role, he was responsible for managing and executing automation projects across a wide range of industries. He demonstrated his expertise in project management and successfully delivered several high-profile projects that met or exceeded client expectations. Throughout his career, Mr. Singh has developed a reputation for his technical expertise, attention to detail, and leadership skills. He has a keen ability to manage complex projects and teams, ensuring that projects are completed on time, within budget, and to the highest quality standards.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
                            <img src="./YogeshSingh.png" className="img-fluid rounded" alt="Yogesh Singh" style={{ objectFit: "cover", borderRadius: "0rem" }} />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center display-4 pt-3" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong className="pt-3" style={{ background: "linear-gradient(90deg, #4f2500ff, #003853ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>The Infrastructure</strong>
            </h1>
            <div className="conatiner my-5" style={{ marginLeft: "5rem", marginRight: "5rem" }}>
                <div className="card rounded" style={{ width: "100%" }}>
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center px-5 pt-5 pb-4">
                        <strong className="fw-medium" style={{ display: "inline-block", lineHeight: "1.6", textAlign: "justify" }}>
                            <p style={{ background: "linear-gradient(45deg, #70008aff, #940000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                The company is a thriving enterprise with over 100 dedicated employees and a spacious shop floor spanning 30000 square feet. From the advanced machinery on the production floor to the cutting-edge software in the administrative offices, the company is constantly investing in new technology and processes to stay ahead of the competition.
                            </p>
                            <br />
                            <p style={{ background: "linear-gradient(45deg, #940000ff, #70008aff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                Rhythm has a fully equipped workshop and lab at Noida with complete Automation system design and manufacturing facility from panel fabrication to FAT (Factory Acceptance Test) of Drives, PLC, DCS, SCADA SYSTEMS, PCCs, MCCs, APFCs, Instrumentation & Slip power recovery systems for slip ring motors.
                            </p>
                            <br />
                            <p style={{ background: "linear-gradient(45deg, #70008aff, #940000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                With a team of skilled professionals at the helm, the company can provide exceptional service and support to its clients, meeting their unique needs and exceeding their expectations. From concept to delivery, the company is motivated to provide world-class solutions that help its clients achieve their goals and succeed in their respective industries.
                            </p>
                            <br />
                            <p style={{ background: "linear-gradient(45deg, #940000ff, #70008aff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                It has a full fledged design & engineering division with latest tools like AutoCad & Eplan to ensure drawings and documentation to meet the requirements of the client. Latest ABB selection softwares are used to ensure proper sizing & optimum solutions to the customers.
                            </p>
                            <br />
                            <p style={{ background: "linear-gradient(45deg, #70008aff, #940000ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                A well trained E&C team offers services in preparing Layout Drawings of Electrical Rooms, Operator Cabins and floor plans considering the Process Requirements, supervision of erection, cabling and commissioning of Drives and PLC / MMI Automation electrics including MCC's, Operator stations. A strong team with highly qualified and experienced engineers can meet any complex software requirements of the process. The team offers support in developing PLC software, SCADA developments and custom built PC based software.
                            </p>
                        </strong>
                    </div>
                </div>
            </div>
            <h1 className="text-center display-4 pt-3" style={{ fontFamily: "'Poppins', serif", fontWeight: "500", letterSpacing: "1px", lineHeight: "1.4" }}>
                <strong className="pt-3" style={{ background: "linear-gradient(90deg, #003853ff, #4f2500ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: "1.4" }}>Our Achievements</strong>
            </h1>
            <div className="container my-5 px-5 pb-4">
                <div className="row g-5 justify-content-center">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="border rounded p-1" style={{ width: "100%", height: "100%" }}>
                            <div className="card rounded border-2 p-1" style={{ width: "100%", height: "100%" }}>
                                <div className="border rounded p-1 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }}>
                                    <img src="./cer2.png" className="p-1" style={{ width: "100%" }} alt="Certificate-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="border rounded p-1" style={{ width: "100%", height: "100%" }}>
                            <div className="card rounded border-2 p-1" style={{ width: "100%", height: "100%" }}>
                                <div className="border rounded p-1 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }}>
                                    <img src="./cer1.png" className="p-1" style={{ width: "100%" }} alt="Certificate-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="border rounded p-1" style={{ width: "100%", height: "100%" }}>
                            <div className="card rounded border-2 p-1" style={{ width: "100%", height: "100%" }}>
                                <div className="border rounded p-1 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }}>
                                    <img src="./cer3.png" className="p-1" style={{ width: "100%" }} alt="Certificate-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="border rounded p-1" style={{ width: "100%", height: "100%" }}>
                            <div className="card rounded border-2 p-1" style={{ width: "100%", height: "100%" }}>
                                <div className="border rounded p-1 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }}>
                                    <img src="./cer4.png" className="p-1" style={{ width: "100%" }} alt="Certificate-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="border rounded p-1" style={{ width: "100%", height: "100%" }}>
                            <div className="card rounded border-2 p-1" style={{ width: "100%", height: "100%" }}>
                                <div className="border rounded p-1 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }}>
                                    <img src="./cer6.jpg" className="p-1" style={{ width: "100%" }} alt="Certificate-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="border rounded p-1" style={{ width: "100%", height: "100%" }}>
                            <div className="card rounded border-2 p-1" style={{ width: "100%", height: "100%" }}>
                                <div className="border rounded p-1 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }}>
                                    <img src="./cer5.png" className="p-1" style={{ width: "100%" }} alt="Certificate-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="border rounded p-1" style={{ width: "100%", height: "100%" }}>
                            <div className="card rounded border-2 p-1" style={{ width: "100%", height: "100%" }}>
                                <div className="border rounded p-1 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }}>
                                    <img src="./cer7.jpg" className="p-1" style={{ width: "100%" }} alt="Certificate-7" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs