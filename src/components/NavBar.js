import React from "react"
import "../style.css"
export default function NavBar()
{
    return(
        <nav className="nav-bar">
            <span><i className="nav--icon" class="fa-solid fa-feather fa-2xl"></i></span>
            <div className="nav--title">
                <h1>my travel journal</h1>
            </div>
        </nav>
    )
}