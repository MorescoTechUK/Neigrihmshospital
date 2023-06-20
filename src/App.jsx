import React from 'react'
import NavbarTop from './components/navbar/NavbarTop'
import Navbar from './components/navbar/Navbar'
import Options from './components/options/Options'
import StaticImage from './components/StaticImage'
import TopWidgets from './components/topwidgets/TopWidgets'
import Specialities from './components/specialities/Specialities'
import ChooseHealthcare from './components/choosehealthcare/ChooseHealthcare'
import HospitalsIndia from './components/hospitalsindia/HospitalsIndia'
import InternationalPatient from './components/internationalpatients/InternationalPatient'
import WhatsNew from './components/whatsnew/WhatsNew'
import Disclaimer from './components/disclaimer/Disclaimer'
import Footer from './components/footer/Footer'
import Login  from './components/loginsignup/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup  from './components/loginsignup/signup'
import LoginPage from './components/loginsignup/LoginPage'

const App = () => {

  const isLoggedin = window.localStorage.getItem("authenticated") || window.sessionStorage.getItem("authenticated");

  return (
    <>
      <Router basename="/Neigrihmshospital/">
        <Routes>
          <Route exact path='/' element={[
            <NavbarTop />,
            <Navbar />,
            <Options />,
            <StaticImage />,
            <TopWidgets />,
            <Specialities />,
            <ChooseHealthcare />,
            <HospitalsIndia />,
            <InternationalPatient />,
            <WhatsNew />,
            <Disclaimer />,

            <Footer />
          ]}/>
          <Route exact path='/login' element={isLoggedin?<LoginPage/> : <Login/>} />
          <Route exact path='/signup' element={isLoggedin ? <LoginPage /> : <Signup/>} />
          <Route exact path='/patient' element={ <LoginPage/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App