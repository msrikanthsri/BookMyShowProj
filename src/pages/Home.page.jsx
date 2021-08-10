import React from 'react'
import EntertainmentcardSlider from '../components/Entertainment/Entertainmentcard.component'
 
const Homepage=()=>{
    return <>

    <div className="container mx-auto px-4">
    <h1 className="text-xl font-bold text-gray-800 my-3">The best of Entertainment</h1>
    <EntertainmentcardSlider/>
    </div>
    </>
}

export default Homepage