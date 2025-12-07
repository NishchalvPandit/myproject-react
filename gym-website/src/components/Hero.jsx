import './Hero.css'

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <span className="hero-tag">Transform Your Body</span>
                    <h1 className="hero-title">
                        BUILD YOUR<br />
                        <span className="gradient-text">DREAM PHYSIQUE</span>
                    </h1>
                    <p className="hero-description">
                        Join the ultimate fitness experience with world-class trainers,
                        state-of-the-art equipment, and a community that pushes you to be your best.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">Start Free Trial</button>
                        <button className="btn btn-secondary">View Programs</button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat">
                            <h3>5000+</h3>
                            <p>Active Members</p>
                        </div>
                        <div className="stat">
                            <h3>50+</h3>
                            <p>Expert Trainers</p>
                        </div>
                        <div className="stat">
                            <h3>100+</h3>
                            <p>Programs</p>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="hero-image-bg"></div>
                    <div className="floating-card card-1">
                        <span className="icon">🔥</span>
                        <div>
                            <h4>500+</h4>
                            <p>Calories Burned</p>
                        </div>
                    </div>
                    <div className="floating-card card-2">
                        <span className="icon">⏱️</span>
                        <div>
                            <h4>45 min</h4>
                            <p>Workout Time</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-scroll">
                <span>Scroll Down</span>
                <div className="scroll-indicator"></div>
            </div>
        </section>
    )
}

export default Hero
