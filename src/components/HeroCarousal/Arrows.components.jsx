import React from 'react';

//classname
//inline style
//onclick
export const PrevArrow = (props)=>{
    return <>
    <div className={props.className} style={{...props.style,backgroundColor:"black"}} onClick={props.onClick}/>
    </>;
}

export const NextArrow=(props)=>{
    return <><div className={props.className} style={{...props.style,backgroundColor:"black"}} onClick={props.onClick}/>
    </>
}