import React from 'react'
import './card.css'
const Card = ({props}) => {
    return (
        <>
            <div className="card" >               
                <img src={props.img} alt="hhh" width={'142px'} height={'184px'}  />
                <h4 style={{margin:"10px 0 4px 0"}}><b>{props.name}</b></h4>
                <h5 style={{color:"#ee415e",fontSize:'14px',marginBottom:'4px'}}>{props.post}</h5>
                <p><b>{props.exp}</b> experience</p>
                <p>{props.desc}</p>
            </div>
        </>
    )
}

export default Card