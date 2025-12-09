import { useState } from 'react'
import Header from './Header'
import SizeSelector from './sizeSelector'
import Toppings from './toppings'
import ExtraToppings from './extratoppings'
import PriceCalculator from './PriceCalculator'



function App() {
  const [size, setSize] = useState('small');
  const [topping, setTopping] = useState('');
  const [extraToppings, setExtraToppings] = useState([]);

  return (
    <div>
      <Header />
      <SizeSelector size={size} setSize={setSize} />
      <Toppings topping={topping} setTopping={setTopping} />
      <ExtraToppings extraToppings={extraToppings} setExtraToppings={setExtraToppings} />
      <PriceCalculator size={size} topping={topping} extraToppings={extraToppings} />
    </div>
  );
}

export default App

