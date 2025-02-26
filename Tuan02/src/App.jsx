import { useState } from 'react'
import './App.css'
import Hello from './components/hello'
import AddTwoNumber from './components/AddTwoNumber'
import CongTruNhanChia from './components/CongTruNhanChia'
import Button from './components/Button'

function App() {

  return (
    <>
      <Hello />
      <AddTwoNumber />
      <CongTruNhanChia />
      <Button color="red" />
      <Button color="Blue" />
    </>
  )
}

export default App
