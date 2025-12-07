import { useState } from 'react'
import './Pricing.css'

function Pricing() {
    const [billingCycle, setBillingCycle] = useState('monthly')

    const plans = [
        {
            name: 'Basic',
            monthlyPrice: 29,
            yearlyPrice: 290,
            features: [
                'Access to gym equipment',
                'Locker room access',
                'Free WiFi',
                'Mobile app access'
            ],
            popular: false
        },
        {
            name: 'Pro',
            monthlyPrice: 59,
            yearlyPrice: 590,
            features: [
                'Everything in Basic',
                'Unlimited group classes',
                '2 personal training sessions/month',
                'Nutrition consultation',
                'Free guest passes (2/month)'
            ],
            popular: true
        },
        {
            name: 'Elite',
            monthlyPrice: 99,
            yearlyPrice: 990,
            features: [
                'Everything in Pro',
                'Unlimited personal training',
                'Custom meal plans',
                'Priority booking',
                'Spa & sauna access',
                'Free merchandise'
            ],
            popular: false
        }
    ]

    return (
        <section id="pricing" className="pricing">
            <span className="section-tag">Pricing Plans</span>
            <h2>Choose Your Plan</h2>
            <p className="section-subtitle">
                Flexible pricing options to fit your budget and goals
            </p>

            <div className="billing-toggle">
                <button
                    className={billingCycle === 'monthly' ? 'active' : ''}
                    onClick={() => setBillingCycle('monthly')}
                >
                    Monthly
                </button>
                <button
                    className={billingCycle === 'yearly' ? 'active' : ''}
                    onClick={() => setBillingCycle('yearly')}
                >
                    Yearly <span className="save-badge">Save 20%</span>
                </button>
            </div>

            <div className="pricing-grid">
                {plans.map((plan, index) => (
                    <div key={index} className={`pricing-card card ${plan.popular ? 'popular' : ''}`}>
                        {plan.popular && <div className="popular-badge">Most Popular</div>}
                        <h3>{plan.name}</h3>
                        <div className="price">
                            <span className="currency">$</span>
                            <span className="amount">
                                {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                            </span>
                            <span className="period">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                        </div>
                        <ul className="features-list">
                            {plan.features.map((feature, idx) => (
                                <li key={idx}>
                                    <span className="check-icon">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Pricing
