import React from "react";


export default function PaymentPage() {
    return (
        <div className="payment-card">
            <div className="payment-header">
                <h2 className="payment-title">Payment Details</h2>
            </div>

            <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                    type="text"
                    placeholder="Enter your full name"
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Address</label>
                <input
                    type="text"
                    placeholder="Enter your address"
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="form-input"
                />
            </div>

            <button
                onClick={() => alert("Payment Successful!")}
                className="btn btn-success"
            >
                Complete Payment
            </button>
        </div>
    );
}