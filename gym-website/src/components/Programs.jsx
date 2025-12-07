import './Programs.css'

function Programs() {
    const programs = [
        {
            icon: '💪',
            title: 'Strength Training',
            description: 'Build muscle and increase power with our comprehensive strength programs',
            features: ['Free Weights', 'Machines', 'Progressive Overload']
        },
        {
            icon: '🏃',
            title: 'Cardio Fitness',
            description: 'Improve endurance and burn calories with high-energy cardio workouts',
            features: ['HIIT Classes', 'Running', 'Cycling']
        },
        {
            icon: '🧘',
            title: 'Yoga & Flexibility',
            description: 'Enhance mobility and find balance with guided yoga sessions',
            features: ['Hatha Yoga', 'Vinyasa', 'Stretching']
        },
        {
            icon: '🥊',
            title: 'Boxing & MMA',
            description: 'Learn self-defense while getting an intense full-body workout',
            features: ['Bag Work', 'Sparring', 'Technique']
        },
        {
            icon: '🏋️',
            title: 'CrossFit',
            description: 'High-intensity functional movements for total body conditioning',
            features: ['WODs', 'Olympic Lifts', 'Metabolic Conditioning']
        },
        {
            icon: '👥',
            title: 'Group Classes',
            description: 'Stay motivated with energetic group fitness classes',
            features: ['Zumba', 'Spin', 'Boot Camp']
        }
    ]

    return (
        <section id="programs" className="programs">
            <span className="section-tag">Our Programs</span>
            <h2>Choose Your Path</h2>
            <p className="section-subtitle">
                Discover the perfect program to match your fitness goals and lifestyle
            </p>
            <div className="programs-grid">
                {programs.map((program, index) => (
                    <div key={index} className="program-card card">
                        <div className="program-icon">{program.icon}</div>
                        <h3>{program.title}</h3>
                        <p className="program-description">{program.description}</p>
                        <ul className="program-features">
                            {program.features.map((feature, idx) => (
                                <li key={idx}>
                                    <span className="check-icon">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-secondary">Learn More</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Programs
