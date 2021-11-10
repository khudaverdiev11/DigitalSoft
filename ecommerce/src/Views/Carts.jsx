import React from 'react'

const Carts=()=> {
    return (
        <div className="carts">
            <div className="cart">
                <div className="cartImg">
                    <img src="https://cdn.discordapp.com/attachments/906592774722314241/906601898344345681/slide-1.jpg" alt="" />
                    <div className="addcart">
                    <i class="far fa-heart"></i>
                    <i class="fas fa-cart-plus"></i>
                    </div>

                </div>
                <div className="cartAbout">
                    <p>SKU:855-7867-G</p>
                    <h4>Brandix Manuel Five Speed Grearbox</h4>
                    <span>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i> 
                        <i class="far fa-star"></i> 
                        <i class="far fa-star"></i> 
                        <i class="far fa-star"></i>
                    4on 6 reviews</span>
                    <h2>$879.00</h2>

                </div>

            </div>
            
        </div>
    )
}

export default Carts
