import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Center from './components/Center'
import Investment from './components/Investment'
import ListItem from './components/Items/ListItem'

function App() {

  return (
    <>
        <Header />
        <Center />
        <Footer />
        <Investment />
        <ListItem />
    </>
  )
}

export default App
