import './Trainers.css'

function Trainers() {
    const trainers = [
        {
            name: 'Mike Johnson',
            specialty: 'Strength & Conditioning',
            experience: '12 years',
            certifications: ['NASM-CPT', 'CSCS']
        },
        {
            name: 'Sarah Williams',
            specialty: 'Yoga & Wellness',
            experience: '8 years',
            certifications: ['RYT-500', 'Wellness Coach']
        },
        {
            name: 'David Chen',
            specialty: 'CrossFit & HIIT',
            experience: '10 years',
            certifications: ['CF-L2', 'NASM-PES']
        },
        {
            name: 'Emma Rodriguez',
            specialty: 'Nutrition & Weight Loss',
            experience: '15 years',
            certifications: ['RD', 'NASM-CPT']
        }
    ]

    return (
        <section id="trainers" className="trainers">
            <span className="section-tag">Our Team</span>
            <h2>Meet Your Trainers</h2>
            <p className="section-subtitle">
                Work with certified professionals dedicated to your success
            </p>
            <div className="trainers-grid">
                {trainers.map((trainer, index) => (
                    <div key={index} className="trainer-card card">
                        <div className="trainer-image">
                            <div className="trainer-placeholder">
                                <span className="trainer-icon">👤</span>
                            </div>
                            <div className="trainer-badge">{trainer.experience}</div>
                        </div>
                        <div className="trainer-info">
                            <h3>{trainer.name}</h3>
                            <p className="trainer-specialty">{trainer.specialty}</p>
                            <div className="trainer-certs">
                                {trainer.certifications.map((cert, idx) => (
                                    <span key={idx} className="cert-badge">{cert}</span>
                                ))}
                            </div>
                            <button className="btn btn-secondary">Book Session</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Trainers
