import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from './Card';
import DataCards from '../../../Data/dataCards.json'
import { Link } from 'react-router-dom'
import Shopping from '../../Shopping/Shopping'

const ProductCards = () => {
    const [cart, setCart] = useState([]);
    const [alert, setAlert] = useState("");
    const [cartTotal, setCartTotal] = useState(0);
    console.log(cart);
    useEffect(() => {
        total();
    }, [cart]);

    const addToCart = (el) => {
        console.log(cart);
        let addIt = true;
        let count = 0;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === el.id)
                count++;
            if (count > 1) {
                addIt = false;
            }
        }
        if (addIt) {
            setCart([...cart, el]);
            setAlert("");
        }
        else setAlert(`${el.name} is already in your cart`);
    };
    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    };

    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
        setAlert("");
    }
    const listItem = DataCards.map((el) => (
        <Card
            key={el.id}
            img={el.image}
            meta={el.meta}
            name={<Link to={`/ProductDetail/${el.name}`}>{el.name}</Link>}
            rating={el.rating}
            price={el.price}
            addcart={() => addToCart(el)}
        />
    ))
    const cartItems = cart.map((el) => (
        <Shopping
            key={el.id}
            name={el.name}
            price={el.price}
            addcart={() => removeFromCart(el)}
        />
    ))
    return (
        <>
            <div className="container">
                <OwlCarousel className='owl-theme' loop margin={10} items={4} >
                    {listItem}
                </OwlCarousel>
                <h1>Sebet:</h1>
                {cartItems}
                <div className="total"> Total: ${cartTotal}</div>
                <div>Alert Message: {alert}</div>
            </div>
        </>
    );
}

export default ProductCards
