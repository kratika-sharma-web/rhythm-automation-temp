import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function RAadmin() {
    const navigate =useNavigate()
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
        const handleAdminLogin=()=>{
            axios.post('/api/adminLogin', {
                username: username,
                password: password
            })
            .then((res)=>{
                if(res.data.message){
                    navigate('/ra-admin-dashboard')
                }
                localStorage.setItem("adminToken", res.data.adminToken)
                localStorage.setItem("adminUsername", res.data.admin.username)
            })
            .catch((err) => {
                if (err.response) {
                    alert(err.response.data.message)
                }
                else {
                    alert("Something went wrong, please try again!")
                }
            })
        }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{paddingTop: "4.25rem"}}>
                <div className="border rounded d-flex justify-content-center align-items-center p-1">
                    <div className="card border-2 rounded p-1">
                        <div className="border rounded p-4">
                            <form>
                                <h3 className="text-secondary fw-medium" style={{ textAlign: "center" }}>Admin Login</h3>
                                <hr className="rounded" style={{ height: "4px", backgroundColor: "black" }} />
                                <div className="input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping">Username</span>
                                    <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                                </div>
                                <div className="input-group flex-nowrap pt-3">
                                    <span className="input-group-text" id="addon-wrapping">Password</span>
                                    <input type="password" className="form-control" aria-label="Password" aria-describedby="addon-wrapping" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                                </div>
                                <div className="input-group flex-nowrap pt-3 justify-content-center">
                                    <button className="btn btn-success w-100" type="button" onClick={()=>handleAdminLogin()}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RAadmin