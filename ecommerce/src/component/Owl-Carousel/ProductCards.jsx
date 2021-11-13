import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from './Card';
import DataCards from '../../Data/dataCards.json'

const ProductCards = (props) => {
    return (
        <>
            <div className="container">
                <OwlCarousel className='owl-theme' loop margin={10} items={4} >
                    {DataCards.map((card) => {
                        return <Card 
                        key={card.id}
                        img={card.image}
                        meta={card.meta}  
                        name={card.name} 
                        rating={card.rating} 
                        price={card.price} />
                    })}
                </OwlCarousel>
            </div>
        </>
    )
}

export default ProductCards
