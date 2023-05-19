import logo from './logo.svg';

import './index.css';
import { useRef, useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Logo from './Assets/Logo.jpg'
import About from './Components/About';
import Scroll from './Components/Scroll';

function App() {
 

  return (
   <>
   <Navbar/>
   <Hero/>
   <Scroll/>
   <About/>
   <FloatingWhatsApp darkMode={true}  accountName='Divyam Mishra' avatar={Logo} chatMessage='Hello there! 🤝
How can I help?'/>
   </>
  );
}

export default App;
