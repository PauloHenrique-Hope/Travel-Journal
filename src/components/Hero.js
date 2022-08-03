import React from "react"
import "../style.css"

export default function Hero(props)
{
    return(
        <section className="hero-content">
            
                <div className="image--container">
                    <img src={props.item.img}alt="Mount Fuji" className="hero--image"/>
                </div>
            
            <div className="hero--info">
                <span className="hero--icon"> <i class="fa-solid fa-location-dot fa-lg"></i>
                <span className="hero--location">{props.item.location}</span>
                </span>
                <span className="hero--link"><a href="#">View ON Google Maps</a></span>
                <h1 className="hero--title">{props.item.title}</h1>
                <span className="hero--date">{props.item.date}</span>
                <p className="hero--text">{props.item.content}</p>
            </div>
           
        </section>
    )
};