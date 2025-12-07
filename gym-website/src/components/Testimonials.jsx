import { useState } from 'react'
import './Testimonials.css'

function Testimonials() {
    const testimonials = [
        {
            name: 'Jessica Martinez',
            role: 'Lost 30 lbs',
            text: 'IronFit changed my life! The trainers are amazing and the community is so supportive. I never thought I could achieve these results!',
            rating: 5
        },
        {
            name: 'Tom Anderson',
            role: 'Gained 15 lbs muscle',
            text: 'Best gym I\'ve ever been to. The equipment is top-notch and the programs are perfectly designed for my goals.',
            rating: 5
        },
        {
            name: 'Lisa Chen',
            role: 'Marathon Runner',
            text: 'The training here helped me complete my first marathon. The coaches really know their stuff and push you to be your best.',
            rating: 5
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section id="testimonials" className="testimonials">
            <span className="section-tag">Testimonials</span>
            <h2>Success Stories</h2>
            <p className="section-subtitle">
                Hear from our members who transformed their lives
            </p>

            <div className="testimonial-container">
                <button className="nav-btn prev" onClick={prevTestimonial}>‹</button>

                <div className="testimonial-card card">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">{testimonials[currentIndex].text}</p>
                    <div className="rating">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <span key={i} className="star">★</span>
                        ))}
                    </div>
                    <div className="testimonial-author">
                        <div className="author-avatar">
                            <span className="avatar-icon">👤</span>
                        </div>
                        <div className="author-info">
                            <h4>{testimonials[currentIndex].name}</h4>
                            <p>{testimonials[currentIndex].role}</p>
                        </div>
                    </div>
                </div>

                <button className="nav-btn next" onClick={nextTestimonial}>›</button>
            </div>

            <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Testimonials
