
import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'

const pricingPromise = fetch('pricingData.json').then (res => res.json());

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Suspense fallback = {<span className="loading loading-spinner loading-md"></span>}>
          <PricingOptions pricingPromise = {pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
