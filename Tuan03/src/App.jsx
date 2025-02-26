import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Center from './components/Center'
import Investment from './components/Investment'

function App() {

  return (
    <>
        <Header />
        <Center />
        <Footer />
        <Investment />
    </>
  )
}

export default App
