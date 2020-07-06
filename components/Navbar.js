import Link from 'next/link'

const Navbar = () => (
    <nav className="Navbar">
            {/* <span className="logo">csgoprofit</span> */}
            <Link href="/"><img src="/logo.svg" alt="logo" className="logo"/></Link> 
            <ul className="Navbar-ul">
                <li><Link href="/"><a  className="nav-link">Home</a></Link></li>
                <li><Link href="/blog"><a  className="nav-link">Blog</a></Link></li>
            </ul>
    </nav>
);

export default Navbar;