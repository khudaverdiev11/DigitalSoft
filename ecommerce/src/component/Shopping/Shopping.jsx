import React from 'react'

const Shopping = (props) => {
    return (
        <div className="shopping">
            <div className="box">
                <p>Name:{props.name}</p>
                <p>Price:{props.price}</p>
                <input type="submit" value='Remove' onClick={props.addcart} />
            </div>
        </div>
    )
}

export default Shopping
