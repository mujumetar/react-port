import React from 'react'

export const About = () => {
    return (
        <>
            <div className="container border">
                <div className="row">
                    <div className="col-lg-4 col-12 muju-main2 border my-5 mx-auto">
                        <div className="muju-main container" id="mujju">
                            <img src="https://mighty.tools/mockmind-api/content/human/80.jpg" alt="muzammil" className="img-fluid muju" />
                        </div>
                    </div>
                 

                    <div className="col-lg-7 col-12  d-flex align-items-center justify-content-center">
                        <div className="row text-center">
                            <div className="col-lg-12 ">
                                <h1 className="display-1 fw-bolder name uppercase">MuZammil</h1>
                            </div>
                            <div className="col-lg-12 ">

                                <div className="container">
                                    <div className="typing-container">
                                        <h1> I AM <br /> &nbsp;<span className="span" typing-speed="70" typing-delay="800"
                                            words="Web Developer,Web Designer,Student"></span> </h1>
                                    </div>
                                </div>


                            </div>
                            <div className="col-lg-12 ">
                                <p className="mono text-center">
                                    Hii 👋 Nice To Meet You
                                </p>
                                <p className="mono text-center ">
                                    I’m a passionate web developer skilled in HTML, CSS, JavaScript, and responsive design, focused on
                                    creating user-friendly websites.
                                </p>
                            </div>
                            <div className="col-lg-12 ">




                                <a href="tel:7874536227"><button className="btn btn-outline-success"><i className="ri-phone-line"></i> &nbsp; Hire
                                    me</button></a>
                                <a href="/img/muzammil-resume.pdf" target="_blank" download=""><button id="skills" className="btn btn-outline-success">
                                    <i className="ri-download-2-line"></i> &nbsp;Resume
                                </button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
