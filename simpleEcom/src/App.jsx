import React, { useState } from "react";
import ProductCard from "./ProductCard";
import PaymentPage from "./PaymentPage";
import "./App.css";

export default function App() {
  const [step, setStep] = useState("product");
  const [size, setSize] = useState("");


  return (
    <div className="app-container">
      {step === "product" && (

        <ProductCard
          size={size}
          setSize={setSize}
          setStep={setStep}
        />
      )}


      {step === "payment" && <PaymentPage />}
    </div>
  );
}