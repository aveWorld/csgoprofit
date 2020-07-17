import Link from 'next/link'
import React, {useState, useEffect} from 'react'

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false)

    const toggleHamburger = () => {
        hamburger? setHamburger(false) : setHamburger(true)
    }
    return (
    <nav className="Navbar">
            <Link href="/"><img src="/logo.svg" alt="logo" className="logo"/></Link> 
            <ul className="Navbar-ul">
                <li><Link href="/giveaway"><a  className="nav-link">Give Away</a></Link></li>
                <li><Link href="/promocodes"><a  className="nav-link">Free Skins</a></Link></li>
                <li><Link href="/blog"><a  className="nav-link">Blog</a></Link></li>
            </ul>
            <div className={!hamburger?"button_container" : "button_container active"} onClick={toggleHamburger}><span className="top"></span><span className="middle"></span><span className="bottom"></span></div>
            <div className={!hamburger?"overlay" : "overlay open"}>
            <nav className="overlay-menu">
                <ul>
                <li><Link href="/giveaway"><a>Give Away</a></Link></li>
                <li><Link href="/promocodes"><a>Free Skins</a></Link></li>
                <li><Link href="/blog"><a>Blog</a></Link></li>
                </ul>
            </nav>
            </div>
    </nav>
    )
};

export default Navbar;