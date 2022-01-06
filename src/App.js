import React from "react"
import Nav from "./components/Nav"
import Trips from "./components/Trips"
import data from "./data"

export default function App(){
    const tripElements = data.map(adventure => {
        return(
            <Trips 
                adventure={adventure}
            />
        )
    })
    
    return(
        <div>
            <Nav />
            {tripElements}
        </div>
    )
}