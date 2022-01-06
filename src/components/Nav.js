import React from "react"
import world from "../images/world.jpg"

export default function Nav(){
    return(
        <nav className="navBar">
            <img className="world" src={world} alt="world"  />
            <h3>my travel journal.</h3>
        </nav>
    )
}