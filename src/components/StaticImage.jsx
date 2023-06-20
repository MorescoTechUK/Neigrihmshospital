import React, { useEffect } from 'react'
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';
import axios from 'axios';
import './StaticImage.css'

const StaticImage = () => {

  const [image, setimage] = useState("")

  const config = {
    headers: {
      Authorization: `Bearer 4b5af41ddbbe3211fb8c6209f622e85e36558e43f5bc1d21449513cfdf0ddc4e992b70bb1860e1d79ff81c6d3d31c0b9d6e529a10b3280878e55429a3e77ac430c2bcf008bbef3ac0731c623fd8c8ea0b654aee7203a04a5921847991617d6e4b5a9975e0290072a1988574a5bc14c9b9a2e947276c9ae066dd3add573a0693c`,
    }
  };

  useEffect(() => {
    axios.get("http://localhost:1337/api/neigrihms-websites?populate=*", config)
      .then(data => {
        console.log(data.data.data[0].attributes.mainImage.data.attributes.url)
        setimage(`http://localhost:1337${data.data.data[0].attributes.mainImage.data.attributes.url}`)
        console.log(image)
      })
          .catch(err => console.log(err))
      

  }, [])



  return (
    <Fade duration="1500" cascade>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className=" container1 px-0 " >
              <img src={image} alt="static image" style={{ width: "100%", height: "100%", opacity: "0.5" }} />
              <div className="centered fw-bold display-1" style={{}}>Welcome to the best Hospital of North East</div>
            </div>
            {/* <img src="..." className="d-block w-100" alt="..." /> */}
          </div>
          <div className="carousel-item">
            <div className=" container1 px-0 " >
              <img src={image} alt="static image" style={{ width: "100%", height: "100%", opacity: "0.5" }} />
              <div className="centered fw-bold display-1" style={{}}>Welcome to the best Hospital of North East</div>
            </div>
          </div>
          <div className="carousel-item">
            <div className=" container1 px-0 " >
              <img src={image} alt="static image" style={{ width: "100%", height: "100%", opacity: "0.5" }} />
              <div className="centered fw-bold display-1" style={{}}>Welcome to the best Hospital of North East</div>
            </div>
          </div>
          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      {/* <div className=" container1 px-0 " >
        <img src={image} alt="static image" style={{ width: "100%",height:"100%",opacity:"0.5"}} />
        <div className="centered fw-bold" style={{}}>Welcome to the best Hospital of North East</div>
      </div> */}

    </Fade>
  )
}

export default StaticImage