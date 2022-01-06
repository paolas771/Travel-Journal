import React from "react"
import cancun from "../images/cancun.jpg"
import islaMujeres from "../images/islaMujeres.jpeg"
import USO from "../images/USO.JPG"
import location from "../images/location.jpg"

export default function Trips(props){
    let imageUrl
    if(props.adventure.imageUrl === "cancun.jpg"){
        imageUrl = cancun
    }else if(props.adventure.imageUrl === "islaMujeres.jpeg"){
        imageUrl = islaMujeres
    }else if(props.adventure.imageUrl === "USO.JPG"){
        imageUrl = USO
    }
    return(
        <div className="tripMainDiv">
            
            <img src={imageUrl} className="image"  alt={props.adventure.title}/>
            <section className="tripInfo">
                <section className="tripLocation">
                    <img src={location} alt="location symbol" width="20" height="20"/>
                    <p className="location">{props.adventure.location}</p>
                    <a className="url" href={props.adventure.googleMapsUrl}>View On Google Maps</a>
                </section>
                <h1 className="title">{props.adventure.title}</h1>
                <p className="date">{props.adventure.startDate} - {props.adventure.endDate}</p>
                <p className="description">{props.adventure.description}</p>
            </section>
        </div>
        
    )
}