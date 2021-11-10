import React from 'react'

const SliderItems=(props)=> {
    return (
        <div>
        <img src={props.img} />
        <div className="slideText">
        <div><p>{props.offer}</p></div>
        <h1>{props.title}</h1>
        <p>{props.details}</p>
        </div>
        
    </div>
    )
}

export default SliderItems
