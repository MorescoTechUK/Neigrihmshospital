import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import PhoneIcon from '@mui/icons-material/Phone';
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from '../../assets/neigrihms_logo.png'

const Navbar = () => {

    const data = [
        {
            key: "john",
            value: "John Doe",
        },
        {
            key: "jane",
            value: "Jane Doe",
        },
        {
            key: "mary",
            value: "Mary Phillips",
        },
        {
            key: "robert",
            value: "Robert",
        },
        {
            key: "karius",
            value: "Karius",
        },
    ];

    return (
        <>
            <div className="container-fluid text-center ">
                <div className="row">

                    <div className="col-xs-12 col-lg-4 d-flex my-2  my-3 justify-content-center" style={{justifyContent:"center"}}>

                        <img src={logo} alt="" style={{ width: '6vw' }} />
                        <h1 className='ms-3 fw-semibold me-xl-5 display-6 my-auto ' style={{ fontFamily: "Calibre", fontWeight: '700' }}>
                            NEIGRIHMS
                        </h1>
                    </div>
                    <div className="col-xs-8 col-lg-2 col-xl-3 my-auto mx-auto">

                        <div className="my-auto border border-dark rounded col-sm-8 col-lg-12 mx-auto">

                            <ReactSearchBox
                                placeholder="Search Doctor and Hospital"
                                value="Doe"
                                data={data}
                                callback={(record) => console.log(record)}

                            />
                        </div>
                    </div>
                    <div className="col my-auto d-flex flex-column flex-lg-row justify-content-center mb-2 mt-2 ms-xl-2" >
                        <div className="d-flex col-12 col-lg-8 justify-content-center mb-3 mb-lg-0">
                            <div className="d-flex flex-column me-2" style={{ paddingBlock: "0.5rem" }}>
                                <p className="fw-bold " style={{ textAlign: "center", margin: "0.2rem" }}>Emergency</p>
                                <div className="emergency"><PhoneIcon />1066</div>
                            </div>
                            <div className="d-flex flex-column  me-1" style={{ paddingBlock: "0.5rem" }}>
                                <p className="fw-bold " style={{ textAlign: "center", margin: "0.2rem" }}>Lifeline</p>
                                <div className="lifeline "><PhoneIcon />1860-500-1066</div>
                            </div>

                        </div>
                        <div className="my-lg-auto col-12 col-lg-4 mb-3 ">
                            <Link to="/login" className="loginsignup" style={{ marginRight: '0px' }}><a></a>Log In</Link>
                            <Link to="/signup" className=" loginsignup" style={{ marginLeft: '0.5rem' }}>Sign Up</Link>

                        </div>


                    </div>



                </div>
            </div>
            <hr />
        </>
    )
}

export default Navbar