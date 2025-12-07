import './About.css'

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-image">
                    <div className="about-image-wrapper">
                        <div className="image-placeholder">
                            <span className="placeholder-icon">🏋️</span>
                        </div>
                        <div className="experience-badge">
                            <h3>15+</h3>
                            <p>Years of Excellence</p>
                        </div>
                    </div>
                </div>
                <div className="about-content">
                    <span className="section-tag">About Us</span>
                    <h2>Why Choose IronFit?</h2>
                    <p className="about-description">
                        We're not just a gym – we're a community dedicated to transforming lives through fitness.
                        With cutting-edge equipment, expert trainers, and personalized programs, we help you achieve
                        results that last.
                    </p>
                    <div className="about-features">
                        <div className="feature">
                            <div className="feature-icon">🎯</div>
                            <div className="feature-content">
                                <h4>Personalized Training</h4>
                                <p>Custom workout plans tailored to your goals and fitness level</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">⚡</div>
                            <div className="feature-content">
                                <h4>State-of-the-Art Equipment</h4>
                                <p>Latest fitness technology and premium equipment</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">👥</div>
                            <div className="feature-content">
                                <h4>Expert Coaches</h4>
                                <p>Certified trainers with years of experience</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">📈</div>
                            <div className="feature-content">
                                <h4>Track Progress</h4>
                                <p>Advanced tracking tools to monitor your journey</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </section>
    )
}

export default About
