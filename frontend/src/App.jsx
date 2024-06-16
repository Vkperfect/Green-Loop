import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Sell from './components/Sell'
import Services from './components/Services'
import Prices from './components/Prices'
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from './components/Signin'
import Signup from './components/Signup'
import SellersData from './components/SellersData'



const App = () => {
  

  return (
    <div>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/sell" element={<Sell />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/services" element={<Services />} />
        <Route path='/signin'   element={<Signin/>}/>
        <Route path='/signup'   element={<Signup/>}/>
        <Route path='/sellerdata'   element={<SellersData/>}/>
      </Routes>
      <FloatingWhatsApp
        phoneNumber="+917419067524"
        accountName="GreenLoop"
        avatar="/gl-logo.png"
        chatMessage="Welcome to GreenLoop, we are here to help you in your waste management."
        messageDelay="2"
        allowClickAway="true"
      />
      <Footer />
    </Router>
    </div>
  )
}

export default App