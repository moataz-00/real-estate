import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testinomials from './components/Testinomials'
import Contact from './components/Contact'

import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header/>
      <About/>
      <Projects/>
      <Testinomials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App