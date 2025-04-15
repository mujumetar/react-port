import React, { useState } from 'react'

const Project = () => {
    const proj = [
        {
            name: "E-commerce",
            user: "@muju_metar",
            type: "React,js,html,css",
            img: `/img/profile.jpg`,
            git: "https://github.com/mujumetar/react-ecom",
            live: "https://github.com/mujumetar/react-ecom",
            time: new Date()
        },
        {
            name: "E-commerce",
            user: "@muju_metar",
            type: "React,js,html,css",
            img: `/img/profile.jpg`,
            git: "https://github.com/mujumetar/react-ecom",
            live: "https://github.com/mujumetar/react-ecom",
            time: new Date()
        },
        {
            name: "E-commerce",
            user: "@muju_metar",
            type: "React,js,html,css",
            img: `/img/profile.jpg`,
            git: "https://github.com/mujumetar/react-ecom",
            live: "https://github.com/mujumetar/react-ecom",
            time: new Date()
        },
        {
            name: "E-commerce",
            user: "@muju_metar",
            type: "React,js,html,css",
            img: `/img/profile.jpg`,
            git: "https://github.com/mujumetar/react-ecom",
            live: "https://github.com/mujumetar/react-ecom",
            time: new Date()
        },
        {
            name: "E-commerce",
            user: "@muju_metar",
            type: "React,js,html,css",
            img: `/img/profile.jpg`,
            git: "https://github.com/mujumetar/react-ecom",
            live: "https://github.com/mujumetar/react-ecom",
            time: new Date()
        },

    ]
    return (
        <>
            <div className="container">
                <div className="row g-3">
                    {
                        proj.map((ele) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm border p-3">
                                    <div className="row">
                                        <div className="col-12">
                                            <p className='fw-bolder'> {ele.user}</p>
                                        </div>
                                        <div className="col-12">
                                            <p> {ele.name}</p>
                                        </div>
                                        <div className="col-12">
                                            <p>{ele.type}</p>
                                        </div>
                                    </div>
                                    <img src={ele.img} alt={ele.img} />

                                    <div className="row py-2 my-1" >
                                        <div className="col-lg-6">
                                            <button className='btn btn-sm btn-outline-warning w-100'>
                                                <a href={ele.git} target='_blank' className='text-decoration-none'>Git</a>
                                            </button>
                                        </div>
                                        <div className="col-lg-6">
                                            <button className='btn btn-sm btn-outline-warning w-100'>
                                                <a href={ele.live} target='_blank' className='text-decoration-none text-dark'>Live</a>
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            )
                        })
                    }
                </div>



            </div>
        </>

    )
}

export default Project