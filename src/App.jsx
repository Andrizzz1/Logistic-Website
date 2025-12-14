import { useState } from 'react'
import WebHeader from './Heading'
import HeroSection from './HeroSecrion';
import Services from './services';

function App(){
  return(
  <div>
    <WebHeader />
    <HeroSection />
    <Services />
  </div>)
}

export default App;