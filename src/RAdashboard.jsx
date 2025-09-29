import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function RAdashboard() {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [dashboardMessage, setDashboardMessage] = useState("")
    useEffect(() => {
        const adminToken = localStorage.getItem("adminToken")
        if (!adminToken) {
            navigate('/')
            return;
        }
        const verifyTokenAndLoadContent = async () => {
            try {
                const res = await axios.get('http://localhost:3001/adminDashboard/', {
                    headers: {
                        Authorization: `Bearer ${adminToken}`
                    }
                })
                setDashboardMessage(res.data.message)
            }
            catch (err) {
                localStorage.removeItem("adminToken")
                localStorage.removeItem("adminUsername")
                navigate('/ra-admin')
            }
        }
        verifyTokenAndLoadContent()
    }, [navigate])
    const [contactUsList, setContactUsList] = useState([])
    const [careersList, setCareersList] = useState([])
    const [contactEmailList, setContactEmailList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/adminFormsData/')
            .then((res) => {
                const updatedContactUsList = res.data.contactUsList.map((item) => ({
                    ...item,
                    isEditing: false,
                    tempComment: "",
                }))
                const updatedCareersList = res.data.careersList.map((item) => ({
                    ...item,
                    isEditing: false,
                    tempComment: "",
                }))
                const updatedContactEmailList = res.data.contactEmailList.map((item) => ({
                    ...item,
                    isEditing: false,
                    tempComment: "",
                }))
                setContactUsList(updatedContactUsList)
                setCareersList(updatedCareersList)
                setContactEmailList(updatedContactEmailList)
            })
            .catch(err => console.error(err))
    }, [])
    const handleContactUsEntryDelete = (deleteContactUsEntry) => {
        axios.post('http://localhost:3001/handleContactUsEntryDelete/', {
            deleteContactUsEntry: deleteContactUsEntry
        })
            .then((res) => {
                setContactUsList(prevList => prevList.filter(entry => entry._id !== deleteContactUsEntry))
            })
            .catch(err => console.error(err))
    }
    const handleCareerEntryDelete = (deleteCareerEntry) => {
        axios.post('http://localhost:3001/handleCareerEntryDelete/', {
            deleteCareerEntry: deleteCareerEntry
        })
            .then((res) => {
                setCareersList(prevList => prevList.filter(entry => entry._id !== deleteCareerEntry))
            })
            .catch(err => console.error(err))
    }
    const handleContactEmailEntryDelete = (deleteContactEmailEntry) => {
        axios.post('http://localhost:3001/handleContactEmailEntryDelete/', {
            deleteContactEmailEntry: deleteContactEmailEntry
        })
            .then((res) => {
                setContactEmailList(prevList => prevList.filter(entry => entry._id !== deleteContactEmailEntry))
            })
            .catch(err => console.error(err))
    }
    const handleContactUsAddComment = (entryId) => {
        setContactUsList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], isEditing: true, tempComment: "" }
            return updatedList
        })
    }
    const handleContactUsEditComment = (entryId) => {
        setContactUsList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], isEditing: true, tempComment: updatedList[index].comment }
            return updatedList
        })
    }
    const handleContactUsCommentChange = (entryId, value) => {
        setContactUsList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], tempComment: value }
            return updatedList
        })
    }
    const handleContactUsDiscardComment = (entryId) => {
        setContactUsList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], isEditing: false }
            return updatedList
        })
    }
    const handleContactUsDeleteComment = (entryId) => {
        setContactUsList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], comment: "", isEditing: false }
            return updatedList
        })
        axios.post('http://localhost:3001/handleContactUsSaveComment/', {
            entryId: entryId,
            contactUsComment: ""
        })
            .then((res) => {
                const updatedContactUsList = res.data.savedContactUsComment.map((item) => ({
                    ...item,
                    isEditing: false,
                    tempComment: "",
                }))
                setContactUsList(updatedContactUsList)
            })
            .catch(err => console.error(err))
    }
    const handleContactUsSaveComment = (entryId) => {
        setContactUsList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], comment: updatedList[index].tempComment, isEditing: false }
            return updatedList
        })
        axios.post('http://localhost:3001/handleContactUsSaveComment/', {
            entryId: entryId,
            contactUsComment: contactUsList.find((i) => i._id === entryId)?.tempComment
        })
            .then((res) => {
                const updatedContactUsList = res.data.savedContactUsComment.map((item) => ({
                    ...item,
                    isEditing: false,
                    tempComment: "",
                }))
                setContactUsList(updatedContactUsList)
            })
            .catch(err => console.error(err))
    }
    const handleCareerAddComment = (entryId) => {
        setCareersList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], isEditing: true, tempComment: "" }
            return updatedList
        })
    }
    const handleCareerEditComment = (entryId) => {
        setCareersList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], isEditing: true, tempComment: updatedList[index].comment }
            return updatedList
        })
    }
    const handleCareerCommentChange = (entryId, value) => {
        setCareersList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], tempComment: value }
            return updatedList
        })
    }
    const handleCareerDiscardComment = (entryId) => {
        setCareersList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], isEditing: false }
            return updatedList
        })
    }
    const handleCareerDeleteComment = (entryId) => {
        setCareersList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], comment: "", isEditing: false }
            return updatedList
        })
        axios.post('http://localhost:3001/handleCareerSaveComment/', {
            entryId: entryId,
            careerComment: ""
        })
            .then((res) => {
                const updatedCareerList = res.data.savedCareerComment.map((item) => ({
                    ...item,
                    isEditing: false,
                    tempComment: "",
                }))
                setCareersList(updatedCareerList)
            })
            .catch(err => console.error(err))
    }
    const handleCareerSaveComment = (entryId) => {
        setCareersList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], comment: updatedList[index].tempComment, isEditing: false }
            return updatedList
        })
        axios.post('http://localhost:3001/handleCareerSaveComment/', {
            entryId: entryId,
            careerComment: careersList.find((i) => i._id === entryId)?.tempComment
        })
            .then((res) => {
                const updatedCareerList = res.data.savedCareerComment.map((item) => ({
                    ...item,
                    isEditing: false,
                    tempComment: "",
                }))
                setCareersList(updatedCareerList)
            })
            .catch(err => console.error(err))
    }
    const handleContactEmailAddComment = (entryId) => {
        setContactEmailList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], isEditing: true, tempComment: "" }
            return updatedList
        })
    }
    const handleContactEmailEditComment = (entryId) => {
        setContactEmailList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], isEditing: true, tempComment: updatedList[index].comment }
            return updatedList
        })
    }
    const handleContactEmailCommentChange = (entryId, value) => {
        setContactEmailList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], tempComment: value }
            return updatedList
        })
    }
    const handleContactEmailDiscardComment = (entryId) => {
        setContactEmailList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], isEditing: false }
            return updatedList
        })
    }
    const handleContactEmailDeleteComment = (entryId) => {
        setContactEmailList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], comment: "", isEditing: false }
            return updatedList
        })
        axios.post('http://localhost:3001/handleContactEmailSaveComment/', {
            entryId: entryId,
            contactEmailComment: ""
        })
            .then((res) => {
                const updatedContactEmailList = res.data.savedContactEmailComment.map((item) => ({
                    ...item,
                    isEditing: false,
                    tempComment: "",
                }))
                setContactEmailList(updatedContactEmailList)
            })
            .catch(err => console.error(err))
    }
    const handleContactEmailSaveComment = (entryId) => {
        setContactEmailList((prev) => {
            const index = prev.findIndex((item) => item._id === entryId)
            if (index === -1) return prev
            const updatedList = [...prev]
            updatedList[index] = { ...updatedList[index], comment: updatedList[index].tempComment, isEditing: false }
            return updatedList
        })
        axios.post('http://localhost:3001/handleContactEmailSaveComment/', {
            entryId: entryId,
            contactEmailComment: contactEmailList.find((i) => i._id === entryId)?.tempComment
        })
            .then((res) => {
                const updatedContactEmailList = res.data.savedContactEmailComment.map((item) => ({
                    ...item,
                    isEditing: false,
                    tempComment: "",
                }))
                setContactEmailList(updatedContactEmailList)
            })
            .catch(err => console.error(err))
    }
    return (
        <>
            <div className="container py-5">
                <h2 className="text-secondary fw-medium pb-3">Admin Dashboard</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <strong className="fw-medium">Contact Us From Responses</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {contactUsList.length === 0 ? (
                                    <p className="text-muted px-5 pt-2 pb-4">There are no entries for the Contact Us form!</p>
                                ) : (
                                    <>
                                        <table className="table table-bodered table-hover mb-2">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">Sr.No.</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Phone No.</th>
                                                    <th scope="col">Message</th>
                                                    <th scope="col">Comment</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {contactUsList.map((entry, index) => {
                                                    return (
                                                        <>
                                                            <tr key={entry._id} className="align-items-center">
                                                                <th scope="row" className="fw-normal">{index + 1}</th>
                                                                <td>{entry.name}</td>
                                                                <td>{entry.email}</td>
                                                                <td>{entry.phone}</td>
                                                                <td>{entry.message}</td>
                                                                <td>
                                                                    {entry.isEditing ? (
                                                                        <>
                                                                            <textarea className="form-control mb-1" rows="2" value={entry.tempComment} onChange={(e) => handleContactUsCommentChange(entry._id, e.target.value)} />
                                                                            <button className="btn btn-success btn-sm me-2" onClick={() => handleContactUsSaveComment(entry._id)}>Save</button>
                                                                            <button className="btn btn-secondary btn-sm" onClick={() => handleContactUsDiscardComment(entry._id)}>Discard</button>
                                                                        </>
                                                                    ) : (entry.comment === "" ? (
                                                                        <button className="btn btn-success btn-sm" onClick={() => handleContactUsAddComment(entry._id)}>Add Comment</button>
                                                                    ) : (
                                                                        <>
                                                                            {entry.comment}
                                                                            <br />
                                                                            <button className="btn btn-primary btn-sm me-2" onClick={() => handleContactUsEditComment(entry._id)}>Edit</button>
                                                                            <button className="btn btn-danger btn-sm" onClick={() => handleContactUsDeleteComment(entry._id)}>Delete</button>
                                                                        </>
                                                                    ))}
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-danger btn-sm" onClick={() => handleContactUsEntryDelete(entry._id)}>Delete Entry</button>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                <strong className="fw-medium">Career Form Responses</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {careersList.length === 0 ? (
                                    <p className="text-muted px-5 pt-2 pb-4">There are no entries for the Careers form!</p>
                                ) : (
                                    <>
                                        <table className="table table-bodered table-hover mb-2">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">Sr.No.</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Phone No.</th>
                                                    <th scope="col">Message</th>
                                                    <th scope="col">Comment</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {careersList.map((entry, index) => {
                                                    return (
                                                        <>
                                                            <tr key={entry._id} className="align-items-center">
                                                                <th scope="row" className="fw-normal">{index + 1}</th>
                                                                <td>{entry.name}</td>
                                                                <td>{entry.email}</td>
                                                                <td>{entry.phone}</td>
                                                                <td>{entry.message}</td>
                                                                <td>
                                                                    {entry.isEditing ? (
                                                                        <>
                                                                            <textarea className="form-control mb-1" rows="2" value={entry.tempComment} onChange={(e) => handleCareerCommentChange(entry._id, e.target.value)} />
                                                                            <button className="btn btn-success btn-sm me-2" onClick={() => handleCareerSaveComment(entry._id)}>Save</button>
                                                                            <button className="btn btn-secondary btn-sm" onClick={() => handleCareerDiscardComment(entry._id)}>Discard</button>
                                                                        </>
                                                                    ) : (entry.comment === "" ? (
                                                                        <button className="btn btn-success btn-sm" onClick={() => handleCareerAddComment(entry._id)}>Add Comment</button>
                                                                    ) : (
                                                                        <>
                                                                            {entry.comment}
                                                                            <br />
                                                                            <button className="btn btn-primary btn-sm me-2" onClick={() => handleCareerEditComment(entry._id)}>Edit</button>
                                                                            <button className="btn btn-danger btn-sm" onClick={() => handleCareerDeleteComment(entry._id)}>Delete</button>
                                                                        </>
                                                                    ))}
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-danger btn-sm" onClick={() => handleCareerEntryDelete(entry._id)}>Delete Entry</button>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong className="fw-medium">Contact Email Responses</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {contactEmailList.length === 0 ? (
                                    <p className="text-muted px-5 pt-2 pb-4">There are no entries for the recieved Email!</p>
                                ) : (
                                    <>
                                        <table className="table table-bodered table-hover mb-2">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">Sr.No.</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Comment</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {contactEmailList.map((entry, index) => {
                                                    return (
                                                        <>
                                                            <tr key={entry._id} className="align-items-center">
                                                                <th scope="row" className="fw-normal">{index + 1}</th>
                                                                <td>{entry.email}</td>
                                                                <td>
                                                                    {entry.isEditing ? (
                                                                        <>
                                                                            <textarea className="form-control mb-1" rows="2" value={entry.tempComment} onChange={(e) => handleContactEmailCommentChange(entry._id, e.target.value)} />
                                                                            <button className="btn btn-success btn-sm me-2" onClick={() => handleContactEmailSaveComment(entry._id)}>Save</button>
                                                                            <button className="btn btn-secondary btn-sm" onClick={() => handleContactEmailDiscardComment(entry._id)}>Discard</button>
                                                                        </>
                                                                    ) : (entry.comment === "" ? (
                                                                        <button className="btn btn-success btn-sm" onClick={() => handleContactEmailAddComment(entry._id)}>Add Comment</button>
                                                                    ) : (
                                                                        <>
                                                                            {entry.comment}
                                                                            <br />
                                                                            <button className="btn btn-primary btn-sm me-2" onClick={() => handleContactEmailEditComment(entry._id)}>Edit</button>
                                                                            <button className="btn btn-danger btn-sm" onClick={() => handleContactEmailDeleteComment(entry._id)}>Delete</button>
                                                                        </>
                                                                    ))}
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-danger btn-sm" onClick={() => handleContactEmailEntryDelete(entry._id)}>Delete Entry</button>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RAdashboard