import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const Navigate = useNavigate();
    
    const token = window.localStorage.getItem("token") || window.sessionStorage.getItem("token");

    const [details, setdetails] = useState({})
    const [authenticated, setauthenticated] = useState(false);

    http://localhost:1337/api/neigrihms-websites?populate=*

    useEffect(() => {

        setauthenticated(window.sessionStorage.getItem("authenticated") || window.localStorage.getItem("authenticated"))

        token && axios.get('https://neigrihms.onrender.com/api/patient/current', config)
            .then(data => {
                console.log("data=", data.data)
                setdetails(data.data)

            })
            .catch(err => { console.log(err) })

        if (window.location.href === "http://localhost:5173/Neigrihmshospital/login" || window.location.href === "http://localhost:5173/Neigrihmshospital/signup") {

            Navigate("/patient")
        }

        if (!token) {
            Navigate("/")
        }

    }, [window.location.href])

    const handleClick = (e) => {
        e.preventDefault();
        window.localStorage.removeItem("authenticated");
        window.localStorage.removeItem("token");
        window.sessionStorage.removeItem("token");
        window.sessionStorage.removeItem("authenticated");
        Navigate("/")
    }

    return (
        <>

            <div>
                LoginPage
                <div>
                    {JSON.stringify(details)}
                </div>
            </div>
            <button onClick={handleClick} className='btn btn-primary'>Sign Out</button>
        </>

    )
}


export default LoginPage