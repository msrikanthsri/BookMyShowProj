import React from "react"

//import react sliders
import HeroSlider from "react-slick";



//import arrow component
import {PrevArrow,NextArrow} from './Arrows.components'

const HeroCarousal=()=>{
    const settingsLG={
        arrows:true,
        dots:true,
        autoplay:true,
        centerMode:true,
        infinite:true,
        centerPadding:"300px",
        slidesToShow:1,
        slidesToScroll:1,
        speed:500,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
        
    }

    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
      };
      const images=["https://images.unsplash.com/photo-1627940178887-59a5ecae52ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1623944890676-9d5d57a6f7e9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
"https://images.unsplash.com/photo-1593642633279-1796119d5482?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
"https://images.unsplash.com/photo-1628275180752-859029dc1605?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
"https://images.unsplash.com/photo-1628221448589-e80ec76d9d08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"]
    return(
        <>
            <div className="lg:hidden">
            <HeroSlider {...settings}>
                {images.map((image)=>(
                    <div className="w-full h-56 md:h-80 py-3">
                    <img src={image} alt="testing" className="w-full h-full"/>
                    </div>
                ))} 
            </HeroSlider>
            </div>
            <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
                {images.map((image)=>(
                    <div className="w-full h-96 px-2 py-3">
                    <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                    </div>
                ))}
            </HeroSlider>
            </div>
        </>
    )
}

export default HeroCarousal