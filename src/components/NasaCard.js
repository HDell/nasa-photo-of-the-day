import React, {useEffect, useState} from "react";

const NasaCard = (props) => {

    return (
        <div>
            <h1>Title: {props.title}</h1>
            <h2>Date: {props.date}</h2>
            <p>Description: {props.explanation}</p>
            <img src={props.hdurl}/>
        </div>
    )
}

export default NasaCard;