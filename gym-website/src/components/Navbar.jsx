import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo">
                    <span className="logo-icon">💪</span>
                    <span className="logo-text">IRON<span className="highlight">FIT</span></span>
                </div>

                <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
                    <a href="#trainers" onClick={() => setMenuOpen(false)}>Trainers</a>
                    <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </div>

                <button className="btn btn-primary nav-cta">Join Now</button>

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
