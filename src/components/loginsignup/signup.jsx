import React, { useEffect } from 'react'
import "./Login.css"
import { useState } from 'react'
import axios from 'axios'
import LoginPage from './LoginPage'
import logo from '../../assets/neigrihms_logo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [firstName, setfirstName] = useState("")
    const [validregis, setvalidregis] = useState(false)
    const [error, seterror] = useState("")
    const [remember, setremember] = useState(false)
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));

    const registerbodyParameters = {

        "password": password,
        "firstName": firstName,
        "email": email,

    };

    const loginbodyParameters = {
        "email": email,
        "password": password
    }

    const handleChange = () => {
        setremember(!remember);
        console.log("remember ", remember);
    }


    useEffect(() => {
        validregis && axios.post('https://neigrihms.onrender.com/api/patient/login', loginbodyParameters)
            .then(data => {

                console.log(data)
                console.log(data.data.accessToken)

                // settoken(data.data.accessToken);
                { remember && window.localStorage.setItem("authenticated", true) }
                { remember && window.localStorage.setItem("token", data.data.accessToken); }
                window.sessionStorage.setItem("authenticated", true)
                window.sessionStorage.setItem("token", data.data.accessToken);

                navigate("/patient");
            })
            .catch(err => {

                console.log(err)
            })
    }, [validregis])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(registerbodyParameters)

        axios.post('https://neigrihms.onrender.com/api/patient/register', registerbodyParameters)
            .then(data => {
                console.log(data)
                setvalidregis(true)

            })
            .catch(err => {
                seterror(err.response.data.message)
                console.log(err)
            })
    }

    return (
        <>


            <section className="ftco-section">
                <div className="container">

                    <div className="row justify-content-center" style={{ height: "100vh", justifyContent: "center" }}>
                        <div className="col-md-12 d-flex align-items-center" style={{ width: "100%" }}>
                            <div className=" d-md-flex box my-4 p-md-5" style={{ width: "85%", margin: "auto" }}>
                                <div className="img col-xs-0 col-md-6" style={{ margin: "auto" }}>
                                    <img src={logo} alt="" style={{ maxWidth: "100%" }} />
                                </div>
                                <div className="col-xs-12 col-md-6 p-3 my-4  d-flex justify-content-center align-items-center">
                                    <div style={{ width: "100%" }}>

                                        <div className="d-flex">
                                            <div className="w-100">
                                                <h3 className="mb-4">Sign Up</h3>
                                            </div>
                                            <div className="w-100">
                                                <p className="social-media d-flex justify-content-end">
                                                    <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
                                                    <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
                                                </p>
                                            </div>
                                        </div>
                                        <form action="#" className="signin-form">
                                            <div className="form-group mb-3">
                                                <label className="label label1" htmlFor="text">Username </label>
                                                <input onChange={(e) => setfirstName(e.target.value)} id="text" type="text" className="form-control" placeholder="User Name" required="" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="label label1" htmlFor="email">Email</label>
                                                <input onChange={(e) => setemail(e.target.value)} id="email" type="email" className="form-control" placeholder="Email" required="" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="label label1" htmlFor="password">Password</label>
                                                <input onChange={(e) => setpassword(e.target.value)} type="password" className="form-control" placeholder="Password" required="" />
                                            </div>
                                            <div className="form-group">
                                                <button onClick={handleSubmit} type="submit" className="form-control btn rounded submit px-3 py-3 my-2" style={{ backgroundColor: "#E3B04B", color: "white" }}>Sign Up</button>
                                            </div>
                                            <div style={{ textAlign: "center", color: "red", marginTop: "0.3rem" }}>
                                                {error && <div>{error}</div>}
                                            </div>
                                            <div className="form-group my-3 d-flex justify-content-between">
                                                <div className="w-50 text-left">
                                                    <div className="form-check">

                                                        <label className="form-check-label" htmlFor="flexCheckChecked" style={{ color: "#e3b04b", fontSize: "1.1rem" }} >
                                                            <input className="form-check-input input1" type="checkbox" value="" id="flexCheckChecked checkbox1" style={{ width: "1.1em", height: "1.1em" }} onChange={handleChange}>

                                                            </input>
                                                            <span>

                                                                Remember Me
                                                            </span>

                                                        </label>
                                                    </div>

                                                </div>
                                                <div className="w-50 text-md-right" style={{ textAlign: "end", fontSize: "1.1rem" }}>
                                                    <a href="#" style={{ opacity: "0.7" }}>Forgot Password</a>
                                                </div>
                                            </div>
                                        </form>
                                        <p className="text-center" style={{ opacity: "0.7", fontSize: "1.1rem" }}>Have an account? <Link to="/login" data-toggle="tab" href="#signup" style={{ color: "#e3b04b" }}>Sign In</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Signup