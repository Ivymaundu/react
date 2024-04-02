// import React from "react";
import './layout.css'
import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
       <div className="layout">
        <header className="layout-header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">contactUs</Link>
                    </li>
                    <li>
                        <Link to="/logout">login</Link>
                    </li>
                </ul>
                </nav>
                <main>
                    <Outlet/>
                </main>
                <footer>

                </footer>
           
        </header>
       </div>
    )
}

export default Layout