import React from 'react'
import { useParams } from 'react-router'
import DataCards from '../../Data/dataCards.json'

const ProductDetail = () => {
    const { productId } = useParams()
    const thisProduct = DataCards.find(card => card.name === productId)
    return (
        <div className="container detailpage">
            <div className="row detailrow justify-content-around">
                <div className="col-md-8 leftcol">
                    <div className="row insiderow">
                        <div className="col-md-6 imgcol">
                            <img className="detailpageimg" src={thisProduct.image} alt="image not found" />
                        </div>
                        <div className="col-md-6 contentcol">
                            <h3 className="productname">{thisProduct.name}</h3>
                            <p className="rating">{thisProduct.rating} rating</p>
                            <p className="aboutproduct">{thisProduct.about}</p>
                            <h6>Key Features : </h6>
                            <ul className="keyfeatures">
                                <li className="feature">Speed: {thisProduct.speed}</li>
                            </ul>
                            <ul className="keyfeatures">
                                <li className="feature">Power Source: {thisProduct.powersource}</li>
                            </ul>
                            <ul className="keyfeatures">
                                <li className="feature">Battery Cell Type: {thisProduct.batterycelltype}</li>
                            </ul>
                            <ul className="keyfeatures">
                                <li className="feature">Voltage: {thisProduct.voltage}</li>
                            </ul>
                            <ul className="keyfeatures">
                                <li className="feature">Battery Capacity: {thisProduct.batterycapacity}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 rightcol">
                    <div className="btn btn-danger">SALE</div><br /><br />
                    <h2>{thisProduct.price}</h2><br />
                    <h6>SKU : {thisProduct.meta}</h6><hr />
                    <h6>Brand : {thisProduct.brand}</h6><hr />
                    <h6>Country : {thisProduct.country}</h6><hr />
                    <h6>Vendor Code : {thisProduct.vendorcode}</h6><hr />
                    <p>Material:</p>
                    <div className="materials d-flex flex-row justify-content-between">
                        <button>Steel</button>
                        <button>Aluminium</button>
                        <button>Thorium</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail
