import { useEffect } from "react";
import { useState } from "react";

const Project = () => {

    const [newdata, setNewData] = useState([]);

    async function handleApi() {
        const res = await fetch('https://port-13d6f-default-rtdb.firebaseio.com/project.json')
        const data = await res.json();
        const newdata = Object.values(data)
        const proj = setNewData(newdata)

        console.log(newdata)
    }

    useEffect(() => {
        handleApi()

    }, [])

    return (

        <div className="container" >
            <div className="row g-3">
                {
                    newdata.map((ele) => {
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
                                <img className="img-fluid" src={ele.img} alt={ele.img} />
                                <div className="row py-2 my-1" >
                                    <div className="col-lg-6">
                                        <button className='btn btn-sm btn-outline-warning w-100'>
                                            <a href={ele.git} target='_blank' className='text-decoration-none'>git</a>
                                        </button>
                                    </div>
                                    <div className="col-lg-6">
                                        <button className='btn btn-sm btn-outline-warning w-100'>
                                            <a href={ele.live} target='_blank' className='text-decoration-none text-dark'>live</a>
                                        </button>
                                    </div>
                                </div>


                            </div>
                        )
                    })
                }
            </div>




        </div>

    )

}
export default Project;