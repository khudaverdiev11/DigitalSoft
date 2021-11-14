import React from 'react'
import Header from './Header/Header'
import Sliderone from './Slider/Slider'
import ProductCards from '../Home/Owl-Carousel/ProductCards'


const Home = () => {
    return (
        <div>
            <Header />
            <Sliderone />
            <ProductCards />
        </div>
    )
}

export default Home
