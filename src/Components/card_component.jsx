import React from 'react'

function Card_Component(props) {
    return (

        <div style={{ display: "inline-block", marginLeft: "50px" }} onClick={props.onclick} className="card  ">

            <img style={{ width: "250px" }} src={props.src} className="card-img-top w-full" alt="..." />

            <div className="">
                <p className="">{props.title}</p>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </div>
        </div>

    )
}

export default Card_Component