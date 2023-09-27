import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './ToDoList'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <Navbar />
      <ToDoList />
    </>
  )
}

export default App
