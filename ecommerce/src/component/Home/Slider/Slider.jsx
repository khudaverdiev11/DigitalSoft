import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
/* import slide1 from '../../img/slide-1.jpg';
import slide2 from '../../img/slide-2.jpg';
import slide3 from '../../img/slide-3.jpg'; */
import Data from '../../../Data/slider.json';
import SliderItems from '../../../Views/SliderItems';

const Slider=()=>{
        return (
            <div className="slider mb-5">   
            <Carousel showArrows={false} showStatus={false} infiniteLoop={true} showThumbs={false} swipeable={true} emulateTouch={true}>
                {
                    Data.map((slide)=>{
                        return <SliderItems 
                        key={slide.id}
                        img={slide.img}
                        offer={slide.offer}
                        title={slide.title}
                        details={slide.details}
                        />
                    })
                }           
            </Carousel>
            </div>
        );
    }

export default Slider

