import React from 'react';

//slider
import Slider from 'react-slick'

const Entertainmentcard = (props)=>{
    return <>
    <div className="w-full h-30 px-2">
        <img className="w-full h-full rounded-xl" src={props.src} alt="Entertainment image"/>
    </div>
    </>

}

const EntertainmentcardSlider=()=>{
    const EntertainmentImages=["https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTg1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png"
    ,"https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/food-n-drinks-collection-202010061250.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/theatre-shows-collection-202012041128.png"]
    
    const settings={
        infinity:false,
        autoplay:false,
        slidesToShow:4,
        slidesToScroll:4,
        InitialSlide:0,
        responsive:[
            {
            breakpoint:1024,
            settings:{
                infinite:true,
                slidesToShow:3,
                slidesToScroll:2,

            }
            },
            {
                breakpoint:600,
                settings:{
                    infinite:true,
                    slidesToShow:2,
                    slidesToScroll:1,

                }
            },
            {
                breakpoint:480,
                settings:{
                    infinite:true,
                    slidesToShow:2,
                    slidesToScroll:1,

                }
            }
    ]

    }

    return(<>
    
    <Slider {...settings}>
        {EntertainmentImages.map((image)=>(
            <Entertainmentcard src={image}/>
  
        ))}
    </Slider>
    
    </>
    )
}
export default EntertainmentcardSlider;