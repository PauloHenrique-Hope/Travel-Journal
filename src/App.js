import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Data from "./components/Data"

export default function App(){

const cards = Data.map(item => {
    return(
        <Hero
        id={item.id}
        item={item}
        />
    )
})

    return(
        <div>
            <NavBar/>
            {cards}
        </div>
    )
}