import React from 'react'
import './TopWidgets.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
// import Widget from './Widget';

const TopWidgets = () => {

    const [widgets, setwidgets] = useState([])

    useEffect(() => {
        axios.get("http://localhost:1337/api/neigrihms-websites?populate=*", config)
            .then(data => {
                console.log(data.data.data[0].attributes.topWidgets.array)
                setwidgets(data.data.data[0].attributes.topWidgets.array)
                console.log(widgets)
            })
            .catch(err => console.log(err))


    }, [])

    const config = {
        headers: {
            Authorization: `Bearer `,
        }
    };

    // console.log(widgets)


    return (
        <section className="top-widgets my-4">
            <div className="widget-mr">
                <div className="container-fluid text-center">
                    <div className="row ">

                        <div className="d-flex flex-wrap mx-auto justify-content-center" >
                            {widgets.map(((widget) => (
                                // console.log(hi)
                                // <Widget image={widget.image} data={ widget.data} />
                                <div className="col-2 widget  py-2  my-3 " style={{ width: "14rem" ,marginInline:"1rem"}}>
                                    <a href="#" target="_blank" className="tp_widget" id="btn-cta-bb-book-appointment">
                                        <img src={widget.image} alt="icon" width="64" />
                                        <h5>{widget.data }</h5>
                                    </a>
                                </div>

                            )))}
                            


                        </div>


                    </div>


                </div>
            </div>

            <div className="clear-fix"></div>

        </section>
    )
}

export default TopWidgets