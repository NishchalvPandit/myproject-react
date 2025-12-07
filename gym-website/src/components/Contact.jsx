import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', phone: '', message: '' })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <span className="section-tag">Get In Touch</span>
                    <h2>Start Your Fitness Journey Today</h2>
                    <p className="contact-description">
                        Ready to transform your life? Contact us for a free consultation and tour of our facility.
                    </p>

                    <div className="info-items">
                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <div className="info-content">
                                <h4>Location</h4>
                                <p>123 Fitness Street, Gym City, GC 12345</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">📞</div>
                            <div className="info-content">
                                <h4>Phone</h4>
                                <p>(555) 123-4567</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">✉️</div>
                            <div className="info-content">
                                <h4>Email</h4>
                                <p>info@ironfit.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">⏰</div>
                            <div className="info-content">
                                <h4>Hours</h4>
                                <p>Mon-Fri: 5AM - 11PM<br />Sat-Sun: 7AM - 9PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="contact-form card" onSubmit={handleSubmit}>
                    <h3>Send Us a Message</h3>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="logo">
                            <span className="logo-icon">💪</span>
                            <span className="logo-text">IRON<span className="highlight">FIT</span></span>
                        </div>
                        <p>Transform your body, transform your life.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <a href="#about">About</a>
                        <a href="#programs">Programs</a>
                        <a href="#trainers">Trainers</a>
                        <a href="#pricing">Pricing</a>
                    </div>
                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="#" className="social-link">Facebook</a>
                            <a href="#" className="social-link">Instagram</a>
                            <a href="#" className="social-link">Twitter</a>
                            <a href="#" className="social-link">YouTube</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 IronFit Gym. All rights reserved.</p>
                </div>
            </footer>
        </section>
    )
}

export default Contact
