import React from 'react'

const Card = (props) => {
    return (
        <div className="card" style={{ width: '16rem' }}>
            <img className="card-img-top" src={props.img} alt="Card image cap" />
            <div className="card-body">
                <p className="card-title">SKU : {props.meta}</p>
                <h5 className="card-text">{props.name}</h5>
                <p className="card-text">{props.rating}</p>
                <div className="card-footer d-flex flex-row justify-content-between">
                    <a href="#" className="btn btn-primary">{props.price}</a>
                    <i className="fas fa-cart-plus"></i>
                </div>
                <h6>{props.link}</h6>
            </div>
        </div>
    )
}

export default Card
